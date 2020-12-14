import { JSONData } from '../../../assets'
import { CLEAR_HOME_LIST, SET_HOME_LIST } from '../../../constants/initialType'


const initialState = {
    home: JSONData
}

const Home = (state = initialState, action) => {
    switch (action.type){
        case CLEAR_HOME_LIST:
            return {
                ...state,
                home: false
            }    
        case SET_HOME_LIST:
            return {
                ...state,
                home: action.value
            }                                               
        default:   
             return state
    }
}

export default Home