import React, { useState, useEffect } from 'react';
import Card from '../../components/Cards/UserCard';
import Loader from '../../components/Loader';
import moment from 'moment';

function Users(){

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5d3c29c135e3f814032b5d2b')
    .then((res) => res.json())
    .then(({ data }) => {
      let state = []
      data.map(({ attributes }) => {
        let name = attributes.name;
        let email = attributes.email;
        let status = attributes.status;
        let start = Date.parse(attributes.starts_at) || null
        let end = Date.parse(attributes.ends_at);
        let startDate = start && moment(start).format("MMM Do, hh:mm");
        let endDate = moment(end).format("MMM Do, hh:mm")
        return state.push({ name, email, status, startDate, endDate })
      })
      setState(state)
    })
  }, []);

  return (
    <div className="view-container">
      <div>
        {
          state.length > 0 ?
          state.map((x,i) => (
            <Card
              key={i}
              name={x.name}
              email={x.email}
              status={x.status}
              startDate={x.startDate}
              endDate={x.endDate}
              />
          )) :
          <Loader />
        }
      </div>
    </div>
  );
};

export default Users;
