/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Breadcrumbs, Typography } from '@material-ui/core';
import CreateOrderDetail from 'src/components/order/CreateOrder-a';

const CreateOrder = () => (
  <>
    <Helmet>
      <title>Tạo đơn hàng</title>
    </Helmet>
    <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: 14, padding: 20 }}>
      <Typography color="inherit" style={{ fontSize: 14 }}>Quản lý đơn hàng</Typography>
      <Typography color="inherit" style={{ fontSize: 14 }}>Tạo đơn hàng</Typography>
    </Breadcrumbs>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <CreateOrderDetail />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default CreateOrder;
