import React from 'react'

export default class Tooltip extends React.Component {
  state = {
    isShowingTooltip: false,
    left: 0,
  }

  componentDidMount() {
    if (this.refContainer.current) {
      this.setState({
        left: this.refContainer.current.offsetLeft,
      })
    }
  }

  timeout = null

  onMouseEnter = () => {
    this.timeout = setTimeout(() => {
      if (!this.timeout) {
        return
      }

      this.setState({ isShowingTooltip: true })
      this.timeout = null
    }, 100)
  }

  onMouseMove = () => {
    if (this.state.isShowingTooltip) return

    this.onMouseEnter()
  }

  onMouseLeave = () => {
    if (this.timeout) {
      this.timeout = null
      return
    }
    this.setState({ isShowingTooltip: false })
  }

  refContainer = React.createRef()

  render() {
    return this.props.children({
      isShowingTooltip: this.state.isShowingTooltip,
      left: this.state.left,
      top: this.state.top,
      onMouseEnter: this.onMouseEnter,
      onMouseMove: this.onMouseMove,
      onMouseLeave: this.onMouseLeave,
      refContainer: this.refContainer,
    })
  }
}
