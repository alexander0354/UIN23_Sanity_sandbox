import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'zmlxg24c',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})