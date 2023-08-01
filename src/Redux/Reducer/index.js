import { combineReducers } from "redux";
import GetProducts from "./ProductsReducer";
import fashion from "./fashionProducts";

const rootReducer = combineReducers({
    products: GetProducts,
    fashion,
});

export default rootReducer;