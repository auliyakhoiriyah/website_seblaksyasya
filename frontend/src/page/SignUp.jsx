import { useState } from "react";
import { Input, Button, Form, Alert } from "antd";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  MailOutlined,
  LockOutlined,
  UserOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { URL_SIGNUP } from "../utils/Endpoint";
import { Link } from "react-router-dom";

function SignUp() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State untuk toggle password visibility
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false); // State untuk toggle repeat password visibility

  const handleSubmit = (values) => {
    setLoading(true);
    const data = {
      name: values.name,
      password: values.password,
      repeatPassword: values.password,
      email: values.email,
      nomor_telepon: values.nomor_telepon,
      alamat: values.alamat,
      akses: values.akses,
    };
    axios
      .post(URL_SIGNUP, data)
      .then((res) => {
        console.log("res", res);
        if (res.data.role !== "Admin") {
          setSuccessMsg(
            "Anda Berhasil SignUp, Silahkan Menuju Halaman Login ^^"
          );
        } else {
          setErrMsg("Anda Gagal SignUp");
        }
        setLoading(false);
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-5 mb-10">
        <h2 className="text-4xl font-bold text-center text-green-950 mb-8">
          Sign Up
        </h2>
  
        {/* Alert jika Sign Up berhasil */}
        {successMsg && (
          <Alert
            message={successMsg}
            type="success"
            className="mb-4"
            showIcon
            closable
            onClose={() => setSuccessMsg("")}
          />
        )}
  
        <Form form={form} onFinish={handleSubmit} autoComplete="off" layout="vertical">
          <Form.Item
            label={
              <span className="flex items-center gap-2 text-green-950">
                <UserOutlined />
                Name
              </span>
            }
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Enter Your Name" size="large" autoComplete="name" />
          </Form.Item>
  
          <Form.Item
            label={
              <span className="flex items-center gap-2 text-green-950">
                <MailOutlined />
                Email
              </span>
            }
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter Your Email" size="large" autoComplete="email" />
          </Form.Item>
  
          <Form.Item
            label={
              <span className="flex items-center gap-2 text-green-950">
                <LockOutlined />
                Password
              </span>
            }
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter Your Password" size="large" autoComplete="new-password" />
          </Form.Item>
  
          <Form.Item
            label={
              <span className="flex items-center gap-2 text-green-950">
                <LockOutlined />
                Confirm Password
              </span>
            }
            name="repeatPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Repeat Your Password" size="large" autoComplete="new-password" />
          </Form.Item>
  
          <Form.Item
            label={
              <span className="flex items-center gap-2 text-green-950">
                <PhoneOutlined />
                Phone Number
              </span>
            }
            name="nomor_telepon"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input placeholder="Enter Your Phone Number" size="large" autoComplete="tel" />
          </Form.Item>
  
          <Form.Item
            label={
              <span className="flex items-center gap-2 text-green-950">
                <EnvironmentOutlined />
                Address
              </span>
            }
            name="alamat"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input placeholder="Enter Your Address" size="large" autoComplete="street-address" />
          </Form.Item>
  
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-green-950"
              size="large"
              loading={loading}
            >
              Sign Up
            </Button>
          </Form.Item>
  
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600">
                Sign In
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
  
  
}

export default SignUp;
