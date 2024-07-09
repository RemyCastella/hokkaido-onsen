import React from 'react';

export default function MainSection(props) {
  return (
    <section>
      <div className="card">
        <img src={props.img} alt="onsen image" className="onsen-image" />
        <div className="onsen-info">
          <h2 className="onsen-name">{props.name}</h2>
          <div className="location-type">
            <div className="card-location">
              <svg
                className="location-pin"
                fill="#f55a5a"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="0 0 425.963 425.963"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
                  c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
                  c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
                  C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
                  c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
                  />
                </g>
              </svg>
              <p className="location-text">{props.location}</p>
            </div>
            <p className="type-text">
              <span className="type-intro">泉質:</span> {props.type}
            </p>
          </div>
          <p className="description-text">{props.char}</p>
        </div>
      </div>
    </section>
  );
}
