import Image from 'next/image'
import React from 'react'
const AppContainer = (props) => {
  return (
    <div>
             
        <div className="md:w-96 w-72 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image class="h-40 rounded w-full object-cover object-center mb-6" width={'720px'} height={'400px'} src="/logo.jpeg" alt="content"/>
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Created with {props.framework}</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.name}</h2>
            <p className="leading-relaxed text-base">{props.details}</p>
        </div>
      </div>
    </div>
  )
}

export default AppContainer