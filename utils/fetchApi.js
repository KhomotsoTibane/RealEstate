import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c72b2b8cddmsh9b7395a7caf2fcdp18abacjsnd8e6ea3cfea5',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}
