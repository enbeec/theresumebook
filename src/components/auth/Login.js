import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory, Redirect } from "react-router-dom";
import "./Login.css";

export const Login = (props) => {
  const email = useRef();
  // const password = useRef();
  const existDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(
      `http://${window.location.hostname}:6501/users?email=${email.current.value}`
    )
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists) {
        localStorage.setItem("trb_user", exists.id);
        history.push(`/resume/${exists.id}`);
      } else {
        existDialog.current.showModal();
      }
    });
  };

  // QUESTION is there a better way to achieve this?
  const currentUserId = parseInt(localStorage.getItem("trb_user"));
  if (currentUserId) {
    return <Redirect to={`/resume/${currentUserId}`} />;
  } else {
    return (
      <main className="container--login">
        <dialog className="dialog dialog--auth" ref={existDialog}>
          <div>User does not exist</div>
          <button
            className="button--close"
            onClick={(e) => existDialog.current.close()}
          >
            Close
          </button>
        </dialog>

        <section>
          <form className="form--login" onSubmit={handleLogin}>
            <h1>Welcome to The ResumeBook</h1>
            <h2>Please sign in</h2>
            <fieldset>
              <label htmlFor="inputEmail"> Email address </label>
              <input
                ref={email}
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <button type="submit">Sign in</button>
            </fieldset>
          </form>
        </section>
        <section className="link--register">
          <Link to="/register">Not a member yet?</Link>
        </section>
      </main>
    );
  }
};
