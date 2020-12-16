import { JSONData } from '../../../assets'
import { CLEAR_HOME_LIST, SET_HOME_LIST, SET_MODULE_LIST } from '../../actions'


const initialState = {
    home: JSONData
}

const Home = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_HOME_LIST:



            return {
                ...state,
                home: false
            }
        case SET_HOME_LIST:
            return {
                ...state,
                home: action.payload
            }
        case SET_MODULE_LIST:
            const home = state.home
            const childs = state.home[7].childs
            const index = childs.findIndex((module) => module.id === action.payload.id);
            childs[index] = action.payload;
            home[7].childs = childs
            return {
                ...state,
                home: home
            }
        default:
            return state
    }
}

export default Home

// const payload = {
//     "id": "google-shopping",
//     "isShowed": true,
//     "isAllowed": true
// }