/* eslint-disable */
import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  FormControlLabel,
  Checkbox,
  Switch,
  Breadcrumbs,
  Typography,
  RadioGroup,
  Radio
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '../TextField';
import Select from '../Select';
import ExpandItemDetail from '../ExpandItemDetail';
import ExpandItem from '../ExpandItem1';
import DateTimePicker from '../DateTimePicker';

const ITEMS = [
  'Model',
  'Wax',
  'Invest',   
  'Casting',
  'Design',
  'Metal',
  'OPA',
  'PB',
  'PG',
  'CMD',
  'Denture',
  'Orthodonnic'
];

const FormControlLabelUI = withStyles({
  label: {
    fontSize: '14px !important'
  }
})(FormControlLabel);

const AccountProfileDetails = (props) => {
  const list = {};
  const list1 = {};

  ITEMS.forEach((item) => {
    if (['Model', 'Wax'].includes(item)) {
      list[item] = true;

      if (item === 'Model') {
        list1[item] = true;
      } else {
        list1[item] = false;
      }
    } else {
      list[item] = false;
      list1[item] = false;
    }
  });

  const [displayList, setDisplayList] = useState(list);
  const [displayList1, setDisplayList1] = useState(list1);
  const handleFilterDisplayList = (e) => {
    const { name } = e.target;
    const newList = displayList;

    newList[name] = !newList[name];

    setDisplayList({ ...newList });
  };
  const handleFilterDisplayList1 = (e) => {
    const { name } = e.target;
    const newList = displayList1;

    newList[name] = !newList[name];

    setDisplayList1({ ...newList });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginBottom: 30, fontSize: 14 }}
      >
        <Typography color="inherit" style={{ fontSize: 14 }}>
          Quản lý đơn hàng
        </Typography>
        <Typography color="inherit" style={{ fontSize: 14 }}>
          Chi tiết đơn hàng
        </Typography>
      </Breadcrumbs>
      <Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2
          }}
        >
          <h4>Đơn hàng C-1049</h4>
          <Button
            variant="contained"
            component="label"
            style={{ fontSize: 14, textTransform: 'none' }}
          >
            Lịch sử cập nhật
          </Button>
        </Box>
        <Divider />
        <CardContent style={{ fontSize: 14 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <span style={{ fontSize: 16 }}>Thông tin đơn hàng</span>
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                style={{
                  color: '#aeb7c6',
                  fontSize: 15,
                  cursor: 'pointer',
                  marginLeft: 7
                }}
              />
            </Grid>
            <Grid item xs={1.5}>
              <Select
                options={[
                  { label: 'C', value: 1 },
                  { label: 'Ngẫu nhiên', value: 2 }
                ]}
                defaultValue={1}
                disabled
              />
            </Grid>
            <Grid item xs={1.5}>
              <TextField
                fullWidth
                name="customerName"
                variant="outlined"
                size="small"
                value={149}
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <Select
                options={[{ label: 'Loại đơn hàng', value: 1 }]}
                defaultValue={1}
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <DateTimePicker disabled />
            </Grid>
            <Grid item xs={3}>
              <DateTimePicker disabled />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="phone"
                variant="outlined"
                size="small"
                value="Nha khoa Nguyễn Hùng"
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="email"
                variant="outlined"
                size="small"
                disabled
                value="Nguyễn Thị Lê Trân"
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                disabled
                value="-"
              />
            </Grid>
            <Grid item xs={2}>
              <Select
                options={[{ label: '46', value: 1 }]}
                defaultValue={1}
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="email"
                variant="outlined"
                size="small"
                disabled
                value="MFC"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                name="email"
                variant="outlined"
                size="small"
                value="2"
                disabled
              />
            </Grid>
            <Grid item md={1}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                type="file"
                id="files"
                style={{ fontSize: 14, textTransform: 'none' }}
              >
                Thêm
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="ABC"
                disabled
                variant="outlined"
                size="small"
                disabled
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                id="files"
                style={{
                  fontSize: 14,
                  textTransform: 'none',
                  border: 'none'
                }}
              >
                Xem
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                type="file"
                id="files"
                style={{ fontSize: 14, textTransform: 'none' }}
              >
                Tải file
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="ABC"
                disabled
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                id="files"
                style={{
                  fontSize: 14,
                  textTransform: 'none',
                  border: 'none'
                }}
              >
                Xem
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                type="file"
                id="files"
                style={{ fontSize: 14, textTransform: 'none' }}
              >
                Tải file
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ghi chú..."
                name="address"
                variant="outlined"
                size="small"
                multiline
                disabled
                rows={2}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: '20px 0' }}>
              <Divider />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <span style={{ fontSize: 16 }}>Mài cùi</span>
              <FontAwesomeIcon
                icon={faAngleDoubleUp}
                style={{
                  color: '#aeb7c6',
                  fontSize: 15,
                  cursor: 'pointer',
                  marginLeft: 7
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              {ITEMS.map((item) => (
                <FormControlLabelUI
                  key={item}
                  control={
                    <Checkbox
                      checked={displayList[item]}
                      color="primary"
                      disabled
                      size="small"
                      style={{ padding: 5 }}
                    />
                  }
                  onClick={handleFilterDisplayList}
                  label={item}
                  style={{ fontSize: 14 }}
                  size="small"
                  name={item}
                />
              ))}
            </Grid>
            {Object.keys(displayList)
              .filter((item) => displayList[item])
              .map((item) => (
                <ExpandItemDetail key={item} title={item} />
              ))}
            <Grid item xs={12} style={{ margin: '20px 0' }}>
              <Divider />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: 16 }}>Nội dung chỉnh sửa</span>
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                style={{
                  color: '#aeb7c6',
                  fontSize: 15,
                  cursor: 'pointer',
                  marginLeft: 7
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
              >
                <FormControlLabelUI
                  style={{ fontSize: 14 }}
                  value="yes"
                  control={<Radio color="default" size="small" />}
                  label="Không tính phí sửa chửa"
                />
                <FormControlLabelUI
                  style={{ fontSize: 14 }}
                  value="no"
                  control={<Radio color="default" size="small" />}
                  label="Tính phí sửa chửa"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={4}>
              <DateTimePicker label="Ngày & giờ hoàn thành" style={{ width: 300 }} readOnly value={null} />
            </Grid>
            <Grid item xs={8} />
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="Màu"
                name="address"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={2}>
              <Select
                options={[{ label: 'Vị trí', value: 1 }]}
                defaultValue={1}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Diễn giải chỉ định"
                name="address"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                fullWidth
                label="Số lượng"
                type="number"
                name="address"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                style={{ fontSize: 14, textTransform: 'none' }}
              >
                Thêm
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ghi chú..."
                type="number"
                name="address"
                variant="outlined"
                size="small"
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: '20px 0' }}>
              <Divider />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <span style={{ fontSize: 16 }}>Mài cùi</span>
              <FontAwesomeIcon
                icon={faAngleDoubleUp}
                style={{
                  color: '#aeb7c6',
                  fontSize: 15,
                  cursor: 'pointer',
                  marginLeft: 7
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              {ITEMS.map((item) => (
                <FormControlLabelUI
                  key={item}
                  control={
                    <Checkbox
                      checked={displayList1[item]}
                      color="primary"
                      size="small"
                      style={{ padding: 5 }}
                    />
                  }
                  onClick={handleFilterDisplayList1}
                  label={item}
                  style={{ fontSize: 14 }}
                  size="small"
                  name={item}
                />
              ))}
            </Grid>
            {Object.keys(displayList1)
              .filter((item) => displayList1[item])
              .map((item) => (
                <ExpandItem key={item} title={item} />
              ))}
            <Grid item xs={12}>
              <span>Đơn hàng hoàn thành</span>
              <Switch defaultChecked color="primary" />
            </Grid>
            <Grid item xs={12} style={{ margin: '20px 0' }}>
              <Divider />
            </Grid>
          </Grid>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2
          }}
        >
          <Button
            variant="contained"
            component="label"
            fullWidth
            style={{
              fontSize: 14,
              maxWidth: 200,
              marginLeft: 10,
              textTransform: 'none'
            }}
          >
            Về trang danh sách
          </Button>
          <div style={{ display: 'flex' }}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              style={{
                fontSize: 14,
                textTransform: 'none',
                backgroundColor: 'silver',
                border: 'none',
                maxWidth: 100
              }}
            >
              Sửa
            </Button>
            <Button
              variant="contained"
              component="label"
              fullWidth
              style={{
                fontSize: 14,
                maxWidth: 100,
                marginLeft: 10,
                textTransform: 'none'
              }}
            >
              Lưu
            </Button>
          </div>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
