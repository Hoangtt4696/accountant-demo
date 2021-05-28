/* eslint-disable */

import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Dialog,
  DialogTitle,
  Grid,
  Button,
  Divider,
} from '@material-ui/core';
import TextField from '../TextField';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const [isOpen, setIsOpen] = useState(false);

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
                <TableCell style={getStyle(70)}>STT</TableCell>
                <TableCell style={getStyle(200)}>Ngày nhận</TableCell>
                <TableCell style={getStyle(100)}>Mã đơn hàng</TableCell>
                <TableCell style={getStyle(110)}>Đơn chỉnh sửa</TableCell>
                <TableCell style={getStyle(200)}>Tên nha khoa</TableCell>
                <TableCell style={getStyle(200)}>Tên bệnh nhân</TableCell>
                <TableCell style={getStyle(100)}>Vị trí</TableCell>
                <TableCell style={getStyle(300)}>Diễn giải chỉ định</TableCell>
                <TableCell style={getStyle(100)}>Số lượng</TableCell>
                <TableCell style={getStyle(100)}>Thành tiền</TableCell>
                <TableCell style={getStyle(200)}>Ngày giao</TableCell>
                <TableCell style={getStyle(150)}>Trạng thái</TableCell>
                <TableCell style={getStyle(150)} />
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer, idx) => (
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
                  <TableCell style={getStyle(70)}>{idx + 1}</TableCell>
                  <TableCell style={getStyle(200)}>
                    {customer.receiveDate}
                  </TableCell>
                  <TableCell style={getStyle(100)}>{customer.id}</TableCell>
                  <TableCell
                    style={{
                      ...getStyle(110),
                      textAlign: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    -
                  </TableCell>
                  <TableCell style={getStyle(200)}>
                    {customer.dentistry}
                  </TableCell>
                  <TableCell style={getStyle(200)}>
                    {customer.name}
                  </TableCell>
                  <TableCell style={getStyle(100)}>
                    {customer.position}
                  </TableCell>
                  <TableCell style={getStyle(300)}>
                    {customer.description}
                  </TableCell>
                  <TableCell style={getStyle(100)}>{customer.count}</TableCell>
                  <TableCell style={{ ...getStyle(100), color: 'blue', cursor: 'pointer' }}><span onClick={() => { setIsOpen(true) }}>Nhập</span></TableCell>
                  <TableCell style={getStyle(100)}>
                    {customer.releaseDate}
                  </TableCell>
                  <TableCell style={{ ...getStyle(150), color: 'red' }}>
                    Chờ gia công
                  </TableCell>
                  <TableCell
                    style={{
                      ...getStyle(150),
                      verticalAlign: 'center'
                    }}
                  >
                    <Link to="/app-2/orders-detail-1">
                      <FontAwesomeIcon
                        icon={faFileAlt}
                        style={{ color: '#aeb7c6', fontSize: 15, cursor: 'pointer' }}
                      />
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/app-2/orders-detail-3">
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        style={{ color: '#aeb7c6', fontSize: 15, cursor: 'pointer' }}
                      />
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      style={{ color: '#ff6151', fontSize: 15, cursor: 'pointer' }}
                    />
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
      <Dialog
        onClose={() => {
          setIsOpen(false);
        }}
        aria-labelledby="simple-dialog-title"
        open={isOpen}
        fullWidth
      >
        <DialogTitle id="simple-dialog-title" style={{ fontWeight: 'bold', fontSize: 16 }}>Nhập giá tiền</DialogTitle>
        <Divider />
        <Grid
          container
          spacing={3}
          style={{ width: '90%', margin: 'auto', marginBottom: '30px' }}
        >
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <TextField defaultValue="" type="number" size="small" style={{ width: '80%' }} />
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
              Nhập
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
