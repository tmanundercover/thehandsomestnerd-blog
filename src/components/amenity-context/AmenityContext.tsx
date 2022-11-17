import React from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";

export type AmenityContextType = {
    init?: (slug:string)=>any
    getElements?: (slug:string)=>JSX.Element
    serviceId?: string
    openSnackbar?: (serviceTitle:string, amenity: ServiceAmenityType) => any
};

const AmenityContext = React.createContext<AmenityContextType>({});

export default AmenityContext;
