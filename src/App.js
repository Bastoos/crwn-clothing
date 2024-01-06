import { Outlet, Route, Routes } from "react-router-dom";
import "./app.styles.scss";
import Home from "./routes/home/Home";

const Navigation = () => {
  return (
    <div>
      <div>Navigation</div>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
