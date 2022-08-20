const Nav = (props) => {
  const { logo, children } = props;
  return (
    <div  className='px-[1rem]'>
      <div className='mb-[3rem]'>{logo}</div>
      {children}
    </div>
  );
};

export { Nav };
