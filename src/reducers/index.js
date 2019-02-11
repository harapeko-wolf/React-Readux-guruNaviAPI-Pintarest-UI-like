import { combineReducers } from "redux";

import imageUrls from "./imageUrls";
import buttonText from "./buttonText";
import getLocation from "./getLocation";

export default combineReducers({ imageUrls, buttonText, getLocation });
