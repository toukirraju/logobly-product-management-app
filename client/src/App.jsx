import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Stock from "./pages/stock/Stock";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="min-h-screen">
      <Layout>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="stock" element={<Stock />} />
          <Route path="/" element={<Auth />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
