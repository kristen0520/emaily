import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

class Header extends Component {
  renderContent() {
       switch (this.props.auth) {
         case null:
          return;
         case false:
          return <a className="nav-link" href="/auth/google">Login With Google</a>
         default:
          return <a className="nav-link" href="/api/logout">Logout</a>
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
          <Link
          to={this.props.auth ? '/surveys' : '/'} 
            className="navbar-brand">
            Emaily
          </Link>
          <ul className="navbar-nav">{this.renderContent()}</ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
