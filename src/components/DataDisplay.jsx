import React from 'react';


const DataDisplay = ({ participants }) => {
  return (
    <div>
      <h2>Participants and Their Info</h2>
      <div className="data-container">
        {[...Array(50).keys()].map((i) => {
          const participant = participants[i];
          
          
          return (
            <div key={i}>
              <h3>Button {i + 1}</h3>
              {participant ? (
                <div>
                  <p>Name: {participant.name}</p>
                  <p>Phone: {participant.phone}</p>
                </div>
              ) : (
                <p>No participant selected</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataDisplay;
