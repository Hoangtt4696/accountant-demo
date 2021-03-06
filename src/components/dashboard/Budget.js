/* eslint-disable */
import React from 'react';
import { Avatar, Box, Card, CardContent, Typography } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
// import { red } from '@material-ui/core/colors';

const Budget = (props) => (
  <Card sx={{ height: '100%', borderRadius: 2 }} {...props}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Avatar
          sx={{
            // backgroundColor: red[600],
            backgroundColor: '#424242',
            height: 56,
            width: 56
          }}
        >
          <MoneyIcon />
        </Avatar>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="h2"
          style={{ fontWeight: 'bold', color: '#000' }}
        >
          50
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="h6"
          style={{ fontWeight: 'bold', color: '#000' }}
        >
          Tổng đơn hàng
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Budget;
