import React from 'react';
import Welcome from './Welcome';
import Timer from './Timer';

const App = () =>
  (
    <div>
      <Welcome name="World" />
      <Timer />
    </div>
  );

module.exports = App;
