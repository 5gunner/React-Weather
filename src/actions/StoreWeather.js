const StoreWeather = data => {
  return dispatch => {
    dispatch({
      type: "WEATHER_RETRIEVED",
      payload: data
    });
  };
};

export default StoreWeather;
