export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: "REMOVE",
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
