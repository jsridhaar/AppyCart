import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("HomepageProps", this.props)
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
export default HomePage;
