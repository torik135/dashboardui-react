const ProfilePic = (props) => {
  const { img, profileName } = props;
  return (
    <div className='flex items-center'>
      <div className='h-[2rem] w-[2rem] rounded-full bg-gray-500 border-gray flex items-center justify-center text-white'>{img}</div>

      <p className='ml-[1rem] font-bold'>{profileName}</p>
    </div>
  );
};

export { ProfilePic };
