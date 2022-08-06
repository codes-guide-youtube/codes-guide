import React from 'react'

const MsgTitle = (props) => {
  return (
    <div>
        <h1 className="font-serif font-semibold text-lg my-5">{props.msg}</h1>
    </div>
  )
}

export default MsgTitle