import { combineReducers } from "redux";
import GetProducts from "./ProductsReducer";
import GetMobile from "./MobileReducer";

const rootReducer = combineReducers({
    products: GetProducts,
    mobi: GetMobile,
});

export default rootReducer;