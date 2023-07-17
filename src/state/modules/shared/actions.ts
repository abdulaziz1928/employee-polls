import { Dispatch } from "@reduxjs/toolkit";
import { setAuthedUser } from "../authedUser";
import { getInitialData } from "../../apis/api";
import { receiveQuestions } from "../questions";
import { receiveUsers } from "../users";

const AUTHED_USER_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch: Dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_USER_ID));
    });
  };
}
