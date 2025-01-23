import React, { useState } from 'react';

const TolovUsullari = () => {
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);

  const toggleAccordion1 = () => {
    setAccordion1Open(!accordion1Open);
  };

  const toggleAccordion2 = () => {
    setAccordion2Open(!accordion2Open);
  };

  return (
    <div className='w-full max-w-[1440px] mx-auto pb-24 '>
      <h2 className='text-4xl font-bold my-10'>To'lov usullari</h2>

      <div className='border-y border-black p-4 mb-4'>
        <div
          className='flex justify-between items-center cursor-pointer'
          onClick={toggleAccordion1}
        >
          <h3 className='text-2xl font-bold'>Tog'lar so'zidan uzoqroqda</h3>
          <span className='text-3xl'>{accordion1Open ? '-' : '+'}</span>
        </div>
        {accordion1Open && (
          <div className='p-4'>
            <p className='text-2xl'>Hammadan ajralib, ular katta til okeani bo'lgan Semantika qirg'og'idagi tom ma'nodagi uylarda yashaydilar. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi.</p>
          </div>
        )}
      </div>

      <div className='border-y border-black p-4'>
        <div
          className='flex justify-between items-center cursor-pointer'
          onClick={toggleAccordion2}
        >
          <h3 className='text-2xl font-bold'>Buyuk Oksmoks</h3>
          <span className='text-3xl'>{accordion2Open ? '-' : '+'}</span>
        </div>
        {accordion2Open && (
          <div className='p-4'>
            <p className='text-2xl'>Men uni yomon vergullar, yovvoyi savol belgilari va yolg'on Semikoli haqida ogohlantirdim, lekin matn uning joyidan siljishiga imkon bermadi. U yettita bosh harfini yig‘ib, bosh harfini belbog‘iga solib, yo‘lda o‘zini tutdi.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TolovUsullari;