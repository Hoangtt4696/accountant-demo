import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import customers from '../../__mocks__/customers';

const getStyle = (maxWidth) => ({
  maxWidth,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
});

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Danh sách đơn hàng hôm nay" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table style={{ overflowX: 'scroll' }}>
          <TableHead>
            <TableRow>
              <TableCell style={getStyle(100)}>Mã đơn hàng</TableCell>
              <TableCell style={getStyle(100)}>Loại đơn hàng</TableCell>
              <TableCell style={getStyle(200)}>Tên nha khoa</TableCell>
              <TableCell style={getStyle(150)}>Ngày giao</TableCell>
              <TableCell style={getStyle(100)}>Thời gian giao</TableCell>
              <TableCell style={getStyle(150)}>Trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.slice(0, 10).map((customer) => (
              <TableRow>
                <TableCell style={getStyle(100)}>{customer.id}</TableCell>
                <TableCell
                  style={{
                    ...getStyle(100),
                    color: '#52a1f1',
                    fontWeight: 'bold'
                  }}
                >
                  {customer.type}
                </TableCell>
                <TableCell style={getStyle(200)}>
                  {customer.dentistry}
                </TableCell>
                <TableCell style={getStyle(150)}>
                  {customer.releaseDate}
                </TableCell>
                <TableCell style={getStyle(100)}>
                  {customer.releaseTime}
                </TableCell>
                <TableCell style={{ ...getStyle(150), color: 'red' }}>
                  Chờ gia công
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
