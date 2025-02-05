import React, { useState } from 'react';
import { Layout, Menu, Modal } from 'antd';
import { 
    DashboardOutlined, 
    HomeOutlined, 
    SettingOutlined, 
    PlusCircleOutlined,
    LogoutOutlined, 
    UserOutlined, 
    BarChartOutlined, 
    MessageOutlined, 
    QuestionCircleOutlined 
} from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
    const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
        navigate("/signin", { state: { logoutSuccess: true } });
    };

    // Function to show logout confirmation modal
    const showLogoutModal = () => {
        setLogoutModalVisible(true);
    };

    // Function to close the modal
    const handleCancelLogout = () => {
        setLogoutModalVisible(false);
    };

    return (
        <>
            <Sider collapsible collapsed={collapsed} trigger={null} style={{ background: '#fff' }} className='outline outline-1 outline-gray-300'>
                <div className='demo-logo-vertical' />
                <Menu 
                    theme='light' 
                    mode='inline' 
                    selectedKeys={[location.pathname]} 
                    defaultSelectedKeys={['/dashboardadmin/home']}
                >
                    <Menu.Item key='/dashboardadmin/home' icon={<HomeOutlined />} style={location.pathname === '/home' ? { color: 'red' } : {}}>
                        <Link to='/dashboardadmin/home'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key='/dashboardadmin/overview' icon={<DashboardOutlined />} style={location.pathname === '/overview' ? { color: 'red' } : {}}>
                        <Link to='/dashboardadmin/overview'>Overview</Link>
                    </Menu.Item>
                    <Menu.Item key='/dashboardadmin/products' icon={<PlusCircleOutlined />} style={location.pathname === '/products' ? { color: 'red' } : {}}>
                        <Link to='/dashboardadmin/products'>Products</Link>
                    </Menu.Item>
                    
                    <Menu.SubMenu key='sub1' icon={<BarChartOutlined />} title='Sales'>
                        <Menu.Item key='/dashboardadmin/sales/product-list' style={location.pathname === '/sales/product-list' ? { color: 'red' } : {}}>
                            <Link to='/dashboardadmin/sales/product-list'>Product List</Link>
                        </Menu.Item>
                        <Menu.Item key='/dashboardadmin/sales/billing' style={location.pathname === '/sales/billing' ? { color: 'red' } : {}}>
                            <Link to='/dashboardadmin/sales/billing'>Billing</Link>
                        </Menu.Item>
                        <Menu.Item key='/dashboardadmin/sales/invoice' style={location.pathname === '/sales/invoice' ? { color: 'red' } : {}}>
                            <Link to='/dashboardadmin/sales/invoice'>Invoice</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key='/dashboardadmin/messages' icon={<MessageOutlined />} style={location.pathname === '/messages' ? { color: 'red' } : {}}>
                        <Link to='/dashboardadmin/messages'>Message</Link>
                    </Menu.Item>
                    <Menu.SubMenu key='sub2' icon={<UserOutlined />} title='Authentication'>
                        <Menu.Item key='/dashboardadmin/authentication/login' style={location.pathname === '/authentication/login' ? { color: 'red' } : {}}>
                            <Link to='/dashboardadmin/authentication/login'>Login</Link>
                        </Menu.Item>
                        <Menu.Item key='/dashboardadmin/authentication/register' style={location.pathname === '/authentication/register' ? { color: 'red' } : {}}>
                            <Link to='/dashboardadmin/authentication/register'>Register</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key='/dashboardadmin/help' icon={<QuestionCircleOutlined />} style={location.pathname === '/help' ? { color: 'red' } : {}}>
                        <Link to='/dashboardadmin/help'>Help</Link>
                    </Menu.Item>
                    <Menu.Item key='/logout' icon={<LogoutOutlined />} onClick={showLogoutModal}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Sider>

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
        </>
    );
};

export default Sidebar;