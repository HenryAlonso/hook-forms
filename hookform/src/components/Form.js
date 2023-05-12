import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <div className='input-container'>
                    <label className='label-text' >First Name: </label>
                    <input type='text' className='input-style' value={ firstName } onChange={ (e)=>setFirstName(e.target.value) }/>
                </div>
                <div className='input-container'>
                    <label className='label-text'>Last Name: </label>
                    <input type='text' className='input-style' value={ lastName } onChange={ (e)=> setLastName(e.target.value) }/>
                </div>
                <div className='input-container'>
                    <label className='label-text'>Email: </label>
                    <input type='text' className='input-style' value={ email } onChange={ (e)=> setEmail(e.target.value) }/>
                </div>
                <div className='input-container'>
                    <label className='label-text'>Password: </label>
                    <input type='password' className='input-style' value={ password } onChange={ (e)=> setPassword(e.target.value) }/>
                </div>
                <div className='input-container'>
                    <label className='label-text'>Confirm Password: </label>
                    <input type='password' className='input-style' value={ confirmPassword } onChange={ (e)=> setConfirmPassword(e.target.value) }/>
                </div>
            </form>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Pasword: {password}</p>
            <p>Confirmed Password: {confirmPassword}</p>
        </div>
        
    )
}
export default Form;