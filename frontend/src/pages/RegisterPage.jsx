import { useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
    const { register } = useForm();
    const { signup} = useAuth();

  return (
    <div className='bg-zinc-800 max-w-md p10 rounded-md'>
        <form >
            <input type="text"
            className='w-full bg-zinc-700 text-white px-4 py-4 py-2 rounded-md my-2'
            placeholder='username'
            {
              ...register("username", {required: true, minLength: 5})
            }
          />
            <input type="email"
            className='w-full bg-zinc-700 text-white px-4 py-4 py-2 rounded-md my-2'
            placeholder='Email'
             {
                ...register("email", {required: true})
             }
            />
            <input type="password" 
            className='w-full bg-zinc-700 text-white px-4 py-4 py-2 rounded-md my-2'
            placeholder='password'
            {
                ...register("password", {required: true, minLength: 6})
             }/>

        </form>

    </div>
  )
}

export default RegisterPage