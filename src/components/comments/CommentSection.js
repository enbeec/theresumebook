import React, { useState } from "react";
import { useQuery } from "react-query";

export const CommentSection = ({ foreignKeys, ...props }) => {
  /*
		foreignKeys can have any of the following properties:
			userId, postId, postTypeId

		  example for a single post
		  {
			  postId: 6
		  }
		  example for an entire project section
		  {
			  userId: 4,
			  postTypeId: 2			  
		  }	
	*/
  const makeURL = (foreignKeys) => {
    var params = "?";
    for (const fk in foreignKeys) {
      if (params === "?") {
        params += `${fk}=${foreignKeys[fk]}`;
      } else {
        params += `&${fk}=${foreignKeys[fk]}`;
      }
    }
    return `http://localhost:6501/comments${params}`;
  };

  const [url] = useState(makeURL(foreignKeys));

  // useQuery needs a unique key -- we use the urlParams
  const { isLoading, error, comments } = useQuery("foo", () =>
    fetch(url).then((res) => res.json())
  );

  return isLoading ? (
    <div>...loading...</div>
  ) : error ? (
    <div>ERROR</div>
  ) : (
    <div>{JSON.stringify(comments, null, "\t")} </div>
  );
};
