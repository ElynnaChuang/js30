import { useState } from 'react';
import { Speed } from '@mui/icons-material';
import { Popover, Typography } from '@mui/material';

import styles from './styles.module.scss';

const speedOptions = [
  { id: 1, speed: 0.5 },
  { id: 2, speed: 1 },
  { id: 3, speed: 1.5 },
  { id: 4, speed: 2 },
  { id: 5, speed: 5 },
];

export const SpeedBtn = ({ currentSpeed, onSpeedChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSpeedChange = value => {
    onSpeedChange?.(value);
    setAnchorEl(null);
  };

  return (
    <div>
      <button className={styles.icon_btn} onClick={handleClick}>
        <Speed />
      </button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography className={styles.speed_list}>
          {speedOptions.map(option => {
            const className =
              option.speed === currentSpeed
                ? styles.speed_option_active
                : styles.speed_option;
            return (
              <button
                key={option.id}
                className={className}
                onClick={() => handleSpeedChange(option.speed)}
              >
                {option.speed} X
              </button>
            );
          })}
        </Typography>
      </Popover>
    </div>
  );
};
