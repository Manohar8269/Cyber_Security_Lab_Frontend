import { useState } from "react";

import {
  ArrowLeft,
  Eye,
  EyeOff,
  ChevronDown,
  MessageCircle,
  CheckCircle2,
  UserPlus,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "./ShopBotLab.css";

export default function ShopBotLab() {
  const navigate = useNavigate();

  // =====================================================
  // LOGIN FORM
  // =====================================================

  const [username, setUsername] = useState("attacker");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loggedIn, setLoggedIn] =
    useState(false);

  // =====================================================
  // DEMO ACCOUNTS
  // =====================================================

  const [demoOpen, setDemoOpen] =
    useState(true);

  const demoAccounts = [
    {
      username: "attacker",
      password: "hack123",
      role: "Attacker (Target Demo)",
    },
    {
      username: "alice",
      password: "alice123",
      role: "Customer",
    },
    {
      username: "bob",
      password: "bob456",
      role: "Customer",
    },
    {
      username: "admin",
      password: "admin@123",
      role: "Admin",
    },
  ];

  // =====================================================
  // CREATE ACCOUNT
  // =====================================================

  const [showCreateAccount, setShowCreateAccount] =
    useState(false);

  const [newUsername, setNewUsername] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  // =====================================================
  // BACK TO LAB HUB
  // =====================================================

  const handleBack = () => {
    navigate("/");
  };

  // =====================================================
  // DEMO ACCOUNT SELECT
  // =====================================================

  const selectDemoAccount = (account) => {
    setUsername(account.username);
    setPassword(account.password);
    setLoggedIn(false);
  };

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLogin = () => {
    const matchedAccount = demoAccounts.find(
      (account) =>
        account.username === username &&
        account.password === password
    );

    if (!username.trim()) {
      alert("Please enter username.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter password.");
      return;
    }

    if (!matchedAccount) {
      alert(
        "Invalid demo credentials. Please use one of the demo accounts."
      );
      return;
    }

    setLoggedIn(true);
  };

  // =====================================================
  // CREATE ACCOUNT
  // =====================================================

  const handleCreateAccount = (event) => {
    event.preventDefault();

    if (!newUsername.trim()) {
      alert("Please enter a username.");
      return;
    }

    if (!newPassword.trim()) {
      alert("Please enter a password.");
      return;
    }

    alert(
      `Demo account "${newUsername}" created successfully.`
    );

    setShowCreateAccount(false);

    setUsername(newUsername);

    setPassword(newPassword);

    setNewUsername("");

    setNewPassword("");

    setLoggedIn(false);
  };

  // =====================================================
  // OPEN SHOPBOT CHAT
  // =====================================================

  const handleOpenChat = () => {
    alert(
      "ShopBot AI assistant will be connected in the next step."
    );
  };

  return (
    <div className="shopbot-lab-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="shopbot-lab-header">

        {/* BACK */}

        <button
          type="button"
          className="shopbot-back-button"
          onClick={handleBack}
        >
          <ArrowLeft size={18} />

          <span>
            Back to Lab Hub
          </span>
        </button>


        {/* CENTER */}

        <div className="shopbot-header-title">

          <span className="shopbot-header-icon">
            🛍️
          </span>

          <strong>
            ShopBot E-Commerce
          </strong>

          <span className="shopbot-header-badge">
            Text-to-SQL Prompt Injection & Insecure Output
          </span>

        </div>


        {/* SESSION */}

        <div className="shopbot-session">

          Active Session:

          <span>
            ONLINE
          </span>

          <small>
            (Port 8000)
          </small>

        </div>

      </header>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="shopbot-lab-content">

        {/* =================================================
            TITLE
        ================================================= */}

        <section className="shopbot-title-section">

          <h1>
            <span>
              🛍️
            </span>

            ShopBot - Customer Login
          </h1>

          <p>
            OWASP Insecure Output Handling &
            LLM-Driven SQL Injection Lab
          </p>

        </section>


        {/* =================================================
            LOGIN CARD
        ================================================= */}

        <section className="shopbot-login-card">

          {/* USERNAME */}

          <div className="shopbot-field-group">

            <label htmlFor="shopbot-username">
              Username
            </label>

            <input
              id="shopbot-username"
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                setLoggedIn(false);
              }}
              autoComplete="username"
            />

          </div>


          {/* PASSWORD */}

          <div className="shopbot-field-group shopbot-password-group">

            <label htmlFor="shopbot-password">
              Password
            </label>

            <div className="shopbot-password-wrapper">

              <input
                id="shopbot-password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setLoggedIn(false);
                }}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="shopbot-password-toggle"
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>


          {/* LOGIN BUTTON */}

          <button
            type="button"
            className="shopbot-login-button"
            onClick={handleLogin}
          >
            Log In to ShopBot
          </button>


          {/* SUCCESS */}

          {loggedIn && (
            <div className="shopbot-login-success">

              <CheckCircle2 size={18} />

              <span>
                Logged in successfully as{" "}

                <strong>
                  {username}
                </strong>
              </span>

            </div>
          )}

        </section>


        {/* =================================================
            DEMO ACCOUNTS
        ================================================= */}

        <section className="shopbot-demo-section">

          {/* HEADER */}

          <button
            type="button"
            className="shopbot-demo-header"
            onClick={() =>
              setDemoOpen(
                (prev) => !prev
              )
            }
          >

            <div className="shopbot-demo-title">

              <ChevronDown
                size={18}
                className={
                  demoOpen
                    ? "shopbot-demo-arrow open"
                    : "shopbot-demo-arrow"
                }
              />

              <span>
                🧪
              </span>

              <strong>
                Demo Accounts
              </strong>

            </div>

          </button>


          {/* TABLE */}

          {demoOpen && (
            <div className="shopbot-demo-content">

              <div className="shopbot-table-wrapper">

                <table>

                  <thead>

                    <tr>
                      <th>
                        Username
                      </th>

                      <th>
                        Password
                      </th>

                      <th>
                        Role
                      </th>
                    </tr>

                  </thead>

                  <tbody>

                    {demoAccounts.map(
                      (account) => (
                        <tr
                          key={
                            account.username
                          }
                          onClick={() =>
                            selectDemoAccount(
                              account
                            )
                          }
                          className="demo-account-row"
                          title="Click to use this account"
                        >

                          <td>
                            {account.username}
                          </td>

                          <td>
                            {account.password}
                          </td>

                          <td>
                            {account.role}
                          </td>

                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>

            </div>
          )}

        </section>


        {/* =================================================
            CREATE ACCOUNT
        ================================================= */}

        <section className="shopbot-create-section">

          <p>
            New customer?
          </p>

          <button
            type="button"
            className="shopbot-create-button"
            onClick={() =>
              setShowCreateAccount(true)
            }
          >
            <UserPlus size={17} />

            Create an account
          </button>

        </section>

      </main>


      {/* =================================================
          CREATE ACCOUNT MODAL
      ================================================= */}

      {showCreateAccount && (
        <div
          className="shopbot-modal-overlay"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setShowCreateAccount(false);
            }
          }}
        >

          <div className="shopbot-modal">

            <div className="shopbot-modal-header">

              <div>
                <h2>
                  Create Demo Account
                </h2>

                <p>
                  Create a local training account.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowCreateAccount(false)
                }
                className="shopbot-modal-close"
              >
                ×
              </button>

            </div>


            <form
              onSubmit={
                handleCreateAccount
              }
            >

              <label htmlFor="new-username">
                Username
              </label>

              <input
                id="new-username"
                type="text"
                value={newUsername}
                onChange={(event) =>
                  setNewUsername(
                    event.target.value
                  )
                }
                placeholder="Enter username"
              />


              <label htmlFor="new-password">
                Password
              </label>

              <input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(event) =>
                  setNewPassword(
                    event.target.value
                  )
                }
                placeholder="Enter password"
              />


              <button
                type="submit"
                className="shopbot-modal-submit"
              >
                Create Account
              </button>

            </form>

          </div>

        </div>
      )}


      {/* =================================================
          FLOATING SHOPBOT BUTTON
      ================================================= */}

      <button
        type="button"
        className="shopbot-floating-chat"
        onClick={handleOpenChat}
        aria-label="Open ShopBot AI assistant"
      >
        <MessageCircle size={25} />
      </button>

    </div>
  );
}