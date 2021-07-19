import {AxiosResponse} from 'axios'
import leadClient from './leadClient'
import EnvConfig from '../abReplica/abConfig'
import http from '../abReplica/http'

jest.mock('../abReplica/http')

describe('leadClient', () => {
  it('creates new lead', async () => {
    const createLeadResponse: AxiosResponse = {
      status: 200,
      statusText: '',
      headers: [],
      config: {},
      data: {}
    }
    http.post = jest.fn(() => Promise.resolve(createLeadResponse))

    await leadClient.createLead('email@example.com')

    expect(http.post).toHaveBeenCalledWith(`${EnvConfig.apiUrl}/lead/create-lead`,
      {
        email: 'email@example.com',
        utmSource: 'source',
        utmMedium: 'medium',
        utmCampaign: 'campaign'
      })
  })


  it('updates lead information for step 2', async () => {
    const createLeadResponse: AxiosResponse = {
      status: 200,
      statusText: '',
      headers: [],
      config: {},
      data: {}
    }
    http.post = jest.fn(() => Promise.resolve(createLeadResponse))

    const updateRequest = {email: 'email@example.com', brandName: 'brand', desiredLoanAmount: 'Above $1M'}
    await leadClient.updateLead(updateRequest)

    expect(http.post).toHaveBeenCalledWith(`${EnvConfig.apiUrl}/lead/update-lead`, updateRequest)
  })

  it('updates lead information for step 3', async () => {
    const createLeadResponse: AxiosResponse = {
      status: 200,
      statusText: '',
      headers: [],
      config: {},
      data: {}
    }
    http.post = jest.fn(() => Promise.resolve(createLeadResponse))

    const updateRequest = {
      email: 'email@example.com',
      revenue: 'Not Sure',
      inventory: 'Not Sure',
      accountsReceivable: 'Not Sure'
    }
    await leadClient.updateLead(updateRequest)

    expect(http.post).toHaveBeenCalledWith(`${EnvConfig.apiUrl}/lead/update-lead`, updateRequest)
  })
})