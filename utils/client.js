import sanityClient from '@sanity/client';
import config from './config';
const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2021-08-31', // use a UTC date string
  token: process.env.SANITY_AUTH_TOKEN, // or leave blank to be anonymous user
  useCdn: true,
});

export default client;
