import axiosInstance from "../../utils/AxiosInstance";

const productsAction = () => {
  return async (dispatch) => {
    const res = await axiosInstance.get("/products");
    const data = await res.data;
    dispatch({ type: "actionProduct", payload: data });
  };
};

export default productsAction;
