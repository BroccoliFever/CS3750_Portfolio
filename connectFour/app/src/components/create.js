import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    score: 0,
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Parse the query parameter "numTurns" from the location search string
    const searchParams = new URLSearchParams(location.search);
    const numTurns = searchParams.get("numTurns");

    // Update the form's score with the value of numTurns
    if (numTurns) {
      setForm((prevForm) => ({ ...prevForm, score: numTurns }));
    }
  }, [location.search]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5050/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", score: 0 });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Highscore</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Score</label>
          <input
            type="number"
            className="form-control"
            id="score"
            value={form.score}
            readOnly // Make the score input read-only
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Highscore"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
