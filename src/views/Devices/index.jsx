import React, { useState, useEffect } from 'react';
import Card from '../../components/Cards/DeviceCard';
import Loader from '../../components/Loader';

function Devices(){

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5d3f32d33c07cc1d5d15f422')
    .then((res) => res.json())
    .then(({ data }) => {
      let state = []
      data.map(({ attributes }) => {
        let model = attributes.model_number;
        let name = attributes.name;
        let hasData = localStorage.getItem(model);
        let locked = hasData || attributes.state;
        return state.push({ model, name, locked })
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
              locked={x.locked}
              name={x.name}
              model={x.model}
              />
          )) :
          <Loader />
        }
      </div>
    </div>
  );
};

export default Devices;
