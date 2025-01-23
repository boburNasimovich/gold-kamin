import React, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Okompane from './pages/Okompane'
import UslugePage from './pages/UslugePage'
import KatalogPage from './pages/KatalogPage'
import VidOtdelkiPage from './pages/VidOtdelkiPage'
import PriceList from './pages/PriceList'
import NashiRaboti from './pages/NashiRaboti'
import Aksiyalar from './pages/Aksiyalar'
import PageNotFound from './pages/PageNotFound'
import Kontakt from './pages/Kontakt'
import DetailPage from './pages/DetailPage'
import TolovShartlariPage from './pages/TolovShartlariPage'
import TolovUsullariPage from './pages/TolovUsullariPage'
import OtzivONas from './pages/OtzivONas'
import FotoGalereya from './pages/FotoGalereya'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout openModal={openModal} setOpenModal={setOpenModal} />}>
        <Route path='/' element={<Home setOpenModal={setOpenModal} />} />
        <Route path='/Okompane' element={<Okompane />} />
        <Route path='/UslugePage' element={<UslugePage />} />
        <Route path='/KatalogPage' element={<KatalogPage />} />
        <Route path='/VidOtdelkiPage' element={<VidOtdelkiPage />} />
        <Route path='/PriceList' element={<PriceList />} />
        <Route path='/NashiRaboti' element={<NashiRaboti />} />
        <Route path='/Aksiyalar' element={<Aksiyalar />} />
        <Route path='/Kontakt' element={<Kontakt />} />
        <Route path='/TolovShartlariPage' element={<TolovShartlariPage />} />
        <Route path='/TolovUsullariPage' element={<TolovUsullariPage />} />
        <Route path='/OtzivONas' element={<OtzivONas />} />
        <Route path='/FotoGalereya' element={<FotoGalereya />} />
        <Route path='/:nomi' element={<DetailPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App