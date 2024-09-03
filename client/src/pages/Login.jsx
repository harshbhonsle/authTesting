const Login =()=>{

    const loginUser=(e)=>{
        e.preventDefault();
    }
    return(
       <div>
        <form onSubmit={loginUser}>
            <label>Name</label>
            <input type='text' placeholder="enter name"/>
            <label>Password</label>
            <input type = 'password' placeholder="enter password"/>
            <button type='submit'>Login</button>
        </form>
       </div>
    )
}
export default Login;