/* eslint-disable */
import React from 'react';
import { Box, Button, Card, CardContent } from '@material-ui/core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import TextField from './TextField';

const Input = (props) => (
  <TextField
    placeholder={props.searchPlaceholder}
    variant="outlined"
    size="small"
    fullWidth
    inputProps={{
      style: {
        border: 'none',
        fontSize: 14,
        backgroundColor: '#E9EFF6',
        padding: '13px 20px',
        borderRadius: 7
      }
    }}
    InputProps={{ classes: props.classes }}
  />
);

const TextFieldUI = withStyles(() => ({
  notchedOutline: { borderColor: 'transparent !important' }
}))(Input);

const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box sx={{ mt: 3 }}>
      <Card style={{ borderRadius: 10 }}>
        <CardContent style={{ padding: 30 }}>
          <p style={{ fontSize: 18, marginBottom: '10px' }}>
            Nhập từ khoá tìm kiếm
          </p>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <TextFieldUI searchPlaceholder={props.searchPlaceholder} />
            <Box
              sx={{
                minWidth: 100,
                textAlign: 'left',
                pl: 2
              }}
            >
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                style={{ color: '#aeb7c6', fontSize: 25 }}
              />
            </Box>
            <Button
              color="primary"
              href="/app/create-order-1"
              variant="contained"
              size="small"
              style={{
                fontSize: 14,
                minWidth: 130,
                padding: '10px 0',
                borderRadius: 8,
                textTransform: 'none'
              }}
            >
              Tìm kiếm
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default CustomerListToolbar;
