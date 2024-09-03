import {useState} from 'react';


const Register =()=>{

    const registerUser=(e)=>{
        e.preventDefault();
    }

    const [data,setData] = useState({
        name:'',
        email:'',
        password:''
    });

    return (
        <div>
            <form onSubmit={registerUser}>
                <label>Name</label>
                <input type ='text' placeholder="enter name.." />
                <label>Email</label>
                <input type='text' placeholder="enter email "/>
                <label>Password</label>
                <input type ='password' placeholder="enter password"/>
                <button type ='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Register;