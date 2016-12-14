import React, {PropTypes} from 'react'
import Header from 'components/Header/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase';
import 'styles/main.css';
injectTapEventPlugin()

class Root extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  getChildContext() {
    return {
      currentUser: this.state.currentUser
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({currentUser: user});
      }
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          <div>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

Root.childContextTypes = {
  /**
   * Holds the current logged in user
   * */
  currentUser: PropTypes.object
};

export default Root;
