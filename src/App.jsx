import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import SpinLoader from "./components/UI/SpinLoader";

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
          <Route path="/dashboard" element={Component(DashboardPage)} />
          <Route path="/login" element={Component(LoginPage)} />
          <Route path="/manage-admins" element={Component(AdminPage)} />
          <Route path="/manage-products" element={Component(ProductPage)} />
          <Route path="/manage-orders" element={Component(OrderPage)} />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen">
                This is Home page Back to{" "}
                <Link to="/login" className="underline mx-2">
                  login
                </Link>
              </div>
            }
          />
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
