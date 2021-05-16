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
          resource: 'Nguyên liệu A',
          price: '200,000'
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
        <Typography style={{ fontSize: 14 }} color="inherit">
          Quản lý khách hàng
        </Typography>
        {props.isDisabled ? (
          <Typography style={{ fontSize: 14 }} color="inherit">
            Chi tiết
          </Typography>
        ) : (
          <Typography style={{ fontSize: 14 }} color="inherit">
            Tạo nguyên liệu
          </Typography>
        )}
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
              <Select
                options={
                  props.isDisabled
                    ? [{ label: 'Kim loại', value: 'ABC' }]
                    : [{ label: 'Nhóm nguyên liệu', value: 'ABC' }]
                }
                disabled={props.isDisabled}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Tên nguyên liệu"
                size="small"
                onChange={handleChange}
                value={values.resource}
                disabled={props.isDisabled}
                variant="outlined" 
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Đơn giá"
                disabled={props.isDisabled}
                size="small"
                onChange={handleChange}
                value={values.price}
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
