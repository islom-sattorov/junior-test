import { useEffect, useState } from "react";
import { Timeout } from "../../types/types";
export const useMountTransition = (
  isMounted: boolean,
  unMountDelay: number
) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: number | Timeout;
    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unMountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unMountDelay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};
