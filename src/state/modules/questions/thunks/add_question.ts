import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { Question } from "../models/question";
import { RootState } from "../../../store";
import { saveQuestion } from "../../../apis/api";
import IState from "../../../types/state";
import LoadingStatus from "../../../types/loading_status";

export const handleAddQuestion = createAsyncThunk<
  Question,
  { optionOneText: string; optionTwoText: string },
  { state: RootState }
>(
  "questions/handleAddQuestion",
  async (question, { getState, rejectWithValue }) => {
    try {
      const { authedUser } = getState();

      if (!authedUser)
        throw new Error("cannot add question: user is not authenticated");

      return await saveQuestion({ ...question, author: authedUser });
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const handleAddQuestionReducer = (
  builder: ActionReducerMapBuilder<IState<Record<string, Question>>>
) => {
  builder.addCase(handleAddQuestion.fulfilled, (state, { payload }) => {
    state.entities = {
      ...state.entities,
      [payload.id]: payload,
    };
    state.loading = LoadingStatus.succeeded;
  });
  builder.addCase(handleAddQuestion.rejected, (state, { error }) => {
    state.loading = LoadingStatus.failed;
    state.error = error.message;
  });
  builder.addCase(handleAddQuestion.pending, (state) => {
    state.loading = LoadingStatus.pending;
  });
};
