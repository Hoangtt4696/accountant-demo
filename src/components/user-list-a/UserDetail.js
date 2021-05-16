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
  Typography
} from '@material-ui/core';
import TextField from '../TextField';
import DateTimePicker from '../DateTimePicker';
import Select from '../Select';

const UserDetail = (props) => {
  const [values, setValues] = useState(
    props.isDisabled
      ? {
          id: '0000001',
          username: 'nguyenvana123',
          email: 'nguyenvana123@gmail.com',
          password: 'ahahahahahahahah',
          role: 'Ghi đơn',
          phone: '0989392123',
          state: 'hcm',
          gender: 'Nam',
          country: 'Việt Nam',
          company: 'Công ty TNHH nha khoa Hưng Minh',
          address: 'Đường số 3, Link Xuân, Thủ Đức, Thành Phố Hồ Chí Minh',
        }
      : {}
  );
  const [date, setDate] = useState(null);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ fontSize: 14, marginBottom: 40 }}
      >
        <Typography style={{ fontSize: 14 }} color="inherit">
          Trang chủ
        </Typography>
        {props.breadcrumbs.map((item) => (
          <Typography style={{ fontSize: 14 }} color="inherit">
            {item}
          </Typography>
        ))}
      </Breadcrumbs>
      <Card>
        <CardHeader title="Thông tin tài khoản" />
        <Box sx={{ margin: '0 0 20px' }}>
          <Divider />
        </Box>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="ID"
                onChange={handleChange}
                size="small"
                value={values.id}
                variant="outlined"
                disabled={props.isDisabled}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Tên đăng nhập"
                size="small"
                onChange={handleChange}
                value={values.username}
                variant="outlined"
                disabled={props.isDisabled}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                size="small"
                onChange={handleChange}
                value={values.email}
                disabled={props.isDisabled}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Mật khẩu"
                type="password"
                disabled={props.isDisabled}
                size="small"
                onChange={handleChange}
                value={values.password}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Vai trò"
                disabled={props.isDisabled}
                name="country"
                size="small"
                onChange={handleChange}
                value={values.role}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Số điện thoại"
                disabled={props.isDisabled}
                name="country"
                size="small"
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <DateTimePicker
                label="Ngày tháng năm tạo"
                disabled={props.isDisabled}
                onChange={(value) => {
                  setDate(value);
                }}
                value={date}
              />
            </Grid>
            <Grid item xs={6}>
              {props.type === 'user' ? (
                <TextField
                  fullWidth
                  label="Tên công ty"
                  disabled={props.isDisabled}
                  size="small"
                  onChange={handleChange}
                  value={values.company}
                  variant="outlined"
                />
              ) : (
                <Select
                  options={
                    props.isDisabled
                      ? [{ label: 'ABC', value: 'ABC' }]
                      : [{ label: 'Bộ phận', value: 'ABC' }]
                  }
                  disabled={props.isDisabled}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              {props.type === 'user' ? (
                  <TextField
                    fullWidth
                    label="Địa chỉ"
                    disabled={props.isDisabled}
                    size="small"
                    onChange={handleChange}
                    value={values.address}
                    variant="outlined"
                  />
                ) : (
                  <Select
                    options={
                      props.isDisabled
                        ? [{ label: 'Nha Tĩnh Nguyễn', value: 'ABC' }]
                        : [{ label: 'Tên nhân viên', value: 'ABC' }]
                    }
                    disabled={props.isDisabled}
                  />
                )}
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
          <Button
            size="small"
            style={{ textTransform: 'none' }}
            color="primary"
            variant="contained"
          >
            Về trang chủ
          </Button>
          <Box>
            {props.isDisabled ? (
              <>
                <Button
                  size="small"
                  style={{ textTransform: 'none' }}
                  color="primary"
                  variant="contained"
                >
                  Sửa
                </Button>
                &nbsp; &nbsp;
                <Button
                  size="small"
                  style={{ backgroundColor: 'silver', textTransform: 'none' }}
                  variant="contained"
                >
                  Lưu
                </Button>
              </>
            ) : (
              <Button
                size="small"
                style={{ textTransform: 'none' }}
                variant="contained"
              >
                Lưu
              </Button>
            )}
          </Box>
        </Box>
      </Card>
    </form>
  );
};

export default UserDetail;
