const Navitem = (props) => {
  const { linkItem } = props;
  return <div className='py-[1rem] hover:cursor-pointer hover:scale-90'>{linkItem}</div>;
};

export { Navitem };
