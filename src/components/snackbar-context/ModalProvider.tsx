import React, {FunctionComponent, PropsWithChildren, useContext, useMemo, useRef,} from 'react';
import {Grid, IconButton, List, ListItem, ListItemText, Modal, Typography, useTheme} from "@material-ui/core";
import ModalContext from './ModalContext';
import {SanityModalType, TextElementType} from "../../common/sanityIo/Types";
import ColoredPng from "../colored-png/ColoredPng";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {ArrowDropDown, Close} from "@material-ui/icons";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import LoadingButton from "../loading-button/LoadingButton";
import {useIsVerticalOverflow} from "../../utils/useIsVerticalOverflow";
import {COLORS} from "../../theme/MixedFeelingsByTTheme";

type IProps = {};

const ModalProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false)
    const theme = useTheme()
    const ref: any = useRef(null)
    const isOverflow = useIsVerticalOverflow(ref, () => {
    })
    const [modalContent, setModalContent] = React.useState<SanityModalType | undefined>(
        undefined,
    );

    const mediaQueriesContext = useContext(MediaQueriesContext)
    const handleModalClose = (event: React.SyntheticEvent | Event) => {
        setModalOpen(false)
    }

    React.useEffect(() => {
        console.log("height", ref?.current?.scrollHeight, ref?.current?.clientHeight)
    }, [ref.current])

    const openModal = (contents?: SanityModalType) => {
        console.log("Opening modal", contents)
        if (!contents) {
            return;
        }
        setModalOpen(true)
        setModalContent(contents)
    }

    const newValue = useMemo(
        () => ({
            openModal,
            handleModalClose
        }),
        [openModal, handleModalClose, modalContent]
    );
    return (
        <ModalContext.Provider value={newValue}>
            <Grid container item>
                <Modal
                    open={modalOpen}
                    onClose={handleModalClose}
                >
                    <Grid container justifyContent='center' alignItems='stretch' alignContent='center'
                          style={{width: "100%", height: "100%", position: "relative"}}>

                        <Grid item container xs={12} sm={9} md={7} style={{
                            border: `2px solid ${COLORS.DARKORANGE}`,
                            // borderRight:`4px solid ${theme.palette.primary.dark}`,
                            backgroundColor: 'rgb(250,250,250,.96)',
                            color: theme.palette.getContrastText(theme.palette.background.paper),
                            padding: theme.spacing(0, 0, 4, 0),
                            margin: theme.spacing(!mediaQueriesContext.xsDown ? 4 : 0, 0),
                            maxHeight: "100%",
                            // minHeight: '550px',
                            overflowY:"scroll",
                            height: mediaQueriesContext.xsDown ? "100%" : "unset",
                            position: "relative"
                        }} justifyContent='center' alignContent={'flex-start'}>
                            <Grid container item justifyContent='flex-end' style={{position: "absolute"}}>
                                <IconButton color='primary' onClick={() => setModalOpen(false)}
                                            style={{zIndex: 3, margin: theme.spacing(2.5, 2.5, 0, 0)}}>

                                    <Close color={'secondary'} fontSize='large'/>
                                </IconButton>
                            </Grid>

                            <Grid container item justifyContent='center' alignItems='center' alignContent='center'
                                  style={{position: "absolute", height: "100%", zIndex: 1}}>
                                <ColoredPng color={'rgba(16, 43, 136, .3)'}
                                            maskUrl={urlFor(modalContent?.iconOverlayImageSrc ?? "").url() ?? ""}
                                            size={400}/>
                            </Grid>
                            <Grid container item justifyContent='center' alignItems='center' alignContent='center'
                                  xs={12}
                                  // spacing={mediaQueriesContext.smDown ? 2 : 4}
                                  style={{
                                      padding: theme.spacing(10, 1, 0, 1),
                                      zIndex: 2
                                  }}
                            >
                                <Grid container xs={10} sm={12} item justifyContent='center' alignItems="center" alignContent='center' style={{flexGrow:"1", marginBottom: theme.spacing(2)}}>
                                    <Typography variant='h4' align='center'
                                                color='secondary'>{modalContent?.title}</Typography>
                                </Grid>
                                <Grid container item style={{position: "relative", flexGrow:"2"}} justifyContent='center'>
                                    <Grid container xs={12} sm={11}
                                          ref={ref}

                                          style={{maxHeight: mediaQueriesContext.xsDown?"":"600px", overflowY: "scroll", overflowX: "hidden"}}>
                                        <List style={{marginBottom:"36px"}}>
                                            {
                                                modalContent?.contentText.map((faq: TextElementType) => {
                                                    return <ListItem>
                                                        <ListItemText>
                                                            <Typography variant='body2' gutterBottom
                                                                        color='secondary'>{faq?.question}</Typography>
                                                            <Typography variant='body1' style={{
                                                                // borderLeft: "1px solid white",
                                                                paddingLeft: theme.spacing(2)
                                                            }}>{faq?.answer}</Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                })
                                            }
                                        </List>
                                    </Grid>
                                    {/*{ref.current?.clientHeight > 800 &&*/}
                                    {/*    <Grid container alignItems='flex-end' item style={{*/}
                                    {/*        position: "absolute",*/}
                                    {/*        bottom: 0,*/}
                                    {/*        left: 0,*/}
                                    {/*        minHeight: "100px",*/}
                                    {/*        pointerEvents: "none",*/}
                                    {/*        backgroundImage: "linear-gradient(180deg, transparent, whitesmoke)"*/}
                                    {/*    }} justifyContent='center'>*/}
                                    {/*        <ArrowDropDown/>*/}
                                    {/*    </Grid>}*/}
                                </Grid>
                                {modalContent?.notes?.map((note: string, index: number) => {
                                    return <ListItem>
                                        <ListItemText>
                                            {index === 0 && <Typography variant='body2' gutterBottom
                                                                        color='secondary'>Note:</Typography>}
                                            <Typography variant='body1' style={{
                                                // borderLeft: "1px solid white",
                                                paddingLeft: theme.spacing(2)
                                            }}>{note}</Typography>
                                        </ListItemText>
                                    </ListItem>
                                })}
                                {modalContent?.ctaButtonTitle && modalContent?.ctaButtonTitle.length > 0 &&
                                    <Grid item style={{marginTop: theme.spacing(4)}}>
                                        <LoadingButton href={modalContent?.ctaButtonLink} color={"secondary"}
                                                       variant='contained'>
                                            <Typography variant='button'
                                                        color='textSecondary'>{modalContent?.ctaButtonTitle}</Typography>
                                        </LoadingButton>
                                    </Grid>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Modal>
            </Grid>
            <Grid container item>
                {props.children}
            </Grid>
        </ModalContext.Provider>
    );
};

export default ModalProvider;
