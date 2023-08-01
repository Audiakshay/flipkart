import { combineReducers } from "redux";
import GetProducts from "./ProductsReducer";
import fashion from "./fashionProducts";
import GetMobile from "./MobileReducer";

const rootReducer = combineReducers({
    products: GetProducts,
    fashion,
    mob: GetMobile
});

export default rootReducer;