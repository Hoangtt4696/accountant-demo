import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import OrderDetail1 from 'src/components/order/OrderDetail-a';

const OrderDetaila = () => (
  <>
    <Helmet>
      <title>Chi tiết đơn hàng</title>
    </Helmet>
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
            <OrderDetail1 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default OrderDetaila;
