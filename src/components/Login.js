import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { BANNER, USER_AVATAR } from "../utils/constants";
import Lang from "../utils/languageConstants"


const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [error, setErrorMessage] = useState(null);
  const dispatch=useDispatch()
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const langMode = useSelector(store=>store.config.lang)
 
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const {uid,email,displayName,photoURL}=auth.currentUser
              dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL}))
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm=()=>{
    setSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BANNER}
            alt="bg-img" className="h-screen object-cover md:h-100 md:w-screen"  />
      </div>
      <form 
        onSubmit={(e)=>e.preventDefault()}
        className='rounded-lg absolute w-full md:w-4/12 p-12 bg-black/80 my-36 mx-auto right-0 left-0 '
      >
        <h1 className='text-white font-bold text-3xl p-2 py-3'>{isSignInForm?Lang[langMode].SignIn:Lang[langMode].SignUp}</h1>
        {!isSignInForm && <input 
          type='text' 
          placeholder={Lang[langMode].NamePlaceholder} 
          ref={name} 
          className=' p-2 my-3 text-md rounded-[5px] text-white w-full border-[#867979] bg-transparent border-[1px] outline-none '
        />}
        <input 
          type='text' 
          placeholder={Lang[langMode].EmailPlaceholder}
          ref={email} 
          className='p-2 my-3 text-md rounded-[5px] text-white w-full border-[#867979]  bg-transparent border-[1px] outline-none '
        />
        <input 
          type='password' 
          placeholder={Lang[langMode].PasswordPlaceholder}
          ref={password}
          className='text-md rounded-[5px] text-white p-2 my-3 w-full  bg-transparent border-[#867979] border-[1px] outline-none'  
        />
        <p className='text-red-500 font-bold text-lg text-center '>{error}</p>
        <button 
        className='text-white bg-red-700 p-2 my-4 w-full rounded-[5px] opacity' onClick={handleButtonClick}
        >
        {isSignInForm?Lang[langMode].SignIn:Lang[langMode].SignUp}
        </button>
        <p className='text-white font-normal py-4'>
        {isSignInForm?Lang[langMode].New_to_Netflix:Lang[langMode].Already_have_an_Account} <span className='font-bold cursor-pointer underline' onClick={toggleSignInForm}> {isSignInForm?Lang[langMode].Sign_up_now:Lang[langMode].Sign_in_now}</span> 
        </p>
      </form>
    </div>
  )
}

export default Login
