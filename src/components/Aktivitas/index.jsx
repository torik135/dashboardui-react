import aktivitasData from '../../data/aktivitasData';

const AktivitasList = (props) => {
  const { namaAct, pelakuAct, lokasiAct, tglAct } = props;
  return (
    <div className='mb-5'>
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
    <div className='bg-white shadow-2xl p-2 p-[2rem]'>
      <p className='font-extrabold text-xl mb-5'>Aktivitas</p>
      {aktivitasData.map((data) => (
        <AktivitasList
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
