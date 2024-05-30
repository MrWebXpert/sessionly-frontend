
import { useEffect } from "react";

function useEffectAsync(effect, deps, destructor) {
    return useEffect(() => {
        effect();

        return destructor;
    }, deps);
}

export {
    useEffectAsync
};