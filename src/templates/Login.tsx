import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { signIn } from "../reducks/users/operations";
import { useNavigate } from "react-router-dom";
import { getUserId, getUserName } from "../reducks/users/selectors";
import { useEffect } from "react";

const Login = () => {
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const navigate = useNavigate();
  const uid = useSelector(getUserId);
  const username = useSelector(getUserName);

  useEffect(() => {
    console.log("現在のユーザーID:", uid);
    console.log("現在のユーザー名:", username);
  }, [uid, username]);

  const handleLogin = async () => {
    await dispatch(signIn());
  };

  useEffect(() => {
    if (uid && username) {
      console.log("Navigating to home");
      navigate("/");
    }
  }, [uid, username, navigate]);

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
};

export default Login;
