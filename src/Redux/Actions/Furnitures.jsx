import axiosInstance from "../../utils/AxiosInstance";

const FurnitureProductsAction = () => {
  return async (dispatch) => {
    const res = await axiosInstance.get("/furniture");
    const data = await res.data;
    dispatch({ type: "FURNITURE_LIST", payload: data });
  };
};

export default FurnitureProductsAction;