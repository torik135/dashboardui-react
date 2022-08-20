const Nav = (props) => {
  const { logo, children } = props;
  return (
    <div  className='px-[1rem] p-[1rem] pt-[2.5rem] shadow-md'>
      <div className='mb-[3rem]'>{logo}</div>
      {children}
    </div>
  );
};

export { Nav };
