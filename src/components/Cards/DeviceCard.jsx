import React, { useState } from 'react';
import Switch from '../Switch';
import { DeviceFooter } from './atoms';
import './styles.css';

function DeviceCard({ name, model, locked }){

  const [isLocked, setLocked] = useState( locked === "locked" ? true : false );

  const save = (model) => {
    let data = !isLocked ? "locked" : "unlocked"
    localStorage.setItem(model, data)
  }

  return (
    <div style={{ padding: '10px 0' }}>
      <div className="card-container">
        <div className="circle-icon"/>
        <div className="info-container">
          <div style={{ padding: '10px 0' }}>
            <h2 style={{ marginBottom: 0 }}>
              {name}
            </h2>
            <span style={{ opacity: '0.5' }}>
              {model}
            </span>
          </div>
          <div className="switch-container">
            <Switch
              locked={isLocked}
              updateLock={() => {
                setLocked(!isLocked)
                save(model)
              }} />
            <DeviceFooter locked={isLocked} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceCard;
