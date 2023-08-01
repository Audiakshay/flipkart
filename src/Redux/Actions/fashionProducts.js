import axiosInstance from "../../utils/AxiosInstance";

const fashionProductsAction = () => {
  return async (dispatch) => {
    const res = await axiosInstance.get("/fashionProducts");
    const data = await res.data;
    dispatch({ type: "FASHION_PRODUCTS", payload: data });
  };
};

export default fashionProductsAction;
