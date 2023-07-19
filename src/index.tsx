import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ui/app/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store, RootState, AppDispatch } from "./state/store";
import { BrowserRouter } from "react-router-dom";
import { theme, darkTheme } from "./ui/styles/theme/theme";
import { ThemeProvider } from "@mui/material";
import DarkThemeProvider from "./ui/components/theme_provider";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
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
