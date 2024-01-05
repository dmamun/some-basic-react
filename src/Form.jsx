import React, { useState } from 'react';

function Form() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Submitted:', username, email);
   
    setUsername('');
    setEmail('');
  };

  return (
    <>
     <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={handleUsernameChange} 
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p>{email}</p>
    <p>{username}</p>
    </>
    
  );
}

export default Form;
