export default class ApiService {
    __basURL = 'https://pokeapi.co/api/v2/'

    getData = async(url) => {
        const data = await fetch(`${this.__basURL}${url}`)
        if(!data.ok) {
            throw new Error(`Error ${data.status}`)
        } else {
            return await data.json()
        }
    }

    getCurrentPoke = async(id) => {
        const res = await this.getData(`pokemon/${id}`)
        return await res
    }
    
}