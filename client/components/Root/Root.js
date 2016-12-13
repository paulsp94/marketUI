import React from 'react'
import Header from 'components/Header/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'styles/main.css';
injectTapEventPlugin()

export default class Root extends React.Component {

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
