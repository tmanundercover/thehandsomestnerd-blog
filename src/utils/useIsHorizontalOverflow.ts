import React from "react";

export const useIsHorizontalOverflow = (ref: any, callback: (hasOverflow?: boolean) => any) => {
    const [isOverflow, setIsOverflow] = React.useState<boolean | undefined>(undefined);

    React.useEffect(() => {
        if (callback) callback(isOverflow);
    }, [isOverflow])


    React.useLayoutEffect(() => {
        const {current} = ref;

        const trigger = () => {

            const hasOverflow = current.scrollWidth > current.clientWidth;
            setIsOverflow(hasOverflow);
            if (callback) callback(hasOverflow)
        };

        let construct: ResizeObserver
        if (current) {
            if ('ResizeObserver' in window) {
                construct = new ResizeObserver(trigger)
                construct.observe(current);
            }
            trigger();
        }

        return () => {
            if (!!construct) {
                construct.disconnect()
            }
        }
    }, [ref, callback]);

    return isOverflow;
};