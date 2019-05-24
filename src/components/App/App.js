import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Home from "../Pages/Home/Home";
import Modal from "../Layout/Modal/Modal";

class App extends Component {
  state = {
    showModal: false,
    componentIndex: -1
  };

  openModal = key => {
    this.setState({ showModal: true, componentIndex: key });
  };

  render() {
    return (
      <div className="App">
        <Home clicked={this.openModal} />
        <CSSTransition
          in={this.state.showModal}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Modal
            clicked={() => {
              this.setState({ showModal: false });
            }}
            component={this.state.componentIndex}
          />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
