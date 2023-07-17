import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Question } from "./models/question";
import IState from "../../types/state";
import LoadingStatus from "../../types/loading_status";

const initialState: IState<Record<string, Question>> = {
  entities: {},
  loading: LoadingStatus.idle,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    receiveQuestions(state, action: PayloadAction<Record<string, Question>>) {
      state.entities = { ...state.entities, ...action.payload };
      state.loading = LoadingStatus.succeeded;
    },
  },
  extraReducers: (builder) => {},
});

export const { receiveQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
