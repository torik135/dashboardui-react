import { BsShare as RelasiIcon } from 'react-icons/bs';

import relasiData from '../../data/relasiData';

const RelasiList = (props) => {
  const { num, text } = props;
  return (
    <div className='flex items-center mb-4'>
      <RelasiIcon className='font-extrabold text-xl mr-3' />
      <div>
        <p className='font-extrabold'>{num}</p>
        <p className='text-gray-500'>{text}</p>
      </div>
    </div>
  );
};

const Relasi = (props) => {
  return (
    <div className='p-4 bg-white shadow-2xl rounded-md'>
      <div className='flex justify-between mb-5'>
        <p className='font-extrabold text-xl'>Relasi</p>
        <a href='#lihatsemuarelasi' className='text-md'>Lihat Semua</a>
      </div>
      {relasiData.map((data) => (
        <RelasiList num={data.num} text={data.text} />
      ))}
    </div>
  );
};

export { Relasi };
