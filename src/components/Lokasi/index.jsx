import {
  BiHome as SubLokasiIconlv2,
  BiBuildings as IndukIcon,
  BiWrench as SubLokasiIconlv1,
} from 'react-icons/bi';

const divContStyle =
  'flex bg-darkGreen p-2 rounded w-[15rem] h-[5rem] justify-between items-center xl:w-[18rem] lg:w-[14rem] md:w-[24rem]';
const div2ContStyle = 'flex flex-col justify-end';
const pQuantityStyle = 'font-extrabold text-right';
const pTextStyle = 'text-sm font-light';
const iconStyle = 'text-5xl';

const Lokasi = (props) => {
  const { indukLen, Sublvl1Len, Sublvl2Len } = props;
  return (
    <div className='shadow-lg p-2 pt-[2rem] rounded-md bg-white lg:w-[40rem] md:mr-[1rem] md:w-[25rem]'>
      <div className='flex justify-between pb-[1rem]'>
        <p className='font-bold lg:text-md'>Lokasi</p>
        <a href='#lihatsemua' className='hover:scale-90 hover:cursor-pointer text-darkGreen'>
          Lihat semua
        </a>
      </div>
      <div className='flex gap-[1rem] text-white justify-between lg:flex-row md:flex-col md:justify-center'>

        {/* induk */}
        <div className={divContStyle}>
          <IndukIcon className={iconStyle} />
          <div className={div2ContStyle}>
            <p className={pQuantityStyle}>{indukLen}</p>
            <p className={pTextStyle}>Induk</p>
          </div>
        </div>

        {/* sub lokasi lvl1*/}
        <div className={divContStyle}>
          <SubLokasiIconlv1 className={iconStyle} />
          <div className={div2ContStyle}>
            <p className={pQuantityStyle}>{Sublvl1Len}</p>
            <p className={pTextStyle}>Sub Lokasi level 1</p>
          </div>
        </div>

        {/* sub lokasi lvl2 */}
        <div className={divContStyle}>
          <SubLokasiIconlv2 className={iconStyle} />
          <div className={div2ContStyle}>
            <p className={pQuantityStyle}>{Sublvl2Len}</p>
            <p className={pTextStyle}>Sub Lokasi level 2</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export { Lokasi };
