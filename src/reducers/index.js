import { combineReducers } from "redux";
import { WeatherReducer } from "./WeatherReducer";

export const AllReducers = combineReducers({ WeatherData: WeatherReducer });

export default AllReducers;
