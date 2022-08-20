import { FiServer as ServerIcon } from 'react-icons/fi';

const Nav = (props) => {
  const { logo, children } = props;
  return (
    <div className='px-[1rem] p-[1rem] pt-[2.5rem] shadow-md bg-white'>
      <div className='mb-[3rem]'>{logo}</div>
      {children}
      <ServerIcon className='mt-[4rem]'/>
    </div>
  );
};

export { Nav };
