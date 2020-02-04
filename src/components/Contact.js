import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.online
    };
  }

  render() {
    const eventForOnClick = () => {
      const newstatus = !this.state.status;
      this.setState({ status: newstatus });
    };
    return (
      <div className="Contact">
        <img src={this.props.avatar} className="avatar" alt={this.props.name} />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <div
              className={this.state.status ? "status-online" : "status-offline"}
              onClick={eventForOnClick}
            ></div>
            <p className="status-text">
              {this.props.online ? "online" : "offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
