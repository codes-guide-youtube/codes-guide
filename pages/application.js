import  Head  from 'next/head'
import Image from 'next/image'
import React from 'react'
import AppContainer from '../components/applications/AppContainer'
import MsgTitle from '../components/applications/MsgTitle'

const application = () => {
  return (
    <div>
        <Head>
            <title>Applications</title>
        </Head>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Application tracker</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Keep track of our upcoming applications</p>
      </div>
      <div className="justify-center mx-auto">
        <h1>Pending Applications {`(Work not started, an idea)`}</h1>
      <div className="flex flex-col md:flex-row overflow-x-scroll">
      <MsgTitle msg={'No pending idea'} />
    </div>
    </div>
      <div className="justify-center mx-auto">
        <h1>In progress</h1>
      <div className="flex flex-col md:flex-row overflow-x-scroll">
      <AppContainer image="https://ik.imagekit.io/codesguide/tail-comp/tail-comp-logo.png" name="Tail-Comp" framework="Next.JS" details={'Get all Tailwind CSS components from here. All components are responsive.'} />
    </div>
    </div>
      <div className="justify-center mx-auto">
        <h1>Finished</h1>
      <div className="flex flex-col md:flex-row overflow-x-scroll">
      <MsgTitle msg={'No other application finished'} />
    </div>
    </div>
      <div className="justify-center mx-auto">
        <h1>Discarded {`(If the application discarded time is more than 30 days, it will not show up here)`}</h1>
      <div className="flex flex-col md:flex-row overflow-x-scroll">
     <MsgTitle msg={'No application idea discarded'} />
    </div>
    </div>
    </div>
  </section>
\
  </div>
  )
}

export default application