import React, { Component } from 'react';

class Home extends Component {
  render() {
    const user = {
      firstName: "Ze",
      lastName: "Chen",
      superPower: "handsome"
    }

    return (
      <div>
        <CurrentUser user={user} />
      </div>
    );
  }
}

class CurrentUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    startMounting();
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    endMounting();
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    const user = this.props.user;
    const test = () => {
      // console.log("renderred the component");
      // console.log("Each tick will rerenders the component");
    }

    // test();
    return (
      <div>
        <h1>
          Hi {user.firstName} {user.lastName}, your super power is {user.superPower}!
        </h1>

        <h1>React Version: {React.version}</h1>

        <FormattedDate date={this.state.date} />

        {/* <div>test</div> */}
      </div>
    );
  }
}

const startMounting = () => {
  // console.log("start mounting");
}

const endMounting = () => {
  // console.log("end mounting");
}

const FormattedDate = (props) => {
  // console.log(props);
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default Home;