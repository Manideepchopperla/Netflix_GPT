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
import { useDispatch } from "react-redux";
import { BANNER, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [error, setErrorMessage] = useState(null);
  const dispatch=useDispatch()
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
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
            alt="bg-img" className="h-100"  />
      </div>
      <form 
        onSubmit={(e)=>e.preventDefault()}
        className='rounded-lg absolute w-4/12 p-12 bg-black/80 my-36 mx-auto right-0 left-0 '
      >
        <h1 className='text-white font-bold text-3xl p-2 py-3'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input 
          type='text' 
          placeholder='Full Name' 
          ref={name} 
          className=' p-2 my-3 text-md rounded-[5px] text-white w-full border-[#867979] bg-transparent border-[1px] outline-none '
        />}
        <input 
          type='text' 
          placeholder='Email Address' 
          ref={email} 
          className='p-2 my-3 text-md rounded-[5px] text-white w-full border-[#867979]  bg-transparent border-[1px] outline-none '
        />
        <input 
          type='password' 
          placeholder='Password' 
          ref={password}
          className='text-md rounded-[5px] text-white p-2 my-3 w-full  bg-transparent border-[#867979] border-[1px] outline-none'  
        />
        <p className='text-red-500 font-bold text-lg text-center '>{error}</p>
        <button 
        className='text-white bg-red-700 p-2 my-4 w-full rounded-[5px] opacity' onClick={handleButtonClick}
        >
        {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className='text-white font-normal py-4'>
        {isSignInForm?"New to Netflix":"Already Registered"}? <span className='font-bold cursor-pointer underline' onClick={toggleSignInForm}> {isSignInForm?"Sign Up Now":"Sign In Now"}.</span> 
        </p>
      </form>
    </div>
  )
}

export default Login
