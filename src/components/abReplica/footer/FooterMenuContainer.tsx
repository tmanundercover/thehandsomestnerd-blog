import React, {FunctionComponent} from 'react'
import {Grid} from '@material-ui/core'
import FooterMenuGroup from './FooterMenuGroup'
import cmsClient, {SanityMenuContainer, SanityMenuGroup} from '../cmsClient'

const FooterMenuContainer: FunctionComponent = () => {
  const [menu, setMenu] = React.useState<SanityMenuContainer>()

  const getMenuData = async (): Promise<void> => {
    const data = await cmsClient.fetchLandingPageFooterMenu()
    setMenu(data)
  }

  React.useEffect(() => {
    getMenuData().then()
  }, [])

  return (
    <Grid container spacing={5}>
      {
        menu?.menuItems?.map((menuGroup: SanityMenuGroup, index: number) => {
          return (
            <Grid key={index} item>
              <FooterMenuGroup menuGroup={menuGroup}/>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default FooterMenuContainer