import {client} from './client'

export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type == "products"]`) //Leter etter all data som matcher typen "products" - og sender deretter tilbake og returnerer disse
    return data 
}