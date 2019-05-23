import React, { Component } from "react";
import CloseButton from "../CloseButton/CloseButton";
import Fixtures from "../../Pages/Fixtures/Fixtures";
import Standings from "../../Pages/Standings/Standings";
import Squad from "../../Pages/Squad/Squad";
import OldTrafford from "../../Pages/OldTrafford/OldTrafford";
import About from "../../Pages/About/About";

class Modal extends Component {
  render() {
    let component = "";
    switch (this.props.component) {
      case 1:
        component = <Fixtures />;
        break;
      case 2:
        component = <Standings />;
        break;
      case 3:
        component = <Squad />;
        break;
      case 4:
        component = <OldTrafford />;
        break;
      case 5:
        component = <About />;
        break;
      default:
        component = null;
    }

    return (
      <div className="Modal">
        <CloseButton clicked={this.props.clicked} />
        {component}
      </div>
    );
  }
}

export default Modal;
