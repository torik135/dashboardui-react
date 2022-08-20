import { Header } from '../../components/Header';

const Mainlayout = () => {
  return (
    <div className=''>
      {/* header */}
      <header>
        <Header text='perusahaan' perusahaan='Mitramas' />
      </header>

      {/* nav */}
      <nav>nav</nav>

      {/* content */}
      <div className='flex'>
        {/* left */}
        <div>profile</div>

        {/* right */}
        <div className='flex'>
          <div className='flex flex-col'>
            <div>lokasi</div>

            <div className='flex flex-row'>
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
  );
};

export { Mainlayout };
