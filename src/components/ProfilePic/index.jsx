const ProfilePic = (props) => {
  const { img, profileName } = props;
  return (
    <div className='flex items-center'>
      <div className='h-[2rem] w-[2rem] rounded-full bg-gray-100 border-gray flex items-center justify-center'>{img}</div>

      <p className='ml-[1rem] font-bold'>{profileName}</p>
    </div>
  );
};

export { ProfilePic };
