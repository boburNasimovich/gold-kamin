import React, { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation, } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrump from '../components/BreadCrumb'

const MainLayout = ({ setOpenModal,openModal }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const home = location.pathname == "/";
    const [open, setopen] = useState(false);
    return (
        <>
        <div
        className={`
        ${open ? "w-full " : "w-0"}
           h-full fixed left-0 z-[80] top-0 bg-black/50`}
        onClick={() => setopen(false)}
      >
        {/* open menu  */}
        <div
          className={`${
            open ? " block " : " hidden w-0"} h-full absolute bg-white top-0 z-[70] right-0 transition-all duration-500`}>
            
            <div className="flex  py-3  border-b-4 border-b-header border-dashed">
            <h3 className="mr-64 pl-2">Menyu</h3>
            <button className="font-bold mr-4 absolute right-0">X</button>
          </div>

          <div className="flex flex-col divide-y-2 divide-dashed divide-header py-4 pl-3 space-y-5">
            <Link className="pt-2"  to='/'>Bosh sahifa</Link>
            <Link className="pt-2" to="/Aktsiya">Aksiya</Link>
            <Link className="pt-2" to="/ShifokorlarX">Bizning shifokorlar</Link>
            <Link className="pt-2" to="/barchaxizmatlar">Xizmatlar</Link>
            <Link className="pt-2" to='/kilinikaxaqida'>Klinika xaqida</Link>
            <Link className="pt-2" to='/kontaktlar'>Kontaktlar</Link>
          </div>
        </div>
      </div>
            <Header setOpenModal={setOpenModal}  openModal={openModal}/>
            {/* <Breadcrump/> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout