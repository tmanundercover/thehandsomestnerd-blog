import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import MainLayout from './MainLayout'
import {SanityLandingPage, SanityMenuContainer} from './cmsClient'
import cmsClient from './cmsClient'

jest.mock('./cmsClient')

describe('Landing Pages', () => {
  let fetchLandingPageMock: (query: string) => Promise<SanityLandingPage>
  let fetchLandingPageHeaderMenuMock: () => Promise<SanityMenuContainer>
  let fetchLandingPageFooterMenuMock: () => Promise<SanityMenuContainer>

  beforeEach(async () => {
    let sanityLandingPage: SanityLandingPage = {
      welcomeMessage: 'welcome-message',
      // mainImage: {asset: {_id: 'asset-id', url: 'asset-url'}},
      headerText: 'header-text',
      body: 'body-text',
      form: {
        abFormType: {title: 'XLEAD'},
        // @ts-ignore instructionBlock type bypass
        instructionBlock: [{
          '_key': 'a15b9fb36f78',
          '_type': 'block',
          'children': [
            {
              '_key': 'c8086b41653c',
              '_type': 'span',
              'marks': [],
              'text': 'Join and be entered to win our ultimate Swag Bag, packed with '
            },
            {
              '_key': '6017ea903437',
              '_type': 'span',
              'marks': [
                'primaryTextColor'
              ],
              'text': '$500 of products'
            },
            {
              '_key': '14cb32f38a22',
              '_type': 'span',
              'marks': [],
              'text': ' from our portfolio of brands.\n'
            }
          ],
          'markDefs': [],
          'style': 'normal'
        }
        ]
      }
    }
    fetchLandingPageMock = () => Promise.resolve(sanityLandingPage)
    cmsClient.fetchLandingPage = jest.fn(fetchLandingPageMock)

    let sanityHeaderMenu: SanityMenuContainer = {
      menuItems: [{
        links: [{
          title: 'header-link-title-1',
          displayText: 'header-link-display-text-1',
          url: 'header-link-url-1'
        }]
      }]
    }
    fetchLandingPageHeaderMenuMock = () => Promise.resolve(sanityHeaderMenu)
    cmsClient.fetchLandingPageHeaderMenu = jest.fn(fetchLandingPageHeaderMenuMock)

    let sanityFooterMenu: SanityMenuContainer = {
      menuItems: [{
        links: [{
          title: 'footer-link-title-1',
          displayText: 'footer-link-display-text-1',
          url: 'footer-link-url-1'
        }]
      }]
    }
    fetchLandingPageFooterMenuMock = () => Promise.resolve(sanityFooterMenu)
    cmsClient.fetchLandingPageFooterMenu = jest.fn(fetchLandingPageFooterMenuMock)

    render(<MemoryRouter
        initialEntries={['/hello/factors21']}><MainLayout/></MemoryRouter>)
    await waitFor(() => screen.getByText('welcome-message'))
  })

  it('displays header and footer', () => {
    expect(screen.getByText('header-text')).toBeInTheDocument()
    expect(screen.getByText('footer-link-display-text-1')).toBeInTheDocument()
  })

})