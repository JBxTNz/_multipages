import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Animation from "./pages/Animation/Animation";
import Todo from "./pages/Todo/Todo";
import Calculator from "./pages/Calculator/Calculator";
import Components from "./pages/Components/Components";
import Product from "./pages/Products/Product";
import Cart from "./pages/Carts/Cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import { fetchProducts } from "./data/products";

import "./App.css";

// HashRouter, BrowserRouter, MemoryRouter
// localhost:5173/#/<path>    // HashRouter *compatable old
// localhost:5173/<path>      // BrowserRouter *production
// localhost:5173             // MemoryRouter

// App -> Layout -> Navbar(buttons)
// tab -> (props)

const intTab = "home";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(intTab);
  }, []); //1st load

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => setProducts(fetchProducts()), []);
  useEffect(() => console.log(products), [products]);

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  products={products}
                  carts={carts}
                  setToken={setToken}
                  // role={role}
                  tab={tab}
                  setTab={setTab}
                />
              }
            >
              <Route path={"/"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/animation"} element={<Animation />} />
              <Route path={"/todo"} element={<Todo />} />
              <Route path={"/calculator"} element={<Calculator />} />
              <Route path={"/components"} element={<Components />} />
              <Route
                path={"/product"}
                element={
                  <Product
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path={"/cart"}
                element={<Cart carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
