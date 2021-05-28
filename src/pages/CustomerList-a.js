/* eslint-disable */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Breadcrumbs,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  Grid
} from '@material-ui/core';
import CustomerListResults from 'src/components/customer-a/CustomerListResults';
import CustomerListToolbar from 'src/components/customer-a/CustomerListToolbar';
import customers from 'src/__mocks__/customers';
import DateTimePicker from 'src/components/DateTimePicker';
import Select from 'src/components/Select';

const CustomerList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Demo</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit" style={{ fontSize: 14 }}>
              Quản lý đơn hàng
            </Typography>
          </Breadcrumbs>
          <CustomerListToolbar />
          <Box sx={{ textAlign: 'right', pt: 3 }}>
            <Button
              variant="contained"
              style={{ fontSize: 14 }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              PDF
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              style={{ fontSize: 14 }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              CSV
            </Button>
          </Box>
          <Box sx={{ pt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
          <Dialog
            onClose={() => {
              setIsOpen(false);
            }}
            aria-labelledby="simple-dialog-title"
            open={isOpen}
            fullWidth
          >
            <DialogTitle id="simple-dialog-title">Xuất file</DialogTitle>
            <Grid
              container
              spacing={3}
              style={{ width: '90%', margin: 'auto', marginBottom: '60px' }}
            >
              <Grid item xs={6}>
                <DateTimePicker />
              </Grid>
              <Grid item xs={6}>
                <DateTimePicker />
              </Grid>
              <Grid item xs={12}>
                <Select
                  options={[
                    { label: 'Chọn nha khoa', value: 1 },
                    { label: 'Nha khoa A', value: 1 },
                    { label: 'Nha khoa B', value: 1 }
                  ]}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'right' }}>
                <Button
                  size="small"
                  style={{
                    textTransform: 'none',
                    fontSize: 14,
                    backgroundColor: 'silver'
                  }}
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    setIsOpen(false);
                  }}
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
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Lưu
                </Button>
              </Grid>
            </Grid>
          </Dialog>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
