import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const TotalProfit = (props) => (
  <Card sx={{ height: '100%', borderRadius: 2 }} {...props}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Avatar
          sx={{
            backgroundColor: indigo[600],
            height: 56,
            width: 56
          }}
        >
          <AttachMoneyIcon />
        </Avatar>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="h2"
          style={{ fontWeight: 'bold', color: '#000' }}
        >
          0
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="h6"
          style={{ fontWeight: 'bold', color: '#000' }}
        >
          Đơn sửa
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TotalProfit;
