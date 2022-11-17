import React, {FunctionComponent, PropsWithChildren, useContext, useMemo, useReducer,} from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";
import AmenityContext from './AmenityContext';
import {Grid, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {v4 as uuidv4} from "uuid";
import ToolTipWrap from "../transform-hw/ToolTipWrap";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import PageContext from "../page-context/PageContext";
import ColoredPng from "../colored-png/ColoredPng";
import snackbarContext from "../snackbar-context/SnackbarContext";
import SnackbarContext from "../snackbar-context/SnackbarContext";

type IProps = {};

type MediaQueryStateType = {
    serviceId?: string
    elementsObj?: { [key: string]: JSX.Element }
};
const initialState: MediaQueryStateType = {};

const reducer = (state: any, action: any): MediaQueryStateType => {
    switch (action.type) {
        case 'INITIAL':
            return initialState;
        case 'LOAD_SERVICE_ID':
            return {
                ...state,
                serviceId: action.payload.serviceId,
            };
        // case 'LOAD_AMENITIES':
        //     state.elements && delete state.elements
        //     return {
        //         ...state,
        //         currentAmenities: action.payload.currentAmenities,
        //         elements: undefined
        //     };
        // case 'LOAD_ELEMENTS':
        //     // state.currentAmenities && delete state.currentAmenities
        //     return {
        //         ...state,
        //         elements: action.payload.elements,
        //     };
        case 'ADD_ELEMENTS':
            // state.currentAmenities && delete state.currentAmenities
            return {
                ...state,
                elementsObj: {...state.elementsObj, [action.payload.serviceId]: action.payload.elements},
            };
        case 'CLEAR_AMENITIES':
            state.currentAmenities && delete state.currentAmenities
            state.elements && delete state.elements
            state.elementsObj && delete state.elementsObj
            return {
                ...state,
                currentAmenities: undefined,
                elements: undefined,
                elementsObj: undefined,
                serviceId: action.payload.serviceId
            };
        default:
            throw new Error();
    }
}

const AmenityProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const pageContext = useContext(PageContext)

    React.useEffect(() => {
        console.log("Generating amenities", pageContext.page?.servicesAvailable)
        pageContext.page?.servicesAvailable?.map((service) => {
            const serviceElements = generateAmenitiesElement(service.serviceAmenities, service.slug.current, service.contentTitle)
            console.log("Generated amenties", serviceElements, service.slug.current)
            dispatch({type: "ADD_ELEMENTS", payload: {serviceId: service.slug.current, elements: serviceElements}})
        })
    }, [pageContext.page?.servicesAvailable])

    const generateAmenitiesElement = (amenities: any[], serviceSlug: string, serviceTitle: string) => {
        console.log(" generate", serviceSlug, state.serviceId)
        // if(serviceSlug === state.serviceId)
        const newElements = amenities?.map((serviceAmenity: ServiceAmenityType) => {
            return <ListItem
                key={uuidv4()}
                style={{
                    height: "140px",
                    width: "100px",
                    backgroundColor: "whitesmoke",
                    zIndex: 11
                }}
            >
                <ToolTipWrap
                    serviceTitle={serviceTitle}
                    amenity={serviceAmenity}
                >
                    <Grid container item direction='column'
                          style={{
                        marginBottom: "24px",
                              width: "100%"

                    }} alignItems='center' alignContent='center'>
                        <ListItemIcon key={uuidv4()}
                              style={{
                                  minHeight: "32px",
                                  minWidth: "32px",
                                  backgroundSize: 'contain',
                                  backgroundPosition: 'center',
                                  backgroundImage: `url(${urlFor(serviceAmenity.imageSrc).width(32).height(32).url()})`,
                                  backgroundRepeat: "no-repeat",

                              }}
                        ></ListItemIcon>

                        <ListItemText>
                            <Typography
                                variant='subtitle2'
                                align='center'
                            >{serviceAmenity.title}</Typography>
                        </ListItemText>
                    </Grid>
                </ToolTipWrap>
            </ListItem>
        })


        return newElements
    }

    const init = async (slug: string) => {
        await dispatch({type: "LOAD_SERVICE_ID", payload: {serviceId: slug}})
    }

    const getElements = (slug: string) => {

        return (state.elementsObj && state.elementsObj[slug]) ?? <></>
    }
    const snackbarContext = useContext(SnackbarContext)

    const openSnackbar = (serviceTitle: string, amenity: ServiceAmenityType) => {
        const snack = <Grid
            container
            style={{minWidth: "200px"}}
        >
            <Grid item container xs={12} justifyContent='flex-end' alignItems='center' spacing={1}
                  style={{marginBottom: "8px"}}>
                <Typography gutterBottom
                            variant='subtitle2'
                            color='textSecondary'>{serviceTitle} Amenity</Typography>
            </Grid>
            <Grid item container xs={12}>
                <Typography
                    variant='body2' color='textSecondary'
                    gutterBottom>{amenity.title}</Typography>
            </Grid>
            <Grid container item spacing={2} alignContent='center'
                  alignItems='stretch' wrap={"nowrap"}>
                <Grid style={{maxWidth: "72px"}} item xs={2} container justifyContent='center'
                      alignContent='center' alignItems='center'>
                    <ColoredPng size={48} maskUrl={urlFor(amenity.imageSrc).url() ?? ""}
                                color={"white"}/>
                </Grid>
                <Grid item container alignItems='center' alignContent='center'>
                    <Typography gutterBottom
                                variant='body1' color='textSecondary' style={{
                        fontWeight: "normal",
                    }}>{amenity.description}</Typography>
                </Grid>
            </Grid>

        </Grid>

        snackbarContext.openSnackbar && snackbarContext.openSnackbar(snack)
    }

    const newValue = useMemo(
        () => ({
            getElements,
            serviceId: state.serviceId,
            init,
            openSnackbar
        }),
        [
            getElements,
            state.serviceId,
            init,
            openSnackbar
        ]
    );

    return (
        <AmenityContext.Provider value={newValue}>
            {props.children}
        </AmenityContext.Provider>
    );
};

export default AmenityProvider;
