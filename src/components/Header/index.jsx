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
    <div className='flex flex-row items-center p-4'>
      <div className='flex items-center'>
        {text} <ChevRightIcon /> <b>{perusahaan}</b>
      </div>
      <div className='flex flex-row gap-[1rem] items-center'>
        
          <SearchIcon />
          <BellIcon />
        
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
