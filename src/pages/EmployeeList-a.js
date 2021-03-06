/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Breadcrumbs,
  Typography,
  Button
} from '@material-ui/core';
import EmployeeListResults from 'src/components/employee-list-a/EmployeeListResults';
import ListToolbar from 'src/components/ListToolbar';
import customers from 'src/__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Demo</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="inherit" style={{ fontSize: 14 }}>
            Trang chủ
          </Typography>
          <Typography color="inherit" style={{ fontSize: 14 }}>
            Quản lý nhân viên
          </Typography>
        </Breadcrumbs>
        <ListToolbar searchPlaceholder="Nhập tên, email..." />
        <Box sx={{ textAlign: 'right', pt: 3 }}>
          <Link
            to="/app/employees-create-1"
            variant="contained"
            style={{
              fontSize: 14,
              backgroundColor: '#424242',
              color: 'white',
              padding: '10px 15px',
              borderRadius: 8,
              fontWeight: 'bold'
            }}
          >
            Tạo tài khoản
          </Link>
        </Box>
        <Box sx={{ pt: 3 }}>
          <EmployeeListResults customers={customers} type="employee" />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
