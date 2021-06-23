/* eslint-disable */
import React, { useState, Fragment } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  FormControlLabel,
  Checkbox,
  Switch,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import TextField from '../../components/TextField';
import Select from '../../components/Select';
import ExpandItem from '../../components/ExpandItem';
import DateTimePicker from '../../components/DateTimePicker';

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

const Description = ({ count, setCount }) => {
  const results = [];

  for (let i = 0; i < count; i++) {
    if (i === count - 1) {
      results.push(
        <Fragment key={`desc_${i + 1}`}>
          <Grid item xs={1}>
            <TextField fullWidth label="Màu" variant="outlined" size="small" />
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
              name="email"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              label="Số lượng"
              name="email"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={1}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              id="files"
              style={{ fontSize: 14, textTransform: 'none' }}
              onClick={() => { setCount(count + 1) }}
            >
              Thêm
            </Button>
          </Grid>
          <Grid item md={3} />
        </Fragment>
      );
    } else {
      results.push(
        <Fragment key={`desc_${i + 1}`}>
          <Grid item xs={1}>
            <TextField fullWidth label="Màu" variant="outlined" size="small" />
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
              name="email"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              label="Số lượng"
              name="email"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={4} />
        </Fragment>
      );
    }
  }

  return results;
};

const FormControlLabelUI = withStyles({
  label: {
    fontSize: '14px !important'
  }
})(FormControlLabel);

const AccountProfileDetails = (props) => {
  const list = {};

  ITEMS.forEach(item => list[item] = true );

  const [totalDescription, setTotalDescription] = useState(1);
  const [displayList, setDisplayList] = useState(list);
  const handleFilterDisplayList = e => {
    const { name } = e.target;
    const newList = displayList;

    newList[name] = !newList[name];

    setDisplayList({ ...newList });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader title="Tạo đơn hàng" />
        <Divider />
        <CardContent style={{ fontSize: 14 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <span style={{ fontSize: 16 }}>Thông tin đơn hàng</span>
            </Grid>
            <Grid item xs={1.5}>
              <Select
                options={[
                  { label: 'Nhập mã', value: 1 },
                  { label: 'Ngẫu nhiên', value: 2 }
                ]}
                defaultValue={1}
              />
            </Grid>
            <Grid item xs={1.5}>
              <TextField
                fullWidth
                label="Nhập mã"
                name="customerName"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <Select
                options={[{ label: 'Loại đơn hàng', value: 1 }]}
                defaultValue={1}
              />
            </Grid>
            <Grid item xs={3}>
              <DateTimePicker label="Ngày và giờ nhận" />
            </Grid>
            <Grid item xs={3}>
              <DateTimePicker label="Ngày và giờ hoàn thành" disabled />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Nha khoa - nha sĩ"
                name="phone"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Tên bệnh nhân"
                name="email"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Description count={totalDescription} setCount={setTotalDescription} />
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Tải file mặt trước"
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
                  backgroundColor: 'silver',
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
                label="Tải file mặt sau"
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
                  backgroundColor: 'silver',
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
                rows={2}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: '20px 0' }}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <span style={{ fontSize: 16 }}>Mài cùi</span>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              {ITEMS.map((item) => (
                <FormControlLabelUI
                  key={item}
                  control={
                    <Checkbox
                      checked={displayList[item]}
                      color="primary"
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
            {Object.keys(displayList).filter(item => displayList[item]).map(item => <ExpandItem key={item} title={item} />)}
            <Grid item xs={12}>
              <span>Đơn hàng hoàn thành</span><Switch />
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
              textTransform: 'none',
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
                maxWidth: 100,
              }}
            >
              Sửa
              <input type="file" hidden />
            </Button>
            <Button
              variant="contained"
              component="label"
              fullWidth
              style={{
                fontSize: 14,
                maxWidth: 100,
                marginLeft: 10,
                textTransform: 'none',
              }}
            >
              Lưu
            </Button>
          </div>
        </Box>
      </Card>
    </form>
  );
}

export default AccountProfileDetails;
