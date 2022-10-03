import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import { Button, Grid, Typography } from '@material-ui/core'
import theme from "../../../../common/Theme";
import sanityClient from "../../../../sanityClient";
import {SanityMenuGroup} from "../../../../sanity/Menu";
import imageUrlBuilder from "@sanity/image-url"
import myLogo from "./logo.png"

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '30px',
    padding: theme.spacing(4,4, 8,4),
    // backgroundColor: 'black',
    zIndex:9999
  },
  headerMenuItem: {
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '30px',
    letterSpacing: '1px'
  }
}))

export type HeaderProps = {
  menuSlug?:string
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const classes = useStyles(theme)

  const urlFor = (source:any) => {
    return imageUrlBuilder(sanityClient).image(source)
  }

  const [menu, setMenu] = React.useState<SanityMenuGroup>({})

  React.useEffect(() => {
    console.log(menu)
  }, [menu])


  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $menuSlug]{
          title,
          slug,
          logoImage,
          menuGroupTitle,
          "links": links[]->{title, displayText, url, isOutlinedButton, isContainedButton}
       }`,{menuSlug:props.menuSlug ?? 'header-menu'}
      )
      .then((data: SanityMenuGroup[]) => {
        console.log(data[0])
        setMenu(data[0])
      })
      .catch(console.error)
  }, [])

  return (
    <Grid container justifyContent="space-between" className={classes.root} alignItems='center'>
      <Grid item>
        <img
          alt="logo"
          style={{height: "43px"}}
          src={urlFor(menu.logoImage).url()??""}
          // src={urlFor(menu?.logoImage).height(50).url()??""}
        />
      </Grid>
      <Grid item>
        <Grid container spacing={5}>
          {
            menu?.links?.map(
              (menuLink,index) => (

                <Grid item key={index}>
                  <Button href={menuLink.url??""} color='secondary' variant={menuLink.isContainedButton? 'contained': (menuLink.isOutlinedButton?'outlined':'text')}>

                  <Typography className={classes.headerMenuItem} style={{color: menuLink.isContainedButton  ? "whitesmoke": 'unset' }}>
                    {menuLink.displayText}
                  </Typography>
                  </Button>
                </Grid>))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header