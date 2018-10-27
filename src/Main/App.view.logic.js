import { comparison, stats } from './comparison.json'
import App from './App.view.js'
import React from 'react'

export default class AppLogic extends React.Component {
  render() {
    return <App {...this.props} comparison={comparison} {...stats} />
  }
}
