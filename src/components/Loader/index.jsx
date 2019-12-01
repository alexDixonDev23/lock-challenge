import React from 'react';
import './styles.css';

const Loader = () => (
  <div style={{ padding: '10px 0' }}>
    <div style={{ textAlign: 'center' }}>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
)

export default Loader;
