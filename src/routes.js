import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList1 from 'src/pages/CustomerList-a';
import CustomerList2 from 'src/pages/CustomerList-b';
import CustomerList3 from 'src/pages/CustomerList-c';
import CustomerList4 from 'src/pages/CustomerList-d';
import Dashboard from 'src/pages/Dashboard';
import Dashboard1 from 'src/pages/Dashboard1';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import CreateOrder1 from 'src/pages/CreateOrdera';
import CreateOrder2 from 'src/pages/CreateOrderbb';
import CreateOrder3 from 'src/pages/CreateOrderc';
import CreateOrder4 from 'src/pages/CreateOrderd';
import OrderDetail1 from 'src/pages/OrderDetaila';
import OrderDetail2 from 'src/pages/OrderDetailb';
import OrderDetail3 from 'src/pages/OrderDetailc';
import UserList1 from 'src/pages/UserList-a';
import UserDetail1 from 'src/pages/UserDetail-a';
import CreateUser1 from 'src/pages/CreateUser-a';
import Employee1 from 'src/pages/EmployeeList-a';
import Customers1 from 'src/pages/CustomersList-a';
import Resource1 from 'src/pages/ResourceList-a';
import ResourceDetail1 from 'src/pages/ResourceDetail-a';
import CreateResource1 from 'src/pages/CreateResource-a';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'orders-1', element: <CustomerList1 /> },
      { path: 'orders-2', element: <CustomerList2 /> },
      { path: 'orders-3', element: <CustomerList3 /> },
      { path: 'orders-4', element: <CustomerList4 /> },
      { path: 'orders-detail-1', element: <OrderDetail1 /> },
      { path: 'orders-detail-2', element: <OrderDetail2 /> },
      { path: 'orders-detail-3', element: <OrderDetail3 /> },
      { path: 'create-order-1', element: <CreateOrder1 /> },
      { path: 'create-order-2', element: <CreateOrder2 /> },
      { path: 'create-order-3', element: <CreateOrder3 /> },
      { path: 'create-order-4', element: <CreateOrder4 /> },
      { path: 'customers-1', element: <UserList1 /> },
      { path: 'customer-detail-1', element: <UserDetail1 breadcrumbs={['Quản lý người dùng', 'Chi tiết']} /> },
      { path: 'customer-create-1', element: <CreateUser1 breadcrumbs={['Quản lý người dùng', 'Tạo tài khoản người dùng']} /> },
      { path: 'employees-1', element: <Employee1 /> },
      { path: 'employees-detail-1', element: <UserDetail1 breadcrumbs={['Quản lý nhân viên', 'Chi tiết']} /> },
      { path: 'employees-create-1', element: <CreateUser1 breadcrumbs={['Quản lý nhân viên', 'Tạo tài khoản nhân viên']} /> },
      { path: 'users-1', element: <Customers1 /> },
      { path: 'users-detail-1', element: <UserDetail1 type="user" breadcrumbs={['Quản lý khách hàng', 'Chi tiết']} /> },
      { path: 'users-create-1', element: <CreateUser1 type="user" breadcrumbs={['Quản lý khách hàng', 'Tạo tài khoản khách hàng']} /> },
      { path: 'resources-1', element: <Resource1 /> },
      { path: 'resources-detail-1', element: <ResourceDetail1 /> },
      { path: 'resources-create-1', element: <CreateResource1 /> },
      { path: 'account', element: <Account /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'app-1',
    element: <DashboardLayout type="1" />,
    children: [
      { path: 'dashboard', element: <Dashboard1 /> },
      { path: 'orders-1', element: <CustomerList2 /> },
      { path: 'create-order-1', element: <CreateOrder1 /> },
      { path: 'orders-detail-1', element: <OrderDetail1 /> },
      { path: 'orders-detail-2', element: <OrderDetail2 type="1" /> },
      { path: 'orders-detail-3', element: <OrderDetail3 /> },
      { path: 'customer-create-1', element: <CreateUser1 breadcrumbs={['Quản lý người dùng', 'Tạo tài khoản người dùng']} /> },
      { path: 'account', element: <Account /> },
      { path: 'settings', element: <Settings /> },
    ]
  },
  {
    path: 'app-2',
    element: <DashboardLayout type="2" />,
    children: [
      { path: 'orders-1', element: <CustomerList3 /> },
      { path: 'orders-detail-1', element: <OrderDetail1 /> },
      { path: 'orders-detail-2', element: <OrderDetail2 type="2" /> },
      { path: 'orders-detail-3', element: <OrderDetail3 /> },
      { path: 'customer-create-1', element: <CreateUser1 breadcrumbs={['Quản lý người dùng', 'Tạo tài khoản người dùng']} /> },
      { path: 'account', element: <Account /> },
      { path: 'settings', element: <Settings /> },
    ]
  },
  {
    path: 'app-3',
    element: <DashboardLayout type="3" />,
    children: [
      { path: 'orders-1', element: <CustomerList4 /> },
      { path: 'orders-detail-1', element: <OrderDetail1 /> },
      { path: 'orders-detail-2', element: <OrderDetail2 type="3" /> },
      { path: 'orders-detail-3', element: <OrderDetail3 /> },
      { path: 'customer-create-1', element: <CreateUser1 breadcrumbs={['Quản lý người dùng', 'Tạo tài khoản người dùng']} /> },
      { path: 'account', element: <Account /> },
      { path: 'settings', element: <Settings /> },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
