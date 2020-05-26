import { combineReducers } from "redux";
import ProductReducer from "./ProductRuducer";
import OrderReducer from "./OrderReducer";


const rootReducer = combineReducers({
    orders: OrderReducer,
    products: ProductReducer
})

export default rootReducer;