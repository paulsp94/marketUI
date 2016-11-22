import {applyMiddleware , createStore} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"

//link reducer here
import reducer from "../Reducer/Index.jsx";

const middleware = applyMiddleware(thunk, logger({collapsed: true}));
export default createStore(reducer, {}, middleware);

