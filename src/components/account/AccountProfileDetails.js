/* eslint-disable */

import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Breadcrumbs,
  Typography,
} from '@material-ui/core';
import TextField from '../TextField';
import DateTimePicker from '../DateTimePicker';

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Nguyễn',
    lastName: 'Hải Châu',
    email: 'haichaunguyen@gmail.com',
    phone: '0989392123',
    state: 'hcm',
    gender: 'Nam',
    country: 'Việt Nam'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: 14, marginBottom: 40 }}>
        <Typography style={{ fontSize: 14 }} color="inherit">Trang chủ</Typography>
        <Typography style={{ fontSize: 14 }} color="inherit">Quản lý tài khoản</Typography>
      </Breadcrumbs>
      <Card>
        <CardHeader title="Thông tin tài khoản" />
        <Box sx={{ margin: '0 0 20px' }}>
          <Divider />
        </Box>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Họ"
                name="firstName"
                onChange={handleChange}
                size="small"
                value={values.firstName}
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Tên"
                name="lastName"
                size="small"
                onChange={handleChange}
                value={values.lastName}
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Giới tính"
                size="small"
                onChange={handleChange}
                value={values.gender}
                disabled
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Địa chỉ email"
                disabled
                size="small"
                onChange={handleChange}
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Số điện thoại"
                disabled
                name="country"
                size="small"
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <DateTimePicker label="Ngày tháng năm sinh" disabled />
            </Grid>
          </Grid>
        </CardContent>
        <Box sx={{ margin: '20px 0' }}>
          <Divider />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2
          }}
        >
          <Button size="small" style={{ textTransform: 'none' }} color="primary" variant="contained">
            Về trang chủ
          </Button>
          <Box>
            <Button size="small" style={{ textTransform: 'none' }} color="primary" variant="contained">
              Sửa
            </Button>
            &nbsp;
            &nbsp;
            <Button size="small" style={{ backgroundColor: 'silver', textTransform: 'none' }} variant="contained">
              Lưu
            </Button>
          </Box>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
