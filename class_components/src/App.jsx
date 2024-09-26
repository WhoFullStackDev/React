import React from "react";

class Car extends React.Component {
  //Component Constructor
  constructor(props) {
    super(props);
    //Creating the state Object
    this.state = {
      brand: "Ford",
      model: "Mustang gt",
      color: "red",
      year: 1964,
      show: true,
    };
  }

  // Changing the state Object
  changeColor = () => {
    this.setState({ color: "blue" });
  };

  // getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.model };
  }

  // componentDidMount
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 1000);
  }

  //getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    return { model: props.model };
  }

  // shouldComponentUpdate
  shouldComponentUpdate() {
    return true;
  }

  // getSnapshotBeforeUpdate;
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.color;
  }

  // componentDidUpdate;
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.color;
  }

  // componentWillUnmount;
  delHeader = () => {
    this.setState({ show: false });
  };
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }

    return (
      //  <h2>Hi, I am a {this.state.color} Car!</h2>
      // <h2>I am a {this.props.model}!</h2>
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          changeColor
        </button>
        <h1>My Favorite Car is {this.state.model}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default Car;
