export default function(state = "", action) {
  switch (action.type) {
    case "PLACE_UPDATE":
      return action.payload;
    default:
      return state;
  }
}