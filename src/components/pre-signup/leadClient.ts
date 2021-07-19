

const createLead = (email: string): Promise<void> => {
  return Promise.resolve()
}

export type UpdateLeadRequest = {
  email: string
  brandName?: string
  website?: string
  desiredLoanAmount?: string
  revenue?: string
  accountsReceivable?: string
  inventory?: string
  submit?: boolean
}

const updateLead = (request: UpdateLeadRequest): Promise<void> => {
  return Promise.resolve()
}

export default {createLead, updateLead}