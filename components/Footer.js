import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="left-0 w-full sticky bottom-0 clear-both top-[100%]">
            <div className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image src="/logo.jpeg" alt="logo" width="30rem" height="30rem" />
                            <span className="ml-3 text-xl">Codes Guide</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">A Place to get all guides</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="footer-category-head">Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="/" className="footer-link">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="footer-link">About</Link>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="footer-category-head">Contacts</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="mailto:basicfunda.dev@gmail.com" className="footer-link email-link">basicfunda.dev@gmail.com</Link>
                                </li>
                                <li>
                                    {/* <Link href="/" className="footer-link">Fiverr</Link> */}
                                </li>

                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left"> <Link href="https://github.com/codes-guide-youtube/codes-guide" rel="noopener noreferrer" className="text-gray-600 ml-1"><a target={'_blank'}>© 2022 Codes Guide Github</a></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer