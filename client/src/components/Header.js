import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {

    switch (this.props.auth) {
      case null:
        return;
      case false:
        return
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
      default:
        return <li><a>Logout</a></li>;
    }
  }


  render() {
    return (
      <div>
        <nav
          className={[
            "navbar",
            "navbar-expand-lg",
            "navbar-dark",
            "bg-primary"
          ].join(" ")}
        >
          <a className="navbar-brand" href="#">
            Emaily
          </a>
          <ul className="navbar-nav">{this.renderContent()}</ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(null, mapStateToProps)(Header);
