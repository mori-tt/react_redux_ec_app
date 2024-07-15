import { useSelector } from "react-redux";
import { getUserId, getUserName } from "../reducks/users/selectors";

const Home = () => {
  const uid = useSelector(getUserId);
  const username = useSelector(getUserName);

  return (
    <>
      <h2>Home</h2>
      <p>ユーザーID: {uid}</p>
      <p>ユーザー名: {username}</p>
    </>
  );
};

export default Home;
