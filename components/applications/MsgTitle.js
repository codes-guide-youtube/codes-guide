import React from 'react'

const MsgTitle = (props) => {
  return (
    <div>
        <h1 className="font-serif font-semibold text-3xl my-5">{props.msg}</h1>
    </div>
  )
}

export default MsgTitle