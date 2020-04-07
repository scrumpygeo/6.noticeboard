import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

class GoogleAuth extends Component {
  // state = { isSignedIn: null }; - removed because redux holding state henceforth

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); - refactored when changing from comp-level stat to redux-l-s
          this.onAuthChange(this.auth.isSignedIn.get()); // pass in current signed-in state
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); no longer need component level state keeping track of signed in status so remove.
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div className='btn btn-success' onClick={this.onSignOutClick}>
          <i className='fab fa-google pr-2'> </i>
          Sign Out
        </div>
      );
    } else {
      return (
        <div className='btn btn-danger' onClick={this.onSignInClick}>
          <i className='fab fa-google pr-2'> </i>
          Sign In With Google
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

// send auth status in redux back to googleauth:
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
