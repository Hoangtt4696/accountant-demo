/* eslint-disable */
import { TextField as Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  disabled: {
    backgroundColor: '#f1f1f1 !important'
  }
}));

const TextField = (props) => {
  const classes = useStyles();

  return (
    <Input
      {...props}
      inputProps={{
        style: {
          fontSize: 14
        },
        ...props.inputProps
      }}
      InputProps={{
        classes: {
          disabled: classes.disabled
        },
        ...props.InputProps
      }}
      InputLabelProps={{ style: { fontSize: 14 }, ...props.InputLabelProps }}
    />
  );
};

export default TextField;
