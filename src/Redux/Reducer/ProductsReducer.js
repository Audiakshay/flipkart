const initState = [];

const GetProducts = (state = initState, { type, payload }) => {
  switch (type) {
    case "productAction":
      return payload;
    default:
      return state;
  }
};

export default GetProducts;
