import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptBtn = useSelector((store) => store.gpt.showGptSearch);
  const [openList, setOpenList] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleToggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const mouseHandler = () => {
    setOpenList(true);
    setTimeout(() => setOpenList(false), 3000); // Auto close after 3 seconds
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {!user && (
        <div className="mt-4 absolute top-0 right-0 lg:relative md:relative outline-none flex items-center space-x-4">
          <select
            className="py-1 text-sm px-1 mr-2 lg:px-2 lg:py-2 lg:mr-4 lg:text-xl rounded-lg text-white font-semibold bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg"
            name="config"
            id="config"
            onChange={handleLangChange}
          >
            {SUPPORTED_LANGUAGES.map((ele) => (
              <option
                className="text-black text-sm lg:text-lg bg-white hover:bg-red-100 font-medium"
                value={ele.identifier}
                key={ele.identifier}
              >
                {ele.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {user && (
        <div className="flex justify-center p-2 relative">
          {gptBtn && (
            <select
              className="py-1 text-sm px-1 mr-2 my-2 lg:px-2 h-[45px] lg:py-2 outline-none lg:mr-4 lg:text-xl rounded-lg text-white font-semibold bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg"
              name="config"
              id="config"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((ele) => (
                <option
                  className="text-black text-sm lg:text-lg bg-white hover:bg-red-100 font-medium"
                  value={ele.identifier}
                  key={ele.identifier}
                >
                  {ele.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleToggleGptSearch}
            className="text-white bg-green-800 h-[45px] my-2 text-md py-1/2 rounded-lg px-2 mx-4"
          >
            {gptBtn ? "HomePage" : "GPT Search"}
          </button>
          <div className="flex items-center cursor-pointer">
            <img
              className="w-10 h-10 sm:w-[40px] sm:h-[40px]"
              src={USER_AVATAR}
              alt="User Profile"
            />
            <IoMdArrowDropdown
              color="white"
              onMouseOver={mouseHandler}
              size={24}
              className="ml-3 mr-4"
            />
          </div>
          {openList && (
            <div className="absolute top-12 sm:top-[70px] right-4 sm:right-12 bg-white border shadow-lg rounded-md w-48">
              <p className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100">
                {user.displayName}
              </p>
              <hr className="my-2" />
              <button
                className="px-4 py-2 w-full text-red-600 font-medium hover:bg-red-50 text-left"
                onClick={handleSignOut}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
