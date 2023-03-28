import { ToastContainer } from "react-toastify";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const App = () => {
  const LoginPage = lazy(() => import("./views/Login"));
  const DashboardPage = lazy(() => import("./views/Dashboard"));

  const Component = (Page) => (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">Loading...</div>
      }
    >
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
          <Route path="*" element={<div className="flex items-center justify-center min-h-screen">This is Home page Back to <Link to='/login' className="underline mx-2">login</Link></div>} />
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
