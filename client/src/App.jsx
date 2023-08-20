import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Stock from "./pages/stock/Stock";
import Dashboard from "./pages/dashboard/Dashboard";
import useAuthCheck from "./hooks/useAuthCheck";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import useCheckLogin from "./hooks/useCheckLogin";

function App() {
  const authChecked = useAuthCheck();
  const isLoggedIn = useCheckLogin();
  return !authChecked ? (
    <div>Checking authentication.......</div>
  ) : (
    <div className="min-h-screen">
      {isLoggedIn ? (
        <Layout>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="stock"
              element={
                <PrivateRoute>
                  <Stock />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Auth />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
