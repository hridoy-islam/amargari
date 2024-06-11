import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import MainContext from "./contexts/MainContext";
import store from "./store";
import { Provider } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Provider store={store}>
        <MainContext>
          <RouterProvider router={router}>
            <ScrollToTop />
          </RouterProvider>
        </MainContext>
      </Provider>
    </>
  );
}

export default App;
