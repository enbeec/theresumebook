import { useState } from "react";

// I'm using this to track which posts are being edited
//	so no need for initial state
export const useSet = () => {
  const [state, setState] = useState([]);

  // https://ganes.dev/use-javascript-sets-with-react-useState
  const addElement = (element) => {
    const newSet = new Set(state);
    setState([...newSet.add(element)]);
  };

  const removeElement = (element) => {
    const newSet = new Set(state);
    if (newSet.has(element)) {
      newSet.delete(element);
      setState([...newSet]);
    } else if (element === undefined) {
      // this part is here so I can call removeElement()
      //	to trigger any useEffect watching state
      //	e.g. how I trigger PostList rerender
      setState([...newSet]);
    }
  };

  return [state, addElement, removeElement];
};

export default useSet;
