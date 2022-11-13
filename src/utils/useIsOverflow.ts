import React, {Ref} from "react";

export const useIsOverflow = (ref:any, callback: (hasOverflow:boolean)=> any) => {
    const [isOverflow, setIsOverflow] = React.useState<boolean | undefined>(undefined);

    React.useLayoutEffect(() => {
        const { current } = ref;

        const trigger = () => {
            const hasOverflow = current.scrollWidth > current.clientWidth;

            setIsOverflow(hasOverflow);

            if (callback) callback(hasOverflow);
        };

        if (current) {
            if ('ResizeObserver' in window) {
                new ResizeObserver(trigger).observe(current);
            }
            trigger();
        }
    }, [callback, ref]);

    return isOverflow;
};