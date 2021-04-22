import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList1 from 'src/pages/CustomerList-a';
import CustomerList2 from 'src/pages/CustomerList-b';
import CustomerList3 from 'src/pages/CustomerList-c';
import CustomerList4 from 'src/pages/CustomerList-d';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import CreateOrder1 from 'src/pages/CreateOrdera';
import CreateOrder2 from 'src/pages/CreateOrderbb';
import CreateOrder3 from 'src/pages/CreateOrderc';
import CreateOrder4 from 'src/pages/CreateOrderd';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'orders-1', element: <CustomerList1 /> },
      { path: 'orders-2', element: <CustomerList2 /> },
      { path: 'orders-3', element: <CustomerList3 /> },
      { path: 'orders-4', element: <CustomerList4 /> },
      { path: 'create-order-1', element: <CreateOrder1 /> },
      { path: 'create-order-2', element: <CreateOrder2 /> },
      { path: 'create-order-3', element: <CreateOrder3 /> },
      { path: 'create-order-4', element: <CreateOrder4 /> },
      { path: 'account', element: <Account /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
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
