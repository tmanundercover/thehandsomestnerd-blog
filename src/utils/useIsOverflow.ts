import React, {Ref} from "react";

export const useIsOverflow = (ref: any, callback: (hasOverflow?: boolean) => any) => {
    const [isOverflow, setIsOverflow] = React.useState<boolean | undefined>(undefined);

    React.useEffect(() => {
        if (callback) callback(isOverflow);
        }, [isOverflow])


    React.useLayoutEffect(() => {
        const {current} = ref;

        const trigger = (entries?: any[]) => {

            setIsOverflow((state) => {
                const hasOverflow = entries ? entries[0].scrollWidth > entries[0].clientWidth : current.scrollWidth > current.clientWidth;
                let newState = state

                if (hasOverflow !== newState) {
                    newState = hasOverflow
                }

                return newState
            });
        };

        let construct: ResizeObserver
        if (current) {
            // if ('ResizeObserver' in window) {
            //     construct = new ResizeObserver(trigger)
            //     construct.observe(current);
            // }
            trigger();
        }

        return () => {
            if (!!construct) {
                construct.disconnect()
            }
        }
    }, [ref]);

    return isOverflow;
};