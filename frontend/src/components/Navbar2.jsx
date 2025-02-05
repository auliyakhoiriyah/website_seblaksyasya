import React from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="hidden md:flex items-center justify-between text-xl font-medium text-lime-950 py-3 px-8">
          {/* Teks Seblak Syasya */}
          <span className="whitespace-nowrap ">Seblak Syasya</span>

          {/* Input Pencarian (Lebih Kecil) */}
          <div className="w-full max-w-[250px]">
            <Input
              className="bg-gray-200 border rounded-lg border-gray-500 focus:ring-gray-border-gray-500 focus:border-gray-500"
              placeholder="Telusuri"
              prefix={<SearchOutlined style={{ color: "rgba(0,0,0,0.95)" }} />}
              allowClear
              onPressEnter={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Navbar;
