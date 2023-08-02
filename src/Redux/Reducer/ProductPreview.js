const ProductPreview = (state = null, {type, payload}) =>{
    switch(type){
        case 'prevProduct':
            return payload;
    default: 
            return state;
    }
}

export default ProductPreview;