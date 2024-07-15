import { Route, Routes } from "react-router-dom";
import { Login, Home } from "./templates";
import { LoginContainer } from "./containers";

const Router = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Router;
