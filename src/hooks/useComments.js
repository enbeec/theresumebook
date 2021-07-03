import { useState } from "react";

const useComments = (foreignKeys) => {
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
  const apiURL = `http://${window.location.hostname}:6501/comments`;
  const makeURL = (foreignKeys) => {
    var params = "?";
    for (const fk in foreignKeys) {
      if (params === "?") {
        params += `${fk}=${foreignKeys[fk]}`;
      } else {
        params += `&${fk}=${foreignKeys[fk]}`;
      }
    }
    return `${apiURL}${params}&_expand=user`;
  };

  const fetchComments = () =>
    fetch(makeURL(foreignKeys)).then((res) => res.json());

  const deleteComment = (id) => fetch(`${apiURL}/${id}`, { method: "DELETE" });
  const [comments, setComments] = useState([]);

  // TODO this is not how I wanna return this stuff
  return [comments, setComments, fetchComments, deleteComment];
};

export default useComments;
