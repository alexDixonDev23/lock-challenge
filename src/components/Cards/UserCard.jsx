import React from 'react';
import { UserFooter } from './atoms';
import './styles.css';

function UserCard({  email, name, endDate, startDate, status }){
  return (
    <div style={{ padding: '10px 0' }}>
      <div className="card-container">
        <div className="circle-icon"/>
        <div className="info-container">
          <div className="user-info">
            <h2 style={{ marginBottom: 0 }}>
              {name}
            </h2>
            <span style={{ opacity: '0.5' }}>
              {email}
            </span>
            {startDate &&
              <span className="date-range">
                {startDate} {'-'} {endDate}
              </span>}
          </div>
          <div className="user-container">
            <UserFooter
              startDate={startDate}
              endDate={endDate}
              status={status}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard;
