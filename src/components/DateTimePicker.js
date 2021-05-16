/* eslint-disable */
import React from 'react';
import TextField from '../components/TextField';
// import TextField from '@material-ui/core/TextField';
import DateTime from '@material-ui/lab/DateTimePicker';
import AdapterMoment from '@material-ui/lab/AdapterMoment';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DateTimePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTime
        renderInput={(inputProps) => (
          <TextField fullWidth size="small" {...inputProps} helperText="" />
        )}
        {...props}
        openPickerIcon={
          <FontAwesomeIcon
            icon={faCalendarAlt}
            style={{ fontSize: 17, color: '#c4c4c4' }}
          />
        }
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
