import Mark from './Mark.view.js'
import React from 'react'

const MarkLogic = ({ mark, ...props }) => (
  <Mark
    {...props}
    yes={mark === true}
    no={mark === false}
    na={typeof mark === 'undefined'}
  />
)
export default MarkLogic
