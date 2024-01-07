import { Outlet, Route, Routes } from "react-router-dom";
import "./app.styles.scss";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";

const Shop = () => {
  <div>Shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
