import React from "react";
import "./Auth.css";

export default function Signup({ swithToLogin}){
    return(
        <div className="auth-container">
            <div className="auth-card">
                <h2>Sign Up</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"placeholder="Enter your name"required/>
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"placeholder="Enter your email"required/>
                    </div>

                    <div className="form-group">
                        <label>Passwor</label>
                        <input type="password"placeholder="Enter your password"required/>
                    </div>

                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <p className="swith-text">Already have an account?{""}
                    <span onClick={swithToLogin}>Login</span>
                </p>
            </div>
        </div>
    );
}