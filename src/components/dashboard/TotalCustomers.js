/* eslint-disable */

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const TotalCustomers = (props) => (
  <Card sx={{ height: '100%', borderRadius: 2 }} {...props}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Avatar
          sx={{
            backgroundColor: green[600],
            height: 56,
            width: 56
          }}
        >
          <PeopleIcon />
        </Avatar>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="h2"
          style={{ fontWeight: 'bold', color: '#000' }}
        >
          18
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="h6"
          style={{ fontWeight: 'bold', color: '#000' }}
        >
          Đơn hàng hôm nay
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TotalCustomers;
