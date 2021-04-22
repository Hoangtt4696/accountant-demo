import { useState } from 'react';
import { Edit, DeleteOutline, ViewModule } from '@material-ui/icons';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const getStyle = (maxWidth) => ({
  maxWidth,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
});

const CustomerListResults = ({ customers, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table style={{ overflowX: 'scroll' }}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell style={getStyle(100)}>Mã đơn hàng</TableCell>
                <TableCell style={getStyle(100)}>Loại đơn hàng</TableCell>
                <TableCell style={getStyle(200)}>Tên nha khoa</TableCell>
                <TableCell style={getStyle(200)}>Tên bệnh nhân</TableCell>
                <TableCell style={getStyle(150)}>Ngày nhận</TableCell>
                <TableCell style={getStyle(100)}>Thời gian nhận</TableCell>
                <TableCell style={getStyle(150)}>Ngày giao</TableCell>
                <TableCell style={getStyle(100)}>Thời gian giao</TableCell>
                <TableCell style={getStyle(300)}>Diễn giải chỉ định</TableCell>
                <TableCell style={getStyle(70)}>Số lượng</TableCell>
                <TableCell style={getStyle(100)}>Màu</TableCell>
                <TableCell style={getStyle(70)}>File</TableCell>
                <TableCell style={getStyle(150)}>
                  Ghi chú
                </TableCell>
                <TableCell style={getStyle(150)}>Trạng thái</TableCell>
                <TableCell style={getStyle(150)}>Ngày hoàn thành</TableCell>
                <TableCell style={getStyle(100)}>Thời gian hoàn thành</TableCell>
                <TableCell style={getStyle(150)}>Bộ phận</TableCell>
                <TableCell style={getStyle(200)}>Nhân viên</TableCell>
                <TableCell style={getStyle(150)}>Tiền công</TableCell>
                <TableCell style={getStyle(200)} />
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell style={getStyle(100)}>{customer.id}</TableCell>
                  <TableCell style={{ ...getStyle(100), color: '#52a1f1', fontWeight: 'bold' }}>{customer.type}</TableCell>
                  <TableCell style={getStyle(200)}>
                    {customer.dentistry}
                  </TableCell>
                  <TableCell style={getStyle(200)}>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                        style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell style={getStyle(150)}>
                    {customer.receiveDate}
                  </TableCell>
                  <TableCell style={getStyle(100)}>
                    {customer.receiveTime}
                  </TableCell>
                  <TableCell style={getStyle(150)}>
                    {customer.releaseDate}
                  </TableCell>
                  <TableCell style={getStyle(100)}>
                    {customer.releaseTime}
                  </TableCell>
                  <TableCell style={getStyle(300)}>
                    {customer.description}
                  </TableCell>
                  <TableCell style={getStyle(70)}>{customer.count}</TableCell>
                  <TableCell style={{ ...getStyle(100), color: 'green' }}>{customer.color}</TableCell>
                  <TableCell style={{ ...getStyle(70), fontWeight: 'bold', color: '#25e2f6' }}>Xem</TableCell>
                  <TableCell style={getStyle(150)}>{customer.note}</TableCell>
                  <TableCell style={{ ...getStyle(150), color: 'red' }}>Chờ gia công</TableCell>
                  <TableCell style={getStyle(150)}>{customer.finishDate}</TableCell>
                  <TableCell style={getStyle(100)}>{customer.finishTime}</TableCell>
                  <TableCell style={getStyle(150)}>{customer.department}</TableCell>
                  <TableCell style={getStyle(200)}>{customer.employee}</TableCell>
                  <TableCell style={getStyle(150)}>{customer.wage}</TableCell>
                  <TableCell
                    style={{
                      ...getStyle(200),
                      verticalAlign: 'center'
                    }}
                  >
                    <ViewModule />
                    &nbsp; &nbsp;
                    <Edit />
                    &nbsp; &nbsp;
                    <DeleteOutline />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
