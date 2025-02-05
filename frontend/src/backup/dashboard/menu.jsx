import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import profile from "../../assets/sicantik.jpg";
import smix from "../../assets/seblak mix.jpg";
import ssosis from "../../assets/seblak sosis.jpg";
import sbiasa from "../../assets/seblak biasa.jpg";
import sceker from "../../assets/sebalk ceker.jpg";
import sseafood from "../../assets/seblak seafood.jpg";
import sbakso from "../../assets/seblak bakso.jpg";
import smie from "../../assets/seblak mie.jpg";
import sjamur from "../../assets/seblak jamur.jpg";

const Menu = () => {
  const handleSearch = (value) => {
    console.log("Search query:", value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen top-20 ">
      <div className="flex items-center justify-between w-full p-3">
        <h1 className="text-2xl font-bold text-gray-500 ml-8">Menu</h1>
        <div className="flex-grow flex justify-center">
          <div style={{ width: "400px" }}>
            <Input
              className="bg-gray-200 top-1"
              placeholder="Telusuri"
              prefix={<SearchOutlined style={{ color: "rgba(0,0,0,0.95)" }} />}
              allowClear
              onPressEnter={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex-grow w-full px-14 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Baris pertama */}
          <div className=" p-5 m-5">
            <img
              src={smix}
              alt="Seblak mix"
              className="w-56 rounded-md h-56 object-cover mb-2"
            />
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Seblak</h3>
              <h3 className="text-lg font-bold text-gray-800">Harga</h3>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm">Jenis</p>
              <p className="text-gray-600 text-sm">Level</p>
            </div>
          </div>

          <div className="p-5 m-5">
            <img
              src={ssosis}
              alt="seblak sosis"
              className="w-56 h-56 rounded-md object-cover mb-2"
            />
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Seblak</h3>
              <h3 className="text-lg font-bold text-gray-800">Harga</h3>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm">Jenis</p>
              <p className="text-gray-600 text-sm">Level</p>
            </div>
          </div>

          <div className="p-5 m-5">
            <img
              src={sbiasa}
              alt="seblak biasa"
              className="w-56 h-56 rounded-md object-cover mb-2"
            />
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Seblak</h3>
              <h3 className="text-lg font-bold text-gray-800">Harga</h3>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm">Jenis</p>
              <p className="text-gray-600 text-sm">Level</p>
            </div>
          </div>

          <div className="p-5 m-5">
            <img
              src={sceker}
              alt="seblak ceker"
              className="w-56 h-56 rounded-md object-cover mb-2"
            />
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Seblak</h3>
              <h3 className="text-lg font-bold text-gray-800">Harga</h3>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm">Jenis</p>
              <p className="text-gray-600 text-sm">Level</p>
            </div>
          </div>

          {/* Baris kedua */}
          <div className="p-5 m-5">
            <img
              src={sseafood}
              alt="Seblak seafood"
              className="w-56 rounded-md h-56 object-cover mb-2"
            />
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Seblak</h3>
              <h3 className="text-lg font-bold text-gray-800">Harga</h3>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm">Jenis</p>
              <p className="text-gray-600 text-sm">Level</p>
            </div>
          </div>

          <div className="p-5 m-5">
            <img
              src={sbakso}
              alt="seblak bakso"
              className="w-56 h-56 rounded-md object-cover mb-2"
            />
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Seblak</h3>
              <h3 className="text-lg font-bold text-gray-800">Harga</h3>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm">Jenis</p>
              <p className="text-gray-600 text-sm">Level</p>
            </div>
          </div>

          <div className="p-5 m-5">
            <img
              src={smie}
              alt="Seblak mie"
              className="w-56 h-56 rounded-md object-cover mb-2"
            />
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Seblak</h3>
              <h3 className="text-lg font-bold text-gray-800">Harga</h3>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm">Jenis</p>
              <p className="text-gray-600 text-sm">Level</p>
            </div>
          </div>

          <div className="p-5 m-5">
            <img
              src={sjamur}
              alt="seblak jamur"
              className="w-56 h-56 rounded-md object-cover mb-2"
            />
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Seblak</h3>
              <h3 className="text-lg font-bold text-gray-800">Harga</h3>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm">Jenis</p>
              <p className="text-gray-600 text-sm">Level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
