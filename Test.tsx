import * as React from 'react';

interface IProps {}

interface IState {
  something: number;
}

class Test extends React.Component<IProps, IState> {
  constructor() {
    super();

    this.state = {
      something: 1
    };
  }

  doSomething() {
    this.setState({
      something: 2
    });
  }

  render() {
    return <div/>;
  }
}
