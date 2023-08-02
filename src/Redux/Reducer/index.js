import { combineReducers } from "redux";
import GetProducts from "./ProductsReducer";
import fashion from "./fashionProducts";
import GetMobile from "./MobileReducer";
import filterFashion from "./filterFashion";

const rootReducer = combineReducers({
    products: GetProducts,
    fashion,
    mob: GetMobile,
    filterFashion,
});

export default rootReducer;
