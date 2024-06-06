import React from 'react'

const Card = ({children}) => {
  return (
    <div className="p-5 overflow-hidden text-xl border-card rounded-xl bg-white/20 backdrop-blur-sm">
        {children}
      </div>
  )
}

export default Card