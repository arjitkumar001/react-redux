import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./Reducers/index";

const store = configureStore( {
    // reducer is a keyword
    reducer:rootReducer
});

export default store;