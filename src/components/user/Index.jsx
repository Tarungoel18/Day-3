import "./user.css"
import { useRef } from "react"
const Index = () => {
  const inputEmail = useRef()
  const inputPassword = useRef()

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", inputEmail.current.value);
    console.log("Password:", inputPassword.current.value);
    inputEmail.current.value = "";
    inputPassword.current.value = "";
  };

  
  return (
    <div className="parent-container">
    <div className="main-container">
      <div className="form-element">
        <label>Email</label>
        <input ref={inputEmail} type="text"/>     
      </div>
      <div className="form-element">
       <label>Password</label>
      <input ref={inputPassword} type="text"/>
      </div>
        <div className="form-element">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
     
    </div>
  )
}

export default Index