/* eslint-disable */
import { Select as SelectMui, FormControl, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const SelectUI = withStyles({
  select: {
    fontSize: '14px !important',
    lineHeight: '1 !important',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis !important'
  },
  icon: { fontSize: '1.2rem !important' },
  disabled: {
    backgroundColor: '#f1f1f1 !important'
  }
})(SelectMui);

const Select = (props) => {
  return (
    <FormControl variant="outlined" style={{ width: '100%' }}>
      <SelectUI
        size="small"
        native
        {...props}
        inputProps={{ fontSize: 14, ...props.inputProps }}
      >
        {props.options.map((item) => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </SelectUI>
    </FormControl>
  );
};

export default Select;
