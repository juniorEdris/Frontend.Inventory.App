import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import SpinLoader from "./components/UI/SpinLoader";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const LoginPage = lazy(() => import("./views/Login"));
  const DashboardPage = lazy(() => import("./views/Dashboard"));
  const AdminPage = lazy(() => import("./views/Admins"));
  const ProductPage = lazy(() => import("./views/Products"));
  const OrderPage = lazy(() => import("./views/Orders"));

  const Component = (Page) => (
    <Suspense fallback={<SpinLoader />}>
      <Page />
    </Suspense>
  );

  return (
    <div className="App">
      {/* Routes starts here */}
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={Component(DashboardPage)} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/manage-admins" element={Component(AdminPage)} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/manage-products" element={Component(ProductPage)} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/manage-orders" element={Component(OrderPage)} />
          </Route>
          <Route path="*" element={Component(LoginPage)} />
        </Routes>
      </BrowserRouter>

      {/* Toast message primary parent component */}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
