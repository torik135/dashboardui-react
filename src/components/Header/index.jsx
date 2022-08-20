import {
  FiChevronRight as ChevRightIcon,
  FiSearch as SearchIcon,
  FiBell as BellIcon,
  FiUser as UserIcon,
} from 'react-icons/fi';

import { ProfilePic } from '../ProfilePic';

const Header = (props) => {
  const { text, perusahaan } = props;
  return (
    <div className='pt-[1rem] flex flex-row items-center justify-between mb-[4rem]'>
      <div className='flex items-center text-gray-500'>
        {text} <ChevRightIcon />{' '}
        <b className='text-black font-extrabold'>{perusahaan}</b>
      </div>
      <div className='flex flex-row gap-[1.5rem] items-center'>
        <SearchIcon className='text-2xl font-extrabold' />
        <BellIcon className='text-2xl font-extrabold' />

        <div className='ml-[2rem]'>
          <ProfilePic
            img={<UserIcon />}
            imgAlt='profile-img'
            profileName='John Doe'
          />
        </div>
      </div>
    </div>
  );
};

export { Header };
