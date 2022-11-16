import React, {FunctionComponent, PropsWithChildren, useMemo, useReducer,} from 'react';
import MediaQueriesContext from './MediaQueriesContext';
import useWidth from "../../utils/useWidth";

type IProps = {};

type MediaQueryStateType = {
    mdDown?: boolean,
    smDown?: boolean,
    xsOnly?: boolean,
    mdUp?: boolean
    xsDown?: boolean
};
const initialState:MediaQueryStateType = {

};

const reducer = (state: any, action: any):MediaQueryStateType => {

    switch (action.type) {
        case 'INITIAL':
            return initialState;
         case 'XS':
            return {
                mdDown: true,
                smDown: true,
                xsOnly: true,
                mdUp: false,
                xsDown: true
            }
        case 'SM':
            return {
                mdDown: true,
                smDown: true,
                xsOnly: true,
                mdUp: false,
                xsDown: false

            }
        case 'MD':
            return {
                mdDown: true,
                smDown: false,
                xsOnly: false,
                mdUp: true,
                xsDown: false
            };
        case 'LG':
            return {
                mdDown: false,
                smDown: false,
                xsOnly: false,
                mdUp: true,
                xsDown: false
            };
        case 'XL':
            return {
                mdDown: false,
                smDown: false,
                xsOnly: false,
                mdUp: true,
                xsDown: false
            };
        default:
            throw new Error();
    }
}

const MediaQueriesProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const width = useWidth()

    React.useEffect(() => {
            console.log(width)
            switch (width){
                case 'xs':
                    dispatch({type:'XS', payload: {width}})
                    break
                case 'sm':
                    dispatch({type:'SM', payload: {width}})
                    break
                case 'md':
                    dispatch({type:'MD', payload: {width}})
                    break
                case 'lg':
                    dispatch({type:'LG', payload: {width}})
                    break
                case 'xl':
                    dispatch({type:'XL', payload: {width}})
                    break
                default:
                    // dispatch({type:'INITIAL', payload: {width}})
            }

        }, [width])

    const newValue = useMemo(
        () => ({
            mdDown: state.mdDown,
            smDown: state.smDown,
            xsOnly: state.xsOnly,
            xsDown: state.xsDown,
            mdUp: state.mdUp
        }),
        [
            state,
            width
        ]
    );

    return (
        <MediaQueriesContext.Provider value={newValue}>
            {props.children}
        </MediaQueriesContext.Provider>
    );
};

export default MediaQueriesProvider;
