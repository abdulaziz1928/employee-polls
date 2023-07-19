import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../..";
import { handleInitialData } from "../../state/modules/shared/actions";
import { shallowEqual } from "react-redux";
import Header from "../layout/header";
import { CssBaseline } from "@mui/material";

export default function App() {
  /// TODO: handleinitialdata is runned twice
  const dispatch = useAppDispatch();
  const [authedUser] = useAppSelector(
    (state) => [state.authedUser],
    shallowEqual
  );
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      {!authedUser ? <div>loading</div> : <Header />}
    </>
  );
}

