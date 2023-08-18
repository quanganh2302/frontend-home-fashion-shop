import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
// import { routes } from "./routes/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchProfile } from "./features/Auth/thunk";
import RouteComponent from "./hoc/RouteComponent";
import HomeWomen from "./pages/Home-women/HomeWomen.jsx";
import HomeMan from "./pages/Home-men/HomeMen.jsx";
import HomeLayout from "./hoc/HomeLayout";

// import SignIn from "./features/Auth/SignIn";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch();
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/"
            element={<RouteComponent Component={HomeWomen}></RouteComponent>}
          ></Route>
        </Route>
        <Route
          path="/men"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/men"
            element={<RouteComponent Component={HomeMan}></RouteComponent>}
          ></Route>
        </Route>
        {/* <Route
          path="/signin"
          element={
            <RouteComponent
              isAuth={true}
              Component={SignIn}
              redirectPath={"/"}
            ></RouteComponent>
          }
        ></Route>
        <Route
          path="/seats/:id"
          element={<RouteComponent Component={SignIn}></RouteComponent>}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
