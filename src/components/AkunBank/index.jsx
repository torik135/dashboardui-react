import {
  BsPlusLg as PlusIcon,
  BsPencil as EditIcon,
  BsTrash as DeleteIcon,
} from 'react-icons/bs';

import akunBankData from '../../data/akunBankData';

const cardStyle =
  'bg-gray-500 h-[5rem] w-[8rem] rounded-md text-white font-extrabold m-2 content-end';

const ButtonComp = (props) => {
  const { text, onClick } = props;
  return (
    <div className='flex items-center p-2 px-3 bg-gray-400 rounded text-white text-xs'>
      <PlusIcon className='mx-3' />
      <p>{text}</p>
    </div>
  );
};

const AkunList = (props) => {
  const { type, namaBank, namaNasabah, nomorAkhir, curr, onEdit, onDelete } =
    props;
  return (
    <div className='flex items-center mb-6'>
      {/* card */}
      <div className={cardStyle}>
        <div className='text-end p-2'>{type}</div>
      </div>
      {/* detail */}
      <div>
        <div className='flex justify-between mb-5'>
          <p className='text-xs font-extrabold'>{namaBank}</p>
          {/* option */}
          <div className='flex gap-3 mr-[-2.5rem]'>
            <EditIcon
              className='text-green-500 font-extrabold'
              onClick={onEdit}
            />
            <DeleteIcon
              className='text-red-500 font-extrabold'
              onClick={onDelete}
            />
          </div>
        </div>
        <div>
          <div className='flex flex-col text-gray-500 text-sm'>
            <p>
              ****{nomorAkhir} - {namaNasabah}
            </p>
            <p>{curr}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AkunBank = (props) => {
  return (
    <div className='min-w-[22rem] min-h-[21rem] shadow-2xl rounded-md bg-white'>
      {/* top */}
      <div className='flex justify-between p-4 pt-[2rem] mb-3'>
        <p className='font-bold'>Akun Bank</p>
        <ButtonComp text='Tambah Akun Bank' onClick={() => {}} />
      </div>
      {/* list*/}
      {akunBankData.map((data) => (
        <AkunList
          key={Math.random()}
          type={data.type}
          namaBank={data.namaBank}
          namaNasabah={data.namaNasabah}
          nomorAkhir={data.nomorAkhir}
          curr={data.curr}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      ))}
    </div>
  );
};

export { AkunBank };