import React from "react"

export default class Login extends React.Component {
  render() {
    return (
      <div className=" logStyle Auth-form-container container-md">
        <form className="Auth-form align">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title text-center">Log In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
