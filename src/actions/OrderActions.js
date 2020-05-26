import axios from "axios";
import { ORDERS_FETCH } from "./type";
export const orderFetch = () => {
    return dispatch => { //หลีกเลี่ยงการ asyconous
        axios.get("http://localhost:3001/orders/").then(
            res => {
                dispatch({ type: ORDERS_FETCH, payload: res.data });
            }
        )
    }
}
export const orderDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/orders/" + id).then(res => {
            axios.get("http://localhost:3001/orders/").then(
                res => {
                    dispatch({ type: ORDERS_FETCH, payload: res.data });
                });
        }
        )
    }
}