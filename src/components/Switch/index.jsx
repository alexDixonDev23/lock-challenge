import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#d86f52',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function SwitchToggle({ locked, updateLock }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FormGroup>
        <FormControlLabel
          control={
            <IOSSwitch
              checked={locked}
              onChange={() => updateLock()}
            />
          }
        />
      </FormGroup>
    </div>
  );
};

export default SwitchToggle;
