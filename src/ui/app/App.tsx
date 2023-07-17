import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../..";
import { handleInitialData } from "../../state/modules/shared/actions";
import { shallowEqual } from "react-redux";

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
  return <>{!authedUser ? <div>loading</div> : <div>my app</div>}</>;
}

