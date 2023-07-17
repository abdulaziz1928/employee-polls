import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { Question } from "../models/question";
import { RootState } from "../../../store";
import { saveQuestionAnswer } from "../../../apis/api";
import IState from "../../../types/state";
import LoadingStatus from "../../../types/loading_status";
import Answer from "../../../types/answer";

export const handleAnswerQuestion = createAsyncThunk<
  {
    qid: string;
    answer: Answer;
    authedUser: string;
  },
  {
    qid: string;
    answer: Answer;
  },
  { state: RootState }
>(
  "questions/handleAnswerQuestion",
  async (info, { getState, rejectWithValue }) => {
    try {
      const { authedUser } = getState();
      if (!authedUser)
        throw new Error("cannot answer question: user is not authenticated");
      const answer = { ...info, authedUser: authedUser };

      await saveQuestionAnswer(answer);

      return answer;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
