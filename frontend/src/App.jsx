import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Footer from "./components/Footer";
import WelcomePage from "./welcome/welcomepage";
import Sidebar from "./components/sidebar";
import ProtectedRoute from "./components/ProtectedRoute "; // Protected Route untuk dashboard
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./page/admin/Home";
import Overview from "./page/admin/Overview";
import Products from "./page/admin/Products";
import ProductsCreate from "./page/admin/ProductsCreate";

const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Dashboard User */}
        <Route
          path="/dashboarduser/*"
          element={
            <ProtectedRoute>
              <Layout style={{ minHeight: "100vh" }}>
                {/* Navbar di atas */}
                <Navbar />
                {/* Content Dashboard User */}
                <Content
                  style={{ margin: "4px", padding: "16px", background: "#fff" }}
                >
                  <h2>Dashboard User</h2>
                </Content>
              </Layout>
            </ProtectedRoute>
          }
        />
        {/* Protected Dashboard Admin */}
        <Route
          path="/dashboardadmin/*"
          element={
            <ProtectedRoute>
              <Layout style={{ minHeight: "100vh" }}>
                {/* Navbar di atas (tetap terlihat) */}
                <Navbar2
                  style={{ position: "fixed", width: "100%", zIndex: 1000 }}
                />

                <Layout style={{ display: "flex" }}>
                  {/* Sidebar tetap di samping */}
                  <Sidebar />

                  {/* Content tidak ketutup Navbar */}
                  <Content
                    style={{
                      background: "#fff",
                      flex: 1, // Agar content bisa melebar otomatis
                    }}
                  >
                    <div className="p-4 m-2 rounded-sm min-h-screen outline outline-1 outline-gray-300">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/overview" element={<Overview />} />
                        <Route path="/products" element={<Products />} />
                        <Route
                          path="/products/create"
                          element={<ProductsCreate />}
                        />
                      </Routes>
                    </div>
                  </Content>
                </Layout>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
