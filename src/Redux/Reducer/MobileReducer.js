const GetMobile = (state = {}, { type, payload }) => {
    switch (type) {
      case "mobileProduct":
        return payload;
      default:
        return state;
    }
  };
  
  export default GetMobile;
  