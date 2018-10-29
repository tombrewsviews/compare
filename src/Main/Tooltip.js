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

  onMouseEnter = () => {
    this.setState({ isShowingTooltip: true })
  }

  onMouseMove = () => {
    if (this.state.isShowingTooltip) return

    this.onMouseEnter()
  }

  onMouseLeave = () => {
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
