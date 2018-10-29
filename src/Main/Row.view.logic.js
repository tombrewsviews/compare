import Row from './Row.view.js'
import React from 'react'
import Tooltip from './Tooltip.js'

const RowLogic = props =>
  props.description === '' ? (
    <Row {...props} />
  ) : (
    <Tooltip>{tooltip => <Row {...props} {...tooltip} />}</Tooltip>
  )
export default RowLogic
