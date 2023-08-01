const GetProducts = (state = {}, { type, payload }) => {
  switch (type) {
    case "actionProduct":
      return payload;
    default:
      return state;
  }
};

export default GetProducts;
