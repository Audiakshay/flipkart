import axiosInstance from "../../utils/AxiosInstance";

const mobileAction = () => {
  return async (dispatch) => {
    const res = await axiosInstance.get("/mobile");
    const data = await res.data;
    dispatch({ type: "mobileProduct", payload: data });
  };
};

export default mobileAction;
