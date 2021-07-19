export type EnvConfig = {
  apiUrl: string
  appUrl: string
  sanityDataset: string
}

const local: EnvConfig = {
  apiUrl: 'https://publicapi-dev.assembledbrands.io',
  appUrl: 'https://dev.assembledbrands.app',
  sanityDataset: 'dev'
}

const dev: EnvConfig = {
  apiUrl: 'https://publicapi-dev.assembledbrands.io',
  appUrl: 'https://dev.assembledbrands.app',
  sanityDataset: 'dev'
}

const staging: EnvConfig = {
  apiUrl: 'https://publicapi-staging.assembledbrands.io',
  appUrl: 'https://staging.assembledbrands.app',
  sanityDataset: 'staging'
}

const prod: EnvConfig = {
  apiUrl: 'https://publicapi-prod.assembledbrands.io',
  appUrl: 'https://assembledbrands.app',
  sanityDataset: 'production'
}

const config = process.env.REACT_APP_STAGE == 'dev' ? dev
  : process.env.REACT_APP_STAGE == 'staging' ? staging
    : process.env.REACT_APP_STAGE == 'prod' ? prod
      : local

export default config