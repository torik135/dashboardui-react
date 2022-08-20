import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { Navitem } from '../../components/Navitem';
import { Profile } from '../../components/Profile';
import { Lokasi } from '../../components/Lokasi';
import { AkunBank } from '../../components/AkunBank';
import { Relasi } from '../../components/Relasi';
import { Aktivitas } from '../../components/Aktivitas';

import { FaAtlassian as LogoIcon } from 'react-icons/fa';

import navData from '../../data/navData';

const Mainlayout = () => {
  return (
    <div className='flex flex-row gap-[1rem] mr-3'>
      {/* nav */}
      <Nav logo={<LogoIcon />}>
        {navData.map((item) => (
          <Navitem linkItem={item.icon} key={Math.random()} />
        ))}
      </Nav>

      <div className='w-[100vw]'>
        {/* header */}
        <Header text='Perusahaan' perusahaan='Mitramas' />
        {/* content */}
        <div className='flex gap-[2rem]'>
          {/* left */}

          <Profile
            namaPerusahaan='Mitramas Infosys Global'
            servicePerusahaan='Layanan IT'
          />

          {/* right */}
          <div className='flex gap-[2rem]'>
            <div className='flex flex-col gap-[2rem]'>
              <Lokasi indukLen={20} Sublvl1Len={1} Sublvl2Len={3} />

              <div className='flex flex-row gap-[2rem]'>
                <div className='flex flex-col gap-[2rem]'>
                  <AkunBank />
                  <Relasi />
                </div>

                <Aktivitas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Mainlayout };
