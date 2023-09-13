import { GET_ALL_CENTER} from "../actions/centre.actions";


const initialState ={
    List_Centers:[],
};

export default function CenterReducer(state=initialState, action )
{
    switch (action.type) {
        case GET_ALL_CENTER:
            return {...state, List_Centers: action.payload};     
        default:
            return state;
    }
}


