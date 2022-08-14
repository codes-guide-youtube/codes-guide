import Link from 'next/link'
import React from 'react'

const CertificateContainer = (props) => {
  return (
    <div>
    <a target="_blank">
  <div className="md:w-96 w-72 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <iframe className="h-fit rounded w-full object-cover object-center mb-6" src={props.certificate} alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{props.category}</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.name}</h2>
    </div>
  </div>
  </a>
</div>
  )
}

export default CertificateContainer