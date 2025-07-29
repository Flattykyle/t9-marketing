import React from "react";
import "./Auth.css";

export default function Login({ swithToSignup}){
    return(
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"placeholder="Enter your email"required/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"placeholder="Enter your password"required/>
                    </div>
                    <button type="submit"className="auth-btn">Login</button>
                </form>
                <p className="swith-text">
                    Don't have an account?{""}
                    <span onClick={swithToSignup}>Sign up</span>
                </p>
            </div>
        </div>
    );
}