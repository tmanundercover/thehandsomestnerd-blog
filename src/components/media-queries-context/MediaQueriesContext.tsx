import React from 'react';

export type MediaQueriesContextType = {
    smDown?: boolean
    xsDown?: boolean
    mdUp?: boolean
    mdDown?: boolean
    xsOnly?: boolean
    width?: string
};

const MediaQueriesContext = React.createContext<MediaQueriesContextType>({});

export default MediaQueriesContext;
