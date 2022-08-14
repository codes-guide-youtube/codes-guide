import Head from 'next/head'
import Image from 'next/image'
import CertificateContainer from '../components/CertificateContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Codes Guide</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='overflow-div'>
        <CertificateContainer certificate="https://ik.imagekit.io/codesguide/codes-guide/certificates/apreciation.pdf" name="Certification of Appreciation" category="WhitehatJr" />
        <CertificateContainer certificate="https://ik.imagekit.io/codesguide/codes-guide/certificates/global_math_challenge.pdf" name="Global Math Challenge" category="WhitehatJr" />
        <CertificateContainer certificate="https://ik.imagekit.io/codesguide/codes-guide/certificates/code_of_honour.pdf" name="Code Of Honour" category="WhitehatJr" />
        <CertificateContainer certificate="https://ik.imagekit.io/codesguide/codes-guide/certificates/excel_essentials_sridhar_hisaria.pdf" name="Certificate Of Completion" category="Excel" />
      </div>
    </div>
  )
}
