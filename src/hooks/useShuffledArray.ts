import { useMemo } from "react";
import { shuffleArray } from "../utils";

function useShuffledArray<T>(array: T[]): T[] {
    return useMemo(() => {
        return shuffleArray(array);
    }, [array]);
}

export default useShuffledArray;
