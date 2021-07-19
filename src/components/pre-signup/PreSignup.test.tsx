// import {fireEvent, render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
// import React from 'react'
// import {MemoryRouter} from 'react-router-dom'
// import PreSignup from './PreSignup'
// import leadClient from './leadClient'
// import analytics from '../../services/analytics'
// import analyticsMessages from '../../analyticsMessages'
// import config from '../../config'
// import {Utm} from '../utm'
//
// jest.mock('./leadClient')
//
// describe('Pre Signup', () => {
//   let createLeadMock: () => Promise<void>
//   let updateLeadMock: () => Promise<void>
//
//   describe('Step 1', () => {
//     beforeEach(() => {
//       createLeadMock = () => Promise.resolve()
//       leadClient.createLead = jest.fn(createLeadMock)
//       analytics.userEvent = jest.fn(() => Promise.resolve())
//       render(<MemoryRouter initialEntries={['/apply/step-1?utm_source=email&utm_medium=referral&utm_campaign=origination']}><PreSignup/></MemoryRouter>)
//     })
//
//     it('displays error message and disables button on invalid email', () => {
//       fireEvent.change(screen.getByRole('textbox', {name: 'Your Email'}), {target: {value: 'abc@example'}})
//       fireEvent.blur(screen.getByRole('textbox', {name: 'Your Email'}))
//
//       expect(screen.getByText('Invalid email, please provide a valid address.')).toBeInTheDocument()
//       expect(screen.getByRole('button', {name: 'next to step 2'})).toBeDisabled()
//     })
//
//     it('allows input of email address and continues', async () => {
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_ONE_STARTED)
//       expect(screen.getByRole('button', {name: 'next to step 2'})).toBeDisabled()
//       fireEvent.change(screen.getByRole('textbox', {name: 'Your Email'}), {target: {value: 'abc@example.com'}})
//       expect(screen.getByRole('button', {name: 'next to step 2'})).toBeEnabled()
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 2'}))
//
//       await waitFor(() => screen.getByText('Introduce your'))
//       expect(screen.getByText('Introduce your')).toBeInTheDocument()
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_ONE_SUCCESS)
//       const utm: Utm = {utmSource: 'email', utmMedium: 'referral', utmCampaign: 'origination'}
//       expect(leadClient.createLead).toHaveBeenCalledWith('abc@example.com', utm)
//     })
//
//     it( 'does not allow double clicking', async () => {
//       fireEvent.change(screen.getByRole('textbox', {name: 'Your Email'}), {target: {value: 'abc@example.com'}})
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 2'}))
//       expect(screen.getByRole('button', {name: 'next to step 2'})).toBeDisabled()
//       await waitFor(() => screen.getByRole('progressbar'))
//     })
//
//     it('sends GA event if step one fails in some way', async () => {
//       leadClient.createLead = jest.fn(() => Promise.reject())
//       fireEvent.change(screen.getByRole('textbox', {name: 'Your Email'}), {target: {value: 'abc@example.com'}})
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 2'}))
//       await waitFor(() => screen.getByText('first step'))
//
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_ONE_FAIL)
//     })
//
//     it('redirects to assembledbrands.com when clicking on the logo', () => {
//       expect(screen.getByRole('img', {name: 'Assembled Brands'}).parentElement).toHaveAttribute('href', 'https://assembledbrands.com')
//     })
//   })
//
//   describe('Step 2', () => {
//     beforeEach(async () => {
//       createLeadMock = () => Promise.resolve()
//       leadClient.createLead = jest.fn(createLeadMock)
//       updateLeadMock = () => Promise.resolve()
//       leadClient.updateLead = jest.fn(updateLeadMock)
//       analytics.userEvent = jest.fn(() => Promise.resolve())
//       render(<MemoryRouter initialEntries={['/apply/step-1']}><PreSignup/></MemoryRouter>)
//
//       fireEvent.change(screen.getByRole('textbox', {name: 'Your Email'}), {target: {value: 'abc@example.com'}})
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 2'}))
//       await waitFor(() => screen.getByText('Introduce your'))
//     })
//
//     it('allows input of brand name, website and desired loan amount and continues', async () => {
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_TWO_STARTED)
//       fireEvent.change(screen.getByRole('textbox', {name: 'Brand Name'}), {target: {value: 'Assembled Brand'}})
//       fireEvent.change(screen.getByRole('textbox', {name: 'Website'}), {target: {value: 'example.com'}})
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Desired Loan Amount/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Under $1M'}))
//       expect(screen.getByRole('button', {name: 'next to step 3'})).toBeEnabled()
//
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 3'}))
//       await waitForElementToBeRemoved(() => screen.queryByText('Introduce your'))
//
//       const updateRequest = {email: 'abc@example.com', brandName: 'Assembled Brand', website: 'example.com', desiredLoanAmount: 'Under $1M'}
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_TWO_SUCCESS)
//       expect(leadClient.updateLead).toHaveBeenCalledWith(updateRequest)
//     })
//
//     it( 'does not allow double clicking', async () => {
//       fireEvent.change(screen.getByRole('textbox', {name: 'Brand Name'}), {target: {value: 'Assembled Brand'}})
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Desired Loan Amount/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Under $1M'}))
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 3'}))
//
//       expect(screen.getByRole('button', {name: 'next to step 3'})).toBeDisabled()
//       await waitFor(() => screen.getByRole('progressbar'))
//     })
//     it('show error message and disable next button on missing brand name in step 2', async () => {
//       fireEvent.change(screen.getByRole('textbox', {name: 'Brand Name'}), {target: {value: ''}})
//       fireEvent.blur(screen.getByRole('textbox', {name: 'Brand Name'}))
//       expect(screen.getByText('Please provide a valid brand name.')).toBeInTheDocument()
//       expect(screen.getByRole('button', {name: 'next to step 3'})).toBeDisabled()
//     })
//
//     it('show error message and disable next button on invalid brand name in step 2', async () => {
//       fireEvent.change(screen.getByRole('textbox', {name: 'Brand Name'}), {target: {value: '!'}})
//       fireEvent.blur(screen.getByRole('textbox', {name: 'Brand Name'}))
//       expect(screen.getByText('Please provide a valid brand name.')).toBeInTheDocument()
//       expect(screen.getByRole('button', {name: 'next to step 3'})).toBeDisabled()
//     })
//
//     it('sends GA event if step two fails in some way', async () => {
//       leadClient.updateLead = jest.fn(() => Promise.reject())
//       fireEvent.change(screen.getByRole('textbox', {name: 'Brand Name'}), {target: {value: 'Assembled Brand'}})
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Desired Loan Amount/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Under $1M'}))
//
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 3'}))
//       await waitFor(() => screen.getByText('Introduce your'))
//
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_TWO_FAIL)
//     })
//   })
//
//   describe('Step 3', () => {
//     beforeEach(async () => {
//       createLeadMock = () => Promise.resolve()
//       leadClient.createLead = jest.fn(createLeadMock)
//       updateLeadMock = () => Promise.resolve()
//       leadClient.updateLead = jest.fn(updateLeadMock)
//       analytics.userEvent = jest.fn(() => Promise.resolve())
//       render(<MemoryRouter initialEntries={['/apply/step-1']}><PreSignup/></MemoryRouter>)
//
//       fireEvent.change(screen.getByRole('textbox', {name: 'Your Email'}), {target: {value: 'abc@example.com'}})
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 2'}))
//       await waitFor(() => screen.getByText('Introduce your'))
//
//       fireEvent.change(screen.getByRole('textbox', {name: 'Brand Name'}), {target: {value: 'Assembled Brand'}})
//       fireEvent.change(screen.getByRole('textbox', {name: 'Website'}), {target: {value: 'example.com'}})
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Desired Loan Amount/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Under $1M'}))
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 3'}))
//       await waitFor(() => screen.getByText('Extra credit!'))
//     })
//
//     it('allows input of any field on step 3 to continue', async () => {
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_THREE_STARTED)
//
//       expect(screen.getByRole('button', {name: 'submit'})).toBeDisabled()
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Revenue/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//
//       expect(screen.getByRole('button', {name: 'submit'})).toBeEnabled()
//
//       fireEvent.click(screen.getByRole('button', {name: 'submit'}))
//       await waitFor(() => screen.getByText('Got it!'))
//
//       const updateRequest = {
//         email: 'abc@example.com',
//         revenue: 'Not Sure',
//         submit: true
//       }
//       expect(leadClient.updateLead).toHaveBeenCalledTimes(2)
//       expect(leadClient.updateLead).toHaveBeenCalledWith(updateRequest)
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_THREE_SUCCESS)
//     })
//
//     it('can skip after input of revenue', async () => {
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_THREE_STARTED)
//
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Revenue/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//
//       fireEvent.click(screen.getByRole('button', {name: 'skip this step'}))
//       await waitFor(() => screen.getByText('Got it!'))
//
//       const updateRequest = {
//         email: 'abc@example.com',
//         revenue: 'Not Sure',
//         submit: true
//       }
//       expect(leadClient.updateLead).toHaveBeenCalledTimes(2)
//       expect(leadClient.updateLead).toHaveBeenCalledWith(updateRequest)
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_THREE_SKIPPED)
//     })
//
//     it( 'does not allow double clicking for submit', async () => {
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Revenue/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//       fireEvent.click(screen.getByRole('button', {name: 'submit'}))
//       expect(screen.getByRole('button', {name: 'submit'})).toBeDisabled()
//       await waitFor(() => screen.getByRole('progressbar'))
//     })
//
//     it( 'does not allow double clicking for skipping', async () => {
//       fireEvent.click(screen.getByRole('button', {name: 'skip this step'}))
//       expect(screen.getByRole('button', {name: 'skip this step'})).toBeDisabled()
//       await waitFor(() => screen.getByRole('progressbar'))
//     })
//
//     it('sends GA event if step three fails in some way', async () => {
//       leadClient.updateLead = jest.fn(() => Promise.reject())
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Revenue/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//
//       expect(screen.getByRole('button', {name: 'submit'})).toBeEnabled()
//
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Accounts Receivable/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Inventory/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//
//       fireEvent.click(screen.getByRole('button', {name: 'submit'}))
//       await waitFor(() => screen.queryByText('Extra credit!'))
//
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_STEP_THREE_FAIL)
//     })
//   })
//
//   describe('Next Steps', () => {
//     beforeEach(async () => {
//       createLeadMock = () => Promise.resolve()
//       leadClient.createLead = jest.fn(createLeadMock)
//       updateLeadMock = () => Promise.resolve()
//       leadClient.updateLead = jest.fn(updateLeadMock)
//       analytics.userEvent = jest.fn(() => Promise.resolve())
//       render(<MemoryRouter initialEntries={['/apply/step-1']}><PreSignup/></MemoryRouter>)
//
//       fireEvent.change(screen.getByRole('textbox', {name: 'Your Email'}), {target: {value: 'abc@example.com'}})
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 2'}))
//       await waitFor(() => screen.getByText('Introduce your'))
//
//       fireEvent.change(screen.getByRole('textbox', {name: 'Brand Name'}), {target: {value: 'Assembled Brand'}})
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Desired Loan Amount/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Under $1M'}))
//       fireEvent.click(screen.getByRole('button', {name: 'next to step 3'}))
//       await waitFor(() => screen.getByText('Extra credit!'))
//
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Revenue/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Accounts Receivable/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//       fireEvent.mouseDown(screen.getByRole('button', {name: /Inventory/i}))
//       fireEvent.click(screen.getByRole('option', {name: 'Not Sure'}))
//       fireEvent.click(screen.getByRole('button', {name: 'submit'}))
//       await waitFor(() => screen.getByText('Got it!'))
//     })
//
//     it('allows click of Start Brand Profile button', async () => {
//       expect(analytics.userEvent).toHaveBeenCalledWith(analyticsMessages.LEAD_NEXT_STEPS_STARTED)
//       expect(screen.getByRole('link', {name: 'start brand profile'})).toBeEnabled()
//       expect(screen.getByText('Start Brand Profile').closest('a')).toHaveAttribute('href', config.appUrl + '/createAccount?email=abc@example.com&company_name=Assembled Brand#signup-form')
//     })
//   })
//
//   describe('Edge cases', () => {
//     beforeEach(() => {
//       analytics.userEvent = jest.fn(() => Promise.resolve())
//     })
//
//     it('redirects user back to step 1 from step 2 if email is not captured', () => {
//       render(<MemoryRouter initialEntries={['/apply/step-2']}><PreSignup/></MemoryRouter>)
//       expect(screen.getByText('first step')).toBeInTheDocument()
//     })
//
//     it('redirects user back to step 1 from step 3 if email is not captured', () => {
//       render(<MemoryRouter initialEntries={['/apply/step-3']}><PreSignup/></MemoryRouter>)
//       expect(screen.getByText('first step')).toBeInTheDocument()
//     })
//
//     it('redirects user back to step 1 from unknown routes', () => {
//       render(<MemoryRouter initialEntries={['/apply/unknown-route']}><PreSignup/></MemoryRouter>)
//       expect(screen.getByText('first step')).toBeInTheDocument()
//     })
//   })
// })

export {}