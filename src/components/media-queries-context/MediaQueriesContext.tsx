import React from 'react';

export type MediaQueriesContextType = {
    smDown?: boolean
    xsDown?: boolean
    mdUp?: boolean
    mdDown?: boolean
    xsOnly?: boolean
};

const MediaQueriesContext = React.createContext<MediaQueriesContextType>({});

export default MediaQueriesContext;
