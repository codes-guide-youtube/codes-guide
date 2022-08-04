
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
const contact = () => {
  return (
    <div className="text-center w-full">
        <div className="email">
            Email: <span className="email-link"><Link href="mailto:basicfunda.dev@gmail.com">basicfunda.dev@gmail.com</Link></span>
        </div>
        <div className="fiverr">
            Fiverr Profile link : <span className="fiverr-link">Coming Soon</span>
        </div>
    </div>
  )
}

export default contact