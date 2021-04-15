import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';

const AccountProfileDetails = (props) => (
  <form autoComplete="off" noValidate {...props}>
    <Card>
      <CardHeader title="Thông tin đơn hàng" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Tên khách hàng"
              name="customerName"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Số điện thoại"
              required
              name="phone"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Quốc tịch"
              name="country"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Địa chỉ"
              name="address"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Tên sản phẩm"
              name="address"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <TextField
              fullWidth
              label="Đơn giá"
              name="address"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <TextField
              fullWidth
              label="Số lượng"
              name="address"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Ghi chú"
              name="address"
              required
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button color="primary" variant="contained">
          Lưu
        </Button>
      </Box>
    </Card>
  </form>
);

export default AccountProfileDetails;
