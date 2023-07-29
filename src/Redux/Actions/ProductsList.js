import axiosInstance from "../../utils/AxiosInstance";

const productsAction = () => {
  return async (dispatch) => {
    const res = await axiosInstance.get("/electronics");
    const data = await res.data;
    dispatch({ type: "productAction", payload: data });
  };
};

export default productsAction;
