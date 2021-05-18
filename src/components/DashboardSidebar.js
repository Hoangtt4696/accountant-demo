/* eslint-disable */

import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  Typography,
  ListItem
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons/faHospitalUser';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons/faIdBadge';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import { faDolly } from '@fortawesome/free-solid-svg-icons/faDolly';
import { faBabyCarriage } from '@fortawesome/free-solid-svg-icons/faBabyCarriage';
import { faUserTag } from '@fortawesome/free-solid-svg-icons/faUserTag';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Quản lý',
  name: 'Nguyễn Hải Châu'
};

const items = [
  {
    href: '/app/dashboard',
    icon: <FontAwesomeIcon icon={faHome} style={{ fontSize: 20 }} />,
    title: 'Trang chủ'
  },
  {
    href: '/app/orders-1',
    icon: <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: 20 }} />,
    title: 'Quản lý đơn hàng'
  },
  {
    href: '/app/customers-1',
    icon: <FontAwesomeIcon icon={faHospitalUser} style={{ fontSize: 20 }} />,
    title: 'Quản lý người dùng'
  },
  {
    href: '/app/employees-1',
    icon: <FontAwesomeIcon icon={faIdBadge} style={{ fontSize: 20 }} />,
    title: 'Quản lý nhân viên'
  },
  {
    href: '/app/users-1',
    icon: <FontAwesomeIcon icon={faDolly} style={{ fontSize: 20 }} />,
    title: 'Quản lý khách hàng'
  },
  {
    href: '/app/resources-1',
    icon: <FontAwesomeIcon icon={faBabyCarriage} style={{ fontSize: 20 }} />,
    title: 'Giá nguyên liệu'
  },
  {
    href: '/app/account',
    icon: <FontAwesomeIcon icon={faUserTag} style={{ fontSize: 20 }} />,
    title: 'Quản lý tài khoản'
  },
  {
    href: '/app/settings',
    icon: <FontAwesomeIcon icon={faCog} style={{ fontSize: 20 }} />,
    title: 'Cài đặt'
  }
];

const items1 = [
  {
    href: '/app-1/dashboard',
    icon: <FontAwesomeIcon icon={faHome} style={{ fontSize: 20 }} />,
    title: 'Trang chủ'
  },
  {
    href: '/app-1/orders-1',
    icon: <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: 20 }} />,
    title: 'Quản lý đơn hàng'
  },
  {
    href: '/app-1/account',
    icon: <FontAwesomeIcon icon={faUserTag} style={{ fontSize: 20 }} />,
    title: 'Quản lý tài khoản'
  },
  {
    href: '/app-1/settings',
    icon: <FontAwesomeIcon icon={faCog} style={{ fontSize: 20 }} />,
    title: 'Cài đặt'
  }
];

const items2 = [
  {
    href: '/app-2/orders-1',
    icon: <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: 20 }} />,
    title: 'Quản lý đơn hàng'
  },
  {
    href: '/app-2/account',
    icon: <FontAwesomeIcon icon={faUserTag} style={{ fontSize: 20 }} />,
    title: 'Quản lý tài khoản'
  },
  {
    href: '/app-2/settings',
    icon: <FontAwesomeIcon icon={faCog} style={{ fontSize: 20 }} />,
    title: 'Cài đặt'
  }
];

const items3 = [
  {
    href: '/app-3/orders-1',
    icon: <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: 20 }} />,
    title: 'Quản lý đơn hàng'
  },
  {
    href: '/app-3/account',
    icon: <FontAwesomeIcon icon={faUserTag} style={{ fontSize: 20 }} />,
    title: 'Quản lý tài khoản'
  },
  {
    href: '/app-3/settings',
    icon: <FontAwesomeIcon icon={faCog} style={{ fontSize: 20 }} />,
    title: 'Cài đặt'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile, type }) => {
  const location = useLocation();
  const itemList =
    type === '1'
      ? items1
      : type === '2'
      ? items2
      : type === '3'
      ? items3
      : items;
  const prefixUrl =
    type === '1'
      ? 'app-1'
      : type === '2'
      ? 'app-2'
      : type === '3'
      ? 'app-3'
      : 'app';

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to={`/${prefixUrl}/account`}
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {itemList.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          {['1', '4'].includes(type) && (
            <ListItem style={{ paddingTop: 20 }}>
              <RouterLink
                to={`/${prefixUrl}/create-order-1`}
                style={{
                  backgroundColor: '#424242',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: 13,
                  borderRadius: 13,
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                Tạo đơn hàng
              </RouterLink>
            </ListItem>
          )}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Box sx={{ display: { xl: 'none', xs: 'block' } }}>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Box>
      <Box sx={{ display: { xl: 'block', xs: 'none' } }}>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Box>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default DashboardSidebar;
