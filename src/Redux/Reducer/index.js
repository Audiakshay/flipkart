import { combineReducers } from "redux";
import GetProducts from "./ProductsReducer";

const rootReducer = combineReducers({
    products: GetProducts,
});

export default rootReducer;