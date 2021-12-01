import {Component} from 'react'

import './App.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg:"",
    style:""
  }

 

  submitForm = (event) => {
    event.preventDefault()
    const{username,password}=this.state

    if (username!=='' && password!==''){
      this.setState({errorMsg:"Entered valid Credentials",style:"true"})
      console.log("Entered valid Credentials")

    }
    else if (username===''){
      this.setState({errorMsg:"Please Enter UserName",style:"error"})
    }
     else if (password===''){
      this.setState({errorMsg:"Please Enter Password",style:"error"})
    }

   
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {errorMsg,style}=this.state
    return (
      <div className="container">
       
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className={style} >{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm