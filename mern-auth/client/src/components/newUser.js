import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginScreen() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        accountType: "customer"
    });
    const navigate = useNavigate();

// These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
        return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            window.alert("Passwords do not match");
            return;
        }
        let complexityScore = 0;
        let hasMoreThan8 = false;
        let hasLowercase = false;
        let hasUppercase = false;
        let hasNumber = false;
        let hasSpecial = false;
        if (form.password.length >= 8) {
            complexityScore++;
            hasMoreThan8 = true;
        }
        if (form.password.match(/[a-z]/)) {
            complexityScore++;
            hasLowercase = true;
        }
        if (form.password.match(/[A-Z]/)) {
            complexityScore++;
            hasUppercase = true;
        }
        if (form.password.match(/[0-9]/)) {
            complexityScore++;
            hasNumber = true;
        }
        if (form.password.match(/[^a-zA-Z0-9]/)) {
            complexityScore++;
            hasSpecial = true;
        }
        if (complexityScore < 5) {
            let alert = "Password is not complex enough. ";
            if (!hasMoreThan8) {
                alert += "\n- Must be at least 8 characters long. ";
            }
            if (!hasLowercase) {
                alert += "\n- Must contain at least one lowercase letter. ";
            }
            if (!hasUppercase) {
                alert += "\n- Must contain at least one uppercase letter. ";
            }
            if (!hasNumber) {
                alert += "\n- Must contain at least one number. ";
            }
            if (!hasSpecial) {
                alert += "\n- Must contain at least one special character. ";
            }
            window.alert(alert);
            return;
        }


        const newUser = { ...form };


        await fetch("http://localhost:5050/record", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
        })
        .catch((err) => {
            window.alert("Error: " + err);
            return;
        });

        setForm({ username: "", password: ""});
        navigate("/");
    }

    return (
        <div>
            <h1>New User</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={form.username}
                        onChange={(e) => updateForm({ username: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        value={form.password}
                        onChange={(e) => updateForm({ password: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control"
                        value={form.confirmPassword}
                        onChange={(e) => updateForm({ confirmPassword: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="accountType">Account Type</label>
                    <select
                        id="accountType"
                        name="accountType"
                        className="form-control"
                        value={form.accountType}
                        onChange={(e) => updateForm({ accountType: e.target.value })}
                    >
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                        <option value="customer">Customer</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Create User
                    </button>
                </div>
            </form>
        </div>
    );
}