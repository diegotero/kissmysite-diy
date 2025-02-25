import { gql } from 'graphql-request'
    import { hygraphClient } from './hygraph'
    
    const GET_SERVICES = gql`
      {
        services {
          id
          title
          description
          longDescription
          link
          image {
            url
          }
          buttonText
        }
      }
    `
    
    export async function getServices() {
      const { services } = await hygraphClient.request(GET_SERVICES)
      return services
    }
