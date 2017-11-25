import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment() {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>Counter: {counter}</div>
      </header>
    );
  }
}
