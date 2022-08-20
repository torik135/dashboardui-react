import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { Navitem } from '../../components/Navitem';
import { Profile } from '../../components/Profile';
import { FaAtlassian as LogoIcon } from 'react-icons/fa';

import navData from '../../data/navData';

const Mainlayout = () => {
  return (
    <div className='flex flex-row gap-[1rem]'>
      {/* nav */}
      <div className='p-[1rem] pt-[2.5rem] shadow-md'>
        <Nav logo={<LogoIcon />}>
          {navData.map((item) => (
            <Navitem linkItem={item.icon} key={Math.random()} />
          ))}
        </Nav>
      </div>

      <div className='w-[100vw]'>
        <div className='pt-[1rem]'>
          {/* header */}
          <Header text='perusahaan' perusahaan='Mitramas' />
        </div>

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
              <div>lokasi</div>

              <div className='flex flex-row gap-[2rem]'>
                <div className='flex flex-col'>
                  <div>akun bank</div>
                  <div>relasi</div>
                </div>

                <div>aktivitas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Mainlayout };
