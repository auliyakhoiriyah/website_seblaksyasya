import React, { useState, useEffect } from "react";
import { Input, Button, Form, Alert } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { URL_SIGNIN } from "../utils/Endpoint";

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Redirect jika sudah login
  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("authToken");

    if (role && token) {
      navigate(role === "admin" ? "/dashboardadmin" : "/dashboarduser");
    }
  }, [navigate]);

  // Cek jika ada pesan sukses dari logout
  useEffect(() => {
    if (location.state?.logoutSuccess) {
      setSuccessMsg("Logout berhasil. Silakan login kembali.");
    }
  }, [location]);

  const handleSubmit = async (values) => {
    setLoading(true);
    setErrMsg("");
    setSuccessMsg("");

    try {
      const res = await axios.post(URL_SIGNIN, values);
      const { role, token } = res.data;

      if (role && token) {
        localStorage.setItem("role", role);
        localStorage.setItem("authToken", token);
        navigate(role === "admin" ? "/dashboardadmin" : "/dashboarduser");
      } else {
        setErrMsg("Akun anda belum terdaftar.");
      }
    } catch (error) {
      setErrMsg(error.response?.data?.message || "Login gagal. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-green-950 mb-8">Login</h2>

        {/* Alert jika logout berhasil */}
        {successMsg && <Alert message={successMsg} type="success" className="mb-4" showIcon closable onClose={() => setSuccessMsg("")} />}

        {/* Alert jika login gagal */}
        {errMsg && <Alert message={errMsg} type="error" className="mb-4" showIcon closable onClose={() => setErrMsg("")} />}

        <Form form={form} onFinish={handleSubmit} autoComplete="off" layout="vertical">
          <Form.Item
            label={<span className="flex items-center gap-2"><UserOutlined /> Email</span>}
            name="email"
            rules={[{ required: true, message: "Masukkan email Anda!" }, { type: "email", message: "Masukkan email yang valid!" }]}
          >
            <Input placeholder="Email" size="large" autoComplete="email" />
          </Form.Item>

          <Form.Item
            label={<span className="flex items-center text-green-950 gap-2"><UnlockOutlined /> Password</span>}
            name="password"
            rules={[{ required: true, message: "Masukkan password Anda!" }]}
          >
            <Input.Password placeholder="Password" size="large" autoComplete="current-password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-green-950" size="large" loading={loading}>Login</Button>
          </Form.Item>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Belum punya akun? <Link to="/signup" className="text-blue-600">Daftar</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
