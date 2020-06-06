import axios from 'react-native-axios'

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/'
const FILTER_PHP = 'filter.php?'
const INDEX_C = 'c='
const FILTER = 'list.php?c=list'

const coctails = {
    list:(params=null)=>axios(`${BASE_URL}${FILTER_PHP}${INDEX_C}${params}`),
    filters:()=>axios(`${BASE_URL}${FILTER}`)
}

export default coctails