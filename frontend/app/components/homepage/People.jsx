const People = ({ item }) => {
  return (
    <div>
      <div className="flex items-center space-x-3 hover:bg-[#1D232A] rounded-lg text-[#1D232A]  hover:text-white  p-2 cursor-pointer">
        <div className="avatar online">
          <div className="rounded-full w-[3rem]">
            <img src={item?.profilePhoto} alt="" />
          </div>
        </div>
        <p className="font-medium ">{item?.username}</p>
      </div>
    </div>
  );
};

export default People;
