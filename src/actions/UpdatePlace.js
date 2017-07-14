export default function (place) {
  console.log(place);
  return dispatch => {
    dispatch({
      type: "PLACE_UPDATE",
      payload: place
    });
  };
}
