import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import MainContext from "./contexts/MainContext";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <MainContext>
          <RouterProvider router={router}></RouterProvider>
        </MainContext>
      </Provider>
    </>
  );
}

export default App;
