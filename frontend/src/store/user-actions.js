import { authActions } from "./auth-slice";

export const sendUserSignupData = async (userData) => {
  const sendUserData = async () => {
    const response = await fetch(
      "http://localhost:8000/api/v1/dj-rest-auth/registration/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      throw new Error("Sending user data failed");
    }
  };

  try {
    await sendUserData();
  } catch (error) {
    console.error(error);
  }
};

export const sendUserLoginData = (userData) => {
  return async (dispatch) => {
    const sendUserData = async () => {
      const response = await fetch(
        "http://localhost:8000/api/v1/dj-rest-auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const token = await response.json();

      if (!response.ok) {
        throw new Error("login failed");
      }

      if (response.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: userData.username, key: token.key })
        );
      }
      return token;
    };
    try {
      await sendUserData();
      dispatch(authActions.login({ username: userData.username }));
    } catch (error) {
      console.error(error);
    }
  };
};
