const Header = ({
  logoText = "Logo",
  menuArray = ["Home", "About", "Contact"],
  menuButtonClickHandler = (data, index) => console.log(data, index),
}) => {
  return (
    <>
      <div className="w-[90%] mx-auto h-[10vh] flex justify-center items-end">
        <header className="w-[95%] mx-auto h-full">
          <div className="bg-stone-700 h-full flex items-center justify-between">
            {/* <img src={Logo} alt="Logo" /> */}
            <h1 className="text-4xl font-bold text-stone-50 ml-5">
              {logoText}
            </h1>
            <menu className="flex gap-x-10 mr-5 text-stone-50">
              {menuArray.map((data, index) => (
                <li key={index}>
                  <button
                    className="hover:text-red-300 cursor-pointer text-xl"
                    onClick={() => menuButtonClickHandler(data, index)}
                  >
                    {data}
                  </button>
                </li>
              ))}
            </menu>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
