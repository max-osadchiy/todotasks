import React from 'react'
import { bool, node, func } from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
       className="waves-effect waves-light btn"
    >
      {children}
    </button>
)

Link.propTypes = {
  active: bool.isRequired,
  children: node.isRequired,
  onClick: func.isRequired
}

export default Link
