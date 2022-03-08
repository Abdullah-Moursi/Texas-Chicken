export const addCart = (product) => {
  return {
    type: "ADD_ITEM",
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
    type: "DEL_ITEM",
    payload: product,
  };
};
