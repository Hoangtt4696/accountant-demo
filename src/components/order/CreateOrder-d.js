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
          <Grid item xs={1}>
            <TextField
              fullWidth
              label="Mã số"
              name="customerName"
              required
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              label="Ngày nhận"
              name="customerName"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Ngày nhận"
              name="customerName"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Ngày nhận"
              name="customerName"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Ngày nhận"
              name="customerName"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Nha khoa - nha sĩ"
              name="phone"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Tên bệnh nhân"
              name="email"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Diễn giải chỉ định 1"
              name="country"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Diễn giải chỉ định 2"
              name="address"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Số lượng"
              name="address"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Màu"
              name="address"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Ghi chú"
              name="address"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              name="address"
              type="file"
              id="files"
              // size="large"
            >
              Tải file
              <input type="file" hidden />
            </Button>
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
