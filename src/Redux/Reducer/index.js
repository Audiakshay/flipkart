import { combineReducers } from "redux";
import GetProducts from "./ProductsReducer";
import fashion from "./fashionProducts";
import GetMobile from "./MobileReducer";
import filterFashion from "./filterFashion";
import furniture from "./furniturelist"
import furnitureProducts from "./furniturelist";
const rootReducer = combineReducers({
    products: GetProducts,
    furniture:furnitureProducts,
    fashion,
    mob: GetMobile,
    filterFashion,
});

export default rootReducer;