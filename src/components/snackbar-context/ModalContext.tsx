import React from 'react';
import {SanityModalType, TextElementType} from "../../common/sanityIo/Types";

export type ModalContextType = {
    openModal?: (contents?: SanityModalType) => void,
    handleModalClose?: (event: React.SyntheticEvent | Event) => void
};

const ModalContext = React.createContext<ModalContextType>({});

export default ModalContext;
