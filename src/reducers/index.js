import { combineReducers } from "redux";
import {reducer as reduxForm } from "redux-form"
import ProductReducer from "./ProductRuducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
    orders: OrderReducer,
    products: ProductReducer,
    from : reduxForm
})

export default rootReducer;