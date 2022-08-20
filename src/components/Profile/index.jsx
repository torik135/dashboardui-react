import { FaGlobeAsia as LogoIcon } from 'react-icons/fa';
import {
  BsPencil as PencilIcon,
  BsRecordCircle as ActiveIcon,
} from 'react-icons/bs';

const pTextStyles = 'pb-2 pt-2 text-sm text-gray-500';

const Profile = (props) => {
  const { namaPerusahaan, servicePerusahaan } = props;
  return (
    <div className='flex flex-col min-h-[65rem] min-w-[20rem] mb-[4rem] rounded-md shadow-lg'>
      {/* img */}
      <div className='border h-[8rem] min-w-[20rem] rounded-t-md bg-gray-300'></div>
      <div className='h-[3rem] px-[.5rem] pb-[1rem]'>
        {/* logo */}
        <div className='relative'>
          <div className='border-white border-4 rounded-full text-[7rem] absolute top-[-3.5rem] left-[6rem] bg-white'>
            <LogoIcon />
          </div>
        </div>

        {/* nama */}
        <div className='flex flex-col justify-center items-center pt-[5rem]'>
          <h2 className='text-2xl font-bold'>{namaPerusahaan}</h2>
          <span>{servicePerusahaan}</span>
        </div>

        {/* sunting profile */}
        <div className='flex items-center justify-center gap-[.5rem] pt-[2rem] pb-[4rem] px-[.5rem]'>
          <PencilIcon />
          <span>Sunting profil</span>
        </div>

        {/* content */}
        <div className='px-[1rem] py-[1rem]'>
          {/* status perusahaan */}
          <p className={pTextStyles}>Status Perusahaan</p>
          <div className='flex justify-center items-center justify-between'>
            <p className='font-bold'>Aktif</p>
            <ActiveIcon className='text-xl'/>
          </div>
          {/* singkatan */}
          <p className={pTextStyles}>Singkatan</p>
          <p className='font-bold'>MIG</p>

          {/* alamat */}
          <p className={pTextStyles}>Alamat Perusahaan</p>
          <p className='font-bold'>Jl. Tebet Raya No.42, Jakarta Selatan</p>

          {/* PIC */}
          <p className={pTextStyles}>Penganggung Jawab (PIC)</p>
          <p className='font-bold'>John Doe</p>

          {/* Tanggal PKP */}
          <p className={pTextStyles}>Tanggal PKP</p>
          <p className='font-bold'>03 Mar 2021</p>

          {/* Email */}
          <p className={pTextStyles}>E-mail</p>
          <div className='flex items-center gap-[1rem]'>
            <ActiveIcon className='text-xl'/>
            <p className='font-bold'>mig@mitrasolusi.group</p>
          </div>

          {/* Telp */}
          <p className={pTextStyles}>No. Telp</p>
          <div className='flex items-center gap-[1rem]'>
            <ActiveIcon className='text-xl'/>
            <p className='font-bold'>021-5678-1234</p>
          </div>

          {/* web */}
          <p className={pTextStyles}>Situs Web</p>
          <div className='flex items-center gap-[1rem]'>
            <ActiveIcon className='text-xl'/>
            <p className='font-bold'>mitramas.com</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export { Profile };
