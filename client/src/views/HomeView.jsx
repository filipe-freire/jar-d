import React from 'react';

const HomeView = props => {
  return (
    <div>
      <header className="App-header">
        <h1>JAR'D</h1>
        <p>
          Hi! Current loaded state is:{' '}
          <span
            style={
              (props.loaded && {
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: 'limegreen'
              }) || { fontStyle: 'italic', fontWeight: 'bold', color: 'red' }
            }
          >{`${props.loaded}`}</span>
          .
        </p>
      </header>
    </div>
  );
};

export default HomeView;
