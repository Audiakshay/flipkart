import { combineReducers } from "redux";
import GetProducts from "./ProductsReducer";
import fashion from "./fashionProducts";
import GetMobile from "./MobileReducer";
import filterFashion from "./filterFashion";
import  ProductPreview from './ProductPreview'

const rootReducer = combineReducers({
    products: GetProducts,
    fashion,
    mob: GetMobile,
    filterFashion,
    ProductPreview

});

export default rootReducer;
