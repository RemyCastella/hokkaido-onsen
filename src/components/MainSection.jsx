import React from 'react';

export default function MainSection(props) {
  return (
    <section>
      <div className="card">
        <img src={props.img} alt="onsen image" className="onsen-image" />
        <div className="onsen-info">
          <h2 className="onsen-name">{props.name}</h2>
          <p className="onsen-location">{props.location}</p>
          <p className="onsen-type">泉質: {props.type}</p>
          <p className="onsen-description">{props.char}</p>
        </div>
      </div>
    </section>
  );
}
