import { loginStart, loginSuccess, loginFailure, logout } from "./authSlice";

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());

  try {
    // Simulate API call
    const user = await fakeLoginApi(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const fakeLoginApi = async (credentials) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === "admin" &&
        credentials.password === "admin"
      ) {
        resolve({ username: "admin" }); // Simulating successful login
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};
