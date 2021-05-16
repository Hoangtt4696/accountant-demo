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
import ResouceListResults from 'src/components/resource-a/ResourceListResults';
import ListToolbar from 'src/components/ListToolbar';
import customers from 'src/__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
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
            Quản lý nguyên liệu
          </Typography>
        </Breadcrumbs>
        <ListToolbar searchPlaceholder="Nhập tên..." />
        <Box sx={{ textAlign: 'right', pt: 3 }}>
          <Link
            to="/app/resources-create-1"
            variant="contained"
            style={{
              fontSize: 14,
              backgroundColor: '#5664d2',
              color: 'white',
              padding: '10px 15px',
              borderRadius: 8,
              fontWeight: 'bold'
            }}
          >
            Tạo nguyên liệu
          </Link>
        </Box>
        <Box sx={{ pt: 3 }}>
          <ResouceListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
