import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId:'qqd5dkbq',
    dataset:'production',
    apiVersion:'2022-10-19',
    useCdn: true,
    token:'skJxbPZpAiyk7RXFtRUDIe4zq3qhoP5N3zCOXjMrEfjDsT2x9J1CwxDtbgGSEBweBH02p1wXLn1HLnGFgY7kNLnkP803GjmuxqdXvQipm0ImoIpfpEszSgrDpmI8PQUdN8mZMRN53XbjlGPl3IRsnBn7aIIGC72hvIFLjyuNpH7gLsC4tnmg',
    ignoreBrowserTokenWarning: true
})

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);