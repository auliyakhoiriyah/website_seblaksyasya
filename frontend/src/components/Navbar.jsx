import React, { useState } from "react";
import { Menu, Dropdown, Modal } from "antd";
import { useNavigate } from "react-router-dom"; // Import for navigation
import {
  UserOutlined,
  HomeOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  PoweroffOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Profile from "../assets/sicantik.jpg";

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove authentication token
    sessionStorage.removeItem("authToken"); // Remove session token if used
    navigate("/signin", { state: { logoutSuccess: true } }); // Redirect to login page
  };

  // Function to show logout confirmation modal
  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  // Function to close the modal
  const handleCancelLogout = () => {
    setLogoutModalVisible(false);
  };

  // Menu items
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>Profile</Menu.Item>
      <Menu.Item key="2" icon={<PoweroffOutlined />} onClick={showLogoutModal}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={`bg-gray-300 ${isMenuVisible ? "bg-gray-200" : ""}`}>
      {/* Navbar container */}
      <div className="flex items-center justify-between px-6 py-3 md:px-10">
        {/* Left side: Logo and profile */}
        <div className="flex items-center">
          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-2xl text-lime-950 focus:outline-none mr-4"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuOutlined />
          </button>

          {/* Profile Dropdown */}
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            onOpenChange={(visible) => setMenuVisible(visible)}
          >
            <div className="mr-4 cursor-pointer">
              <img
                src={Profile}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </Dropdown>

          {/* Welcome Text */}
          <h2 className="hidden md:block text-xl font-medium text-lime-950 py-2 px-4">
            Selamat Datang di Seblak Syasya
          </h2>
        </div>

        {/* Right side: Navigation links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 font-bold text-lime-950`}
        >
          <div className="flex items-center hover:text-lime-800 py-2">
            <HomeOutlined className="text-xl" />
            <span className="ml-2">Home</span>
          </div>

          <div className="flex items-center hover:text-lime-800 py-2">
            <ShopOutlined className="text-xl" />
            <span className="ml-2">Shop</span>
          </div>

          <div className="flex items-center hover:text-lime-800 py-2">
            <ShoppingCartOutlined className="text-xl" />
            <span className="ml-2">Cart</span>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {(isMobileMenuOpen || isMenuVisible) && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-gray-200 opacity-90 z-10 md:hidden"
          onClick={() => {
            setMobileMenuOpen(false);
            setMenuVisible(false);
          }}
        />
      )}

      {/* Logout Confirmation Modal */}
      <Modal
        title="Konfirmasi Logout"
        open={isLogoutModalVisible}
        onOk={handleLogout}
        onCancel={handleCancelLogout}
        okText="Ya, Logout"
        cancelText="Batal"
        centered
      >
        <p>Apakah Anda yakin ingin logout?</p>
      </Modal>
    </div>
  );
};

export default Navbar;
