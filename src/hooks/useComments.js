import { useQuery } from "react-query";

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
  const makeURL = (foreignKeys) => {
    var params = "?";
    for (const fk in foreignKeys) {
      if (params === "?") {
        params += `${fk}=${foreignKeys[fk]}`;
      } else {
        params += `&${fk}=${foreignKeys[fk]}`;
      }
    }
    return `http://localhost:6501/comments${params}&_expand=user`;
  };

  const fetchComments = () =>
    fetch(makeURL(foreignKeys)).then((res) => res.json());

  // useQuery needs a unique key
  return useQuery(JSON.stringify(foreignKeys), fetchComments);
};

export default useComments;
