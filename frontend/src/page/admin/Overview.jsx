import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const Overview = () => {
  const [data, setData] = useState({
    customers: 127,
    orders: 10,
    productsSold: 23,
  });

  const orders = [
    { id: "#1123", item: "Seblak biasa", date: "Jan 16, 2025", price: "5,000", status: "Delivered" },
    { id: "#1124", item: "Seblak Mix", date: "Jan 16, 2025", price: "25,000", status: "Delivered" },
    { id: "#1125", item: "Seblak Bakso", date: "Jan 16, 2025", price: "20,000", status: "Canceled" },
    { id: "#1126", item: "Seblak biasa", date: "Jan 16, 2025", price: "5,000", status: "Delivered" },
    { id: "#1127", item: "Seblak Mix", date: "Jan 16, 2025", price: "25,000", status: "Delivered" },
    { id: "#1128", item: "Seblak Bakso", date: "Jan 16, 2025", price: "20,000", status: "Delivered" },
  ];

  const StatisticCard = ({ title, value, icon }) => (
    <div className="bg-gradient-to-r from-green-900 via-green-700 to-green-900 rounded-lg shadow-md p-2 text-white flex flex-col items-start">
      <div className="flex items-center gap-3 w-full">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="ml-auto text-4xl">{icon}</div>
      </div>
      <span className="text-sm">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl text-green-950 font-bold mb-2">Overview</h1>

      {/* Statistic Cards */}
      <Row
        gutter={[16, 16]}
        className="outline outline-1 outline-gray-300 m-2 px-1 p-4 rounded-md mb-5"
      >
        <Col span={8}>
          <StatisticCard
            title="Customers"
            value={data.customers}
            icon={<UserOutlined />}
          />
        </Col>
        <Col span={8}>
          <StatisticCard
            title="Income"
            value={data.orders}
            icon={<ShoppingCartOutlined />}
          />
        </Col>
        <Col span={8}>
          <StatisticCard
            title="Product Sold"
            value={data.productsSold}
            icon={<ShopOutlined />}
          />
        </Col>
      </Row>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-4">
        <div className="w-2/5 bg-gray-200 rounded-2xl shadow-md p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-6">
                Data Analytic
              </h2>
              <p className="text-sm text-gray-500">See how your account grow</p>
            </div>
            <div className="flex items-center justify-center w-20 h-20 border-4 border-green-600 rounded-full">
              <span className="text-green-600 font-semibold">START</span>
            </div>
          </div>
        </div>

        <div className="w-2/5 bg-gray-200 rounded-2xl shadow-md mx-5 p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-6">
                Finance Flow
              </h2>
              <p className="text-sm font-bold text-gray-800">579,000</p>
              <p className="text-sm text-gray-500">Desember 2024</p>
            </div>
            <div className="h-20 flex items-end gap-1">
              <div className="w-2 bg-green-600 h-1/4 rounded-sm"></div>
              <div className="w-2 bg-green-600 h-1/2 rounded-sm"></div>
              <div className="w-2 bg-green-600 h-2/3 rounded-sm"></div>
              <div className="w-2 bg-green-600 h-3/4 rounded-sm"></div>
              <div className="w-2 bg-green-600 h-full rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Order Section */}
      <div className="p-4 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Recent Order</h2>
          <a href="#" className="text-sm font-medium text-green-600 hover:underline">SEE ALL</a>
        </div>
        <table className="w-full text-left text-gray-600">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2">#</th>
              <th>Item</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-2">{order.id}</td>
                <td>{order.item}</td>
                <td>{order.date}</td>
                <td>{order.price}</td>
                <td>
                  <span
                    className={`font-semibold ${
                      order.status === "Delivered" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
