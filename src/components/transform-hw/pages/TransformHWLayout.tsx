import React, {FunctionComponent} from 'react'
import PageMux from "./PageMux";

export type AppLayoutProps = {}

const TransformHWLayout: FunctionComponent<AppLayoutProps> = (props) => {
    return (
        <PageMux/>
    )
}

export default TransformHWLayout