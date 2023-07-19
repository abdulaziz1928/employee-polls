import authedUser from "./modules/authedUser";
import questions from "./modules/questions";
import users from "./modules/users";
import logger from "./middlewares/logger";
import prefrences from "./modules/prefrences/prefrencesSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = { authedUser, users, questions, prefrences };

const rootReducer = combineReducers(reducers);

const middleWares = [logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(...middleWares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
