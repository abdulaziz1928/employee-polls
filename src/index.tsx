import ReactDOM from "react-dom/client";
import App from "./ui/app/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { setupStore } from "./state/store";
import { BrowserRouter } from "react-router-dom";
import DarkThemeProvider from "./ui/theme/theme_provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={setupStore()}>
    <BrowserRouter>
      <DarkThemeProvider>
        <App />
      </DarkThemeProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
