import { executeQuery } from '@datocms/cda-client';
const token= process.env.NEXT_DATOCMS_API_TOKEN
console.log ("token is", token)
export const performRequest = (query, options) => {
  return executeQuery(query, {
    ...options,
    token
    /*token: "f9dd342fae8ee690defb35f813580e", */ 
    // environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
  });
}


