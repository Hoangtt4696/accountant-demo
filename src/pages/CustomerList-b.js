/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Box, Container, Breadcrumbs, Typography, Button } from '@material-ui/core';
import CustomerListResults from 'src/components/customer-b/CustomerListResults';
import CustomerListToolbar from 'src/components/customer-a/CustomerListToolbar';
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
          <Typography color="inherit" style={{ fontSize: 14 }}>Quản lý đơn hàng</Typography>
        </Breadcrumbs>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
