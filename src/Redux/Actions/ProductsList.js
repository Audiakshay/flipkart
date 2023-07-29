import axiosInstance from "../../utils/AxiosInstance"

const products = (actionType) => {
    return async (dispatch) => {
        const res = await axiosInstance.get('/products');
        const data = await res.data;
        dispatch({type: actionType, payload: data});
    }
};

export default products;