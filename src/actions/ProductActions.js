import axios from "axios";
import { PRODUCTS_FETCH } from "./type";
export const productFetch = () => {
    return dispatch => { //หลีกเลี่ยงการ asyconous
        axios.get("http://localhost:3001/products").then(
            res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data });
            }
        )
    }
}
export const productDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/products" + id).then(res => {
            axios.get("http://localhost:3001/products").then(
                res => {
                    dispatch({ type: PRODUCTS_FETCH, payload: res.data });
                });
        }
        )
    }
}