import { useEffect, useReducer } from "react";

function useLocalStorageReducer(key, initialValue, reducer) {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(initialValue)
      );
    } catch (e) {
      value = initialValue;
    }
    return value;
  });
  console.log(state);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}
export { useLocalStorageReducer };
