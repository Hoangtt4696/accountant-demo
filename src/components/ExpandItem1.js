/* eslint-disable */
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Select from './Select';
import TextField from './TextField';

const ExpandItem = (props) => {
  const [isOpenSelection, setIsOpenSelection] = useState(true);

  return (
    <>
      <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
        <span>{props.title}</span>
        {isOpenSelection ? (
          <ExpandLess
            onClick={() => setIsOpenSelection(!isOpenSelection)}
            style={{ fontSize: 20 }}
          />
        ) : (
          <ExpandMore
            onClick={() => setIsOpenSelection(!isOpenSelection)}
            style={{ fontSize: 20 }}
          />
        )}
      </Grid>
      {isOpenSelection && (
        <>
          <Grid item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value="10a"
              disabled={props.isDisabled}
            />
          </Grid>
          <Grid item xs={3}>
            <Select
              options={[{ label: 'BCN', value: 1 }]}
              defaultValue={1}
              disabled={props.isDisabled}
            />
          </Grid>
          <Grid item xs={3}>
            <Select
              options={[{ label: 'Nguyễn Văn A', value: 1 }]}
              defaultValue={1}
              disabled={props.isDisabled}
            />
          </Grid>
          <Grid item xs={3}>
            <Select
              options={[{ label: 'OK', value: 1 }]}
              defaultValue={1}
              disabled={props.isDisabled}
            />
          </Grid>
        </>
      )}
    </>
  );
};

export default ExpandItem;
