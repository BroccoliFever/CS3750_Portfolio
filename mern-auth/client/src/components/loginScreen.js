import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginScreen() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();

    // Login form they will see
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit="">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={form.username}
                        // onChange={(e) => updateForm({ username: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        className="form-control"
                        value={form.password}
                        // onChange={(e) => updateForm({ password: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}



   