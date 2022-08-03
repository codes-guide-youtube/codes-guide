import Link from 'next/link'
import React from 'react'

const contact = () => {
  return (
    <div>
        <div>
            Email: <span className="underline text-gray-800 font-bold decoration-teal-600"><Link href="mailto:basicfunda.dev@gmail.com">basicfunda.dev@gmail.com</Link></span>
        </div>
        <div>
            Fiverr Profile link : coming soon
        </div>
    </div>
  )
}

export default contact