import { supabase, useAuthContext } from "@/Supabase/AuthContext"
import LogIn from "@/components/Profile/LogIn"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function AddUser() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conf_password, setConf_Password] = useState('')
  const [user_name, setUser_name] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [middle_name, setMiddle_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [job_title, setJob_title] = useState('')
  const [org_type, setOrg_type] = useState('')
  const [org_id, setOrg_id] = useState('')
  const [org_id_column_name, setOrg_id_column_name] = useState('')
  const [org_id_table_name, setOrg_id_table_name] = useState('')
  const [domain_name, setDomain_name] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState('')
  const { id } = useParams()
  const { createUser } = useAuthContext()
  const navigate = useNavigate()

  const handleAdd = async (e) => {
    e.preventDefault()
    // if (!user_name || !first_name || !last_name || !job_title || !org_type || !org_id || !org_id_column_name) {
    //   return alert('Enter all Field')
    // }
    if (password != conf_password) return alert('Password MisMatch')
    try {
      createUser(email, password, user_name, first_name, middle_name, last_name, job_title, org_type, org_id, org_id_column_name, org_id_table_name, domain_name)
      // navigate('/allusers')

    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex gap-4">

      <div className="w-1/3 bg-slate-500 p-4 mx-auto my-6 shadow-2xl rounded ">
        <h3 className="font-bold text-2xl text-center my-3">Add User</h3>
        <form onSubmit={handleAdd} >
          <div className="flex justify-between items-center my-2">
            <label htmlFor="user_name">User Name</label>
            <input value={user_name} onChange={(e) => setUser_name(e.target.value)} type="text" id="user_name" name="user_name" placeholder="User Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>

          <div className="flex justify-between items-center my-2">
            <label htmlFor="first_name">First Name</label>
            <input value={first_name} onChange={(e) => setFirst_name(e.target.value)} type="text" id="first_name" name="first_name" placeholder="First  Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>

          <div className="flex justify-between items-center my-2">
            <label htmlFor="middle_name">Middle Name</label>
            <input value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} type="text" id="middle_name" name="middle_name" placeholder="middle_name Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>

          <div className="flex justify-between items-center my-2">
            <label htmlFor="last_name">Last Name</label>
            <input value={last_name} onChange={(e) => setLast_name(e.target.value)} type="text" id="last_name" name="last_name" placeholder="last_name Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>

          <div className="flex justify-between items-center my-2">
            <label htmlFor="job_title">Job Title</label>
            <input value={job_title} onChange={(e) => setJob_title(e.target.value)} type="text" id="job_title" name="job_title" placeholder="job_title Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <div className="flex justify-between items-center my-2">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="email" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <div className="flex justify-between items-center my-2">
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="password" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <div className="flex justify-between items-center my-2">
            <label htmlFor="conf_password">Confirm Password</label>
            <input value={conf_password} onChange={(e) => setConf_Password(e.target.value)} type="password" id="conf_password" name="conf_password" placeholder="conf_password" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <div className="flex justify-between items-center my-2">
            <label htmlFor="org_type">Org Type</label>
            <input value={org_type} onChange={(e) => setOrg_type(e.target.value)} type="text" id="org_type" name="org_type" placeholder="org_type Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <div className="flex justify-between items-center my-2">
            <label htmlFor="org_id">Org Id</label>
            <input value={org_id} onChange={(e) => setOrg_id(e.target.value)} type="number" id="org_id" name="org_id" placeholder="org_id Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <div className="flex justify-between items-center my-2">
            <label htmlFor="org_id_column_name">Org Id Column Name</label>
            <input value={org_id_column_name} onChange={(e) => setOrg_id_column_name(e.target.value)} type="text" id="org_id_column_name" name="org_id_column_name" placeholder="org_id_column_name Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <div className="flex justify-between items-center my-2">
            <label htmlFor="org_id_table_name">org_id_table_name</label>
            <input value={org_id_table_name} onChange={(e) => setOrg_id_table_name(e.target.value)} type="text" id="org_id_table_name" name="org_id_table_name" placeholder="org_id_table_name Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <div className="flex justify-between items-center my-2">
            <label htmlFor="domain_name">Org Id Column Name</label>
            <input value={domain_name} onChange={(e) => setDomain_name(e.target.value)} type="text" id="domain_name" name="domain_name" placeholder="domain_name Name" className="p-2 rounded ml-2  focus:text-orange-600 bg-slate-100" />
          </div>
          <button type="submit" className="bg-emerald-500 px-6 py-2 my-4 rounded text-white font-bold">Add</button>
          <span>{error}</span>
          <span>{error.message}</span>
        </form>
      </div>
    </div>
  )
}
export default AddUser