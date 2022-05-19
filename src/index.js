import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import rootReducer from "./modules";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);
// 이런식으로 devTools 와 middleware 함께 사용가능.

// 프로젝트에 리덕스를 적용 할 때는
// src 디렉터리의 index.js 에서 root reducer 를 불러와서
// 이를 통해 새로운 스토어를 만들고
// provider 를 사용해서 프로젝트에 적용을 합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
