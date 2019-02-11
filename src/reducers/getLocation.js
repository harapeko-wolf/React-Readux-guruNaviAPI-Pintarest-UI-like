const initialState = {
  coords: {}
};
const getLocation = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOCATION":
      return action.payload;
    default:
      return state;
  }
};

export default getLocation;
