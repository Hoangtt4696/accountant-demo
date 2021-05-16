/* eslint-disable */

import React, { useState } from 'react';
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
  Modal
} from '@material-ui/core';
import TextField from './TextField';
import Select from './Select';

const Settings = (props) => {
  const [values, setValues] = useState({
    firstName: 'Nguyễn',
    lastName: 'Hải Châu',
    email: 'haichaunguyen@gmail.com',
    phone: '0989392123',
    state: 'hcm',
    gender: 'Nam',
    country: 'Việt Nam',
    password: '123123123123123123'
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Typography style={{ fontSize: 14 }} color="inherit">
          Quản lý tài khoản
        </Typography>
      </Breadcrumbs>
      <Card>
        <CardHeader title="Thông tin đăng nhập" />
        <Box sx={{ margin: '0 0 20px' }}>
          <Divider />
        </Box>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Tên đăng nhập"
                name="firstName"
                onChange={handleChange}
                size="small"
                value={values.firstName}
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Mật khẩu"
                name="lastName"
                size="small"
                type="password"
                onChange={handleChange}
                value={values.lastName}
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                size="small"
                style={{ textTransform: 'none', fontSize: 14 }}
                variant="contained"
                onClick={handleOpen}
              >
                Đổi mật khẩu
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Select options={[{ label: 'Tiếng Việt', value: 1 }]} disabled />
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
            style={{ textTransform: 'none', fontSize: 14 }}
            color="primary"
            variant="contained"
          >
            Về trang chủ
          </Button>
          <Box>
            <Button
              size="small"
              style={{ textTransform: 'none', fontSize: 14 }}
              color="primary"
              variant="contained"
            >
              Sửa
            </Button>
            &nbsp; &nbsp;
            <Button
              size="small"
              style={{
                backgroundColor: 'silver',
                textTransform: 'none',
                fontSize: 14
              }}
              variant="contained"
            >
              Lưu
            </Button>
          </Box>
        </Box>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            border: '1px solid silver',
            borderRadius: 1,
            p: 2
          }}
        >
          <p style={{ fontWeight: 'bold', marginBottom: 30 }}>Đổi mật khẩu</p>
          <p style={{ marginBottom: 15, textAlign: 'center' }}>
            <TextField
              label="Nhập lại mật khẩu cũ"
              onChange={handleChange}
              size="small"
              variant="outlined"
              style={{ width: 300 }}
            />
          </p>
          <p style={{ marginBottom: 15, textAlign: 'center' }}>
            <TextField
              label="Nhập mật khẩu mới"
              onChange={handleChange}
              size="small"
              variant="outlined"
              style={{ width: 300 }}
            />
          </p>
          <p style={{ marginBottom: 15, textAlign: 'center' }}>
            <TextField
              label="Nhập lại mật khẩu mới"
              onChange={handleChange}
              size="small"
              variant="outlined"
              style={{ width: 300 }}
            />
          </p>
          <p style={{ margin: '30px 0 15px' }}><Divider /></p>
          <p style={{ marginBottom: 15, textAlign: 'right' }}>
            <Button
              size="small"
              style={{ textTransform: 'none', fontSize: 14, backgroundColor: 'silver', }}
              color="primary"
              variant="contained"
              onClick={handleClose}
            >
              Huỷ
            </Button>
            &nbsp;
            <Button
              size="small"
              style={{
                textTransform: 'none',
                fontSize: 14
              }}
              variant="contained"
            >
              Lưu
            </Button>
          </p>
        </Box>
      </Modal>
    </form>
  );
};

export default Settings;
