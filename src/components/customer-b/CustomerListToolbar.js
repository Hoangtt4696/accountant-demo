import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItem: 'center'
          }}
        >
          <TextField
            style={{ maxWidth: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            placeholder="Tìm theo mã đơn hàng"
            variant="outlined"
          />
          <Button color="primary" href="/app/create-order-2" variant="contained">
            Tạo đơn hàng
          </Button>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default CustomerListToolbar;
