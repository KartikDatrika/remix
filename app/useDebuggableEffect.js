import { useEffect } from "react";

export default function useDebuggableEffect({
  effect = () => {},
  deps = [],
  componentName = "",
}) {
  useEffect(() => {
    console.log("useDebuggableEffect" + " " + componentName, " Mounted");
    const cleanUp = effect();
    return () => {
      console.log("useDebuggableEffect" + " " + componentName, " Unmounted");
      if (cleanUp) {
        cleanUp();
      }
    };
  }, deps);
}
