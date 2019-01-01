import React from "react";
import { connect } from "react-redux";
import { fetchUserData } from "./redux/modules/user-data/actions";
import "./style.css";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUserData("1");
  }
  render() {
    return (
      <div>
        <pre>// mocking async fetch via promises</pre>
        {this.props.loading && <h3>loading...</h3>}
        {this.props.error && <h3>error: {this.props.error}</h3>}
        {this.props.userName && <h2>userName: {this.props.userName}</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.userData.userName,
  loading: state.userData.loading,
  error: state.userData.error
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userId => dispatch(fetchUserData(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
