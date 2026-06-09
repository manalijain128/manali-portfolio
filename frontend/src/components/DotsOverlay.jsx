import React from 'react'

const DotsOverlay = ({count = 60}) => {
  const dots = Array.from({length: count}).map((_, i) => {
    const left = Math.random() * 100
    const top = Math.random() * 100
    const size = 3 + Math.random() * 6
    const delay = Math.random() * 8
    const duration = 18 + Math.random() * 20
    const style = {
      left: `${left}%`,
      top: `${top}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      opacity: 0.7
    }
    return <span key={i} className="dot" style={style} />
  })

  return <div className="dots-overlay">{dots}</div>
}

export default DotsOverlay
