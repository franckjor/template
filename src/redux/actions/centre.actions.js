import axios from "axios";

//definitions des types que nous allons utiliser

export const GET_ALL_CENTER =  "GET_ALL_CENTER ";
export const GET_CENTER_BY_ID  = "GET_CENTER_BY_ID";


// on recupere tous les centres de la db
export const getAllCenter = () => {
    return (dispatch) => {
        return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) =>{
            dispatch({type: GET_ALL_CENTER, payload: res.data })
        })
    }
}


