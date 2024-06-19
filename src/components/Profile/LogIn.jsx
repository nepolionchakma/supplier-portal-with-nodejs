import { useAuthContext } from "@/Supabase/AuthContext"
import { Replace } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()
  const { signIn, error, fakeUserMake, fakeUser } = useAuthContext();
  const handleLogIn = (e) => {
    e.preventDefault()
    // signIn(email, password)
    fakeUserMake(email, name, true)
    // .then(navigate('/', { replace: true }))
  }
  // console.log(error.message, 'error')
  // console.log(loginError, 'error login')
  return (
    <div className="my-9">
      <div className="mx-auto w-1/4  bg-slate-400 p-6 rounded">
        <form onSubmit={handleLogIn}>

          <div className="my-4">
            <label htmlFor="email">Email</label>
            <br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Email" className="p-2 w-full rounded focus:text-orange-600 bg-slate-100" />
          </div>
          <label htmlFor="password" >Name</label>
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="password" name="password" placeholder="Name" className="p-2 rounded   focus:text-orange-600 w-full bg-slate-100" />
          <br />
          <button className="bg-emerald-500 px-6 py-2 my-4 text-white font-bold">LogIn</button>
          {
            error &&
            <div className="text-red-600 my-3"><p>Enter Valid email and password</p></div>

          }
        </form>
      </div>
      <div className="my-4">

        <h4 className="text-center">email: kallany@oracle.com</h4>
        <h4 className="text-center">pass : kallany@1234</h4>
        <h4 className="text-center">pass : nepolionchakma</h4>
        <h4 className="text-center">pass : jyanialdewan</h4>
        <h4 className="text-center">pass : diponchakma</h4>
      </div>
    </div>

    // working code here ----------------------------------------------------

    // <div className="my-9">
    //   <div className="mx-auto w-1/4  bg-slate-400 p-6 rounded">
    //     <form onSubmit={handleLogIn}>

    //       <div className="my-4">
    //         <label htmlFor="email">Email</label>
    //         <br />
    //         <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Email" className="p-2 w-full rounded focus:text-orange-600 bg-slate-100" />
    //       </div>
    //       <label htmlFor="password" >Password</label>
    //       <br />
    //       <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Password" className="p-2 rounded   focus:text-orange-600 w-full bg-slate-100" />
    //       <br />
    //       <button className="bg-emerald-500 px-6 py-2 my-4 text-white font-bold">LogIn</button>
    //       {
    //         error &&
    //         <div className="text-red-600 my-3"><p>Enter Valid email and password</p></div>

    //       }
    //     </form>
    //   </div>
    //   <div className="my-4">

    //     <h4 className="text-center">email: kallany@oracle.com</h4>
    //     <h4 className="text-center">pass : kallany@1234</h4>
    //   </div>
    // </div>
  )
}
export default LogIn