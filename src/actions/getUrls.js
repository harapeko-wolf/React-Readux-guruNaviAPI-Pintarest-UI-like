import gurunaviAPI from "../APIs/gurunaviAPI";

const startRequest = data => {
  return {
    type: "START_REQUEST"
  };
};

const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const getUrls = (word, lat, lon) => {
  return dispatch => {
    dispatch(startRequest());
    gurunaviAPI(word, lat, lon).then(res => {
      const data = res.data.rest;
      // const imageUrlList = data.map(item => item.image_url.shop_image1);
      const imageUrlList = data;
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
