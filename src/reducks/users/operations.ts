import { signInAction } from "./actions";

export const signIn = () => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/deatiger";

      const response = await fetch(url)
        .then((res) => res.json())
        .catch((error) => {
          console.error("APIリクエストエラー:", error);
          return null;
        });

      if (response) {
        const username = response.login;
        console.log("APIレスポンス:", response);

        await dispatch(
          signInAction({ isSignedIn: true, uid: "00001", username: username })
        );

        // 状態が更新されたことを確認するためのログ
        const updatedState = getState();
        console.log("更新後の状態:", updatedState.users);
      }
    }
  };
};
