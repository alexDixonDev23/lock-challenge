import React from 'react';

const styles = {
  icon: {
    margin: 'auto',
    padding: '0 20px',
  },
  locked: {
    color: 'green'
  },
  unlocked: {
    color: 'red'
  }
};

export const LockedIcon = () => (
  <i style={styles.icon}
     className="fas fa-lock" />
 );

export const UnlockedIcon = () => (
 <i style={styles.icon}
    className="fas fa-unlock-alt" />
);

export const DeviceFooter = ({ locked }) => (
  <div className="lock-text"
    style={locked ? styles.locked : styles.unlocked}>
    { locked ? <LockedIcon /> : <UnlockedIcon /> }
    <p>
      {locked ? "Locked" : "Unlocked"}
    </p>
  </div>
);

export const UserFooter = ({ status }) => (
  <div style={{ paddingRight: '15px' }}>
    <div>
      <p className="status-text"
         style={ status === 'current' ?
               { background: '#79f263' } :
               { background: '#f5df64' }}>
         {status.toUpperCase()}
      </p>
    </div>
  </div>
);
