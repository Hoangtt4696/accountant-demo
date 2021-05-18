import {
  Avatar,
  Box,
  Card,
  CardContent,
  // LinearProgress,
  Typography
} from '@material-ui/core';
// import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const TasksProgress = (props) => (
  <Card sx={{ height: '100%', borderRadius: 2 }} {...props}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Avatar
          sx={{
            // backgroundColor: orange[600],
            backgroundColor: '#424242',
            height: 56,
            width: 56
          }}
        >
          <InsertChartIcon />
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
          Đơn gấp
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TasksProgress;
