const cart = [];

const handleCart = (state = cart,  action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.ID === product.ID);
      if (exist) {
        return state.map((x) =>
          x.ID === product.ID 
            ? {
                ...x,
                qty: x.qty + 1,
              }
            : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "REMOVE":
      const exist2 = state.find((x) => x.ID === product.ID);
      if (exist2.qty >= 1) {
        return state.filter((x) => x.ID !== exist2.ID);
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.ID === product.ID);
      if (exist1.qty === 1) {
        return state.filter((x) => x.ID !== exist1.ID);
      } else {
        return state.map((x) =>
          x.ID === product.ID
            ? {
                ...x,
                qty: x.qty - 1,
              }
            : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
