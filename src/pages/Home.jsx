import React from 'react'
import Carusel from '../components/Carusel'
import Usluge from '../components/Usluge'
import Vid from '../components/Vid'
import Otdelki from '../components/Otdelki'
import About from '../components/About'
import Cta from '../components/Cta'
import Otziv from '../components/Otziv'
import Ourproject from '../components/Ourproject'
import Maslaxatlar from '../components/Maslaxatlar'
import Partnyor from '../components/Partnyor'

const Home = ({ setOpenModal }) => {
  return (
    <>
      <Carusel setOpenModal={setOpenModal} />
      <Usluge />
      <Vid />
      <Otdelki />
      <About />
      <Cta />
      <Otziv />
      <Ourproject />
      <Maslaxatlar />
      <Partnyor />
    </>
  )
}

export default Home