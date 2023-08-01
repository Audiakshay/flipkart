import { combineReducers } from "redux";
import GetProducts from "./ProductsReducer";
import GetMobile from "./MobileReducer";

const rootReducer = combineReducers({
    products: GetProducts,
    mob: GetMobile,
});

export default rootReducer;