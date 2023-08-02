const initState = [];

const furnitureProducts = (state = initState, { type, payload }) => {
    switch (type) {
        case 'FURNITURE_LIST':
            return payload;
           
    
        default:
            return state;
    }
};

export default furnitureProducts;