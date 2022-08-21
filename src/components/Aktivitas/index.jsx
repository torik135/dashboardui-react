import aktivitasData from '../../data/aktivitasData';

const AktivitasList = (props) => {
  const { namaAct, pelakuAct, lokasiAct, tglAct } = props;
  return (
    <div className='mb-5 lg:text-md'>
      <p>
        {pelakuAct} {namaAct}
      </p>
      <p>{lokasiAct}</p>
      <p className='text-gray-500'>{tglAct}</p>
    </div>
  );
};

const Aktivitas = () => {
  return (
    <div className='bg-white shadow-2xl p-2 p-[2rem] rounded-md lg:mr-[1rem] md:mr-[1rem] md:mb-[1rem]'>
      <p className='font-bold mb-5 lg:text-md'>Aktivitas</p>
      {aktivitasData.map((data) => (
        <AktivitasList
          key={Math.random()}
          namaAct={data.namaAct}
          pelakuAct={data.pelakuAct}
          lokasiAct={data.lokasiAct}
          tglAct={data.tglAct}
        />
      ))}
    </div>
  );
};

export { Aktivitas };
