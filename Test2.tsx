import * as React from 'react';

interface IProps {}

class Test extends React.Component<IProps> {
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
