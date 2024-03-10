import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import MainContext from "./contexts/MainContext";
function App() {
  return (
    <>
      <MainContext>
        <RouterProvider router={router}></RouterProvider>
      </MainContext>
    </>
  );
}

export default App;
