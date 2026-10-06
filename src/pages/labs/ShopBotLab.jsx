import { useState } from "react";

import {
  ArrowLeft,
  Eye,
  EyeOff,
  ChevronDown,
  CheckCircle2,
  UserPlus,
  ShieldCheck,
  Database,
  Terminal,
  LockKeyhole,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import "./ShopBotLab.css";

export default function ShopBotLab() {
  const navigate = useNavigate();

  // =====================================================
  // LOGIN
  // =====================================================

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loggedIn, setLoggedIn] =
    useState(false);


  // =====================================================
  // LOGIN
  // =====================================================

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter username.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter password.");
      return;
    }

    const matchedAccount =
      demoAccounts.find(
        (account) =>
          account.username === username &&
          account.password === password
      );

    if (!matchedAccount) {
      alert(
        "Invalid demo credentials. Please use one of the demo accounts."
      );

      return;
    }

    setLoggedIn(true);
  };

  // =====================================================
  // OPEN SIGNUP PAGE
  // =====================================================

  const handleCreateAccount = () => {
    navigate("/labs/shopbot/signup");
  };

  return (
    <div className="shopbot-lab-page">

      {/* =================================================
          TOP SHOPBOT HEADER
      ================================================= */}

      <header className="shopbot-main-header">


        <div className="shopbot-brand">

          <div className="shopbot-brand-icon">
            <ShieldCheck size={35} />
          </div>

          <div>
            <h1>
              ShopBot
            </h1>

          </div>

        </div>



      </header>


      {/* =================================================
          MAIN TWO COLUMN LAYOUT
      ================================================= */}

      <main className="shopbot-main-layout">

        {/* =================================================
            LEFT - CUSTOMER LOGIN
        ================================================= */}

        <section className="shopbot-login-panel">

          <div className="shopbot-panel-heading">

            <div className="shopbot-panel-icon">
              🛍️
            </div>

            <div>
              <span>
                CUSTOMER PORTAL
              </span>

              <h2>
                Customer Login
              </h2>

              <p>
                Access the ShopBot training environment.
              </p>
            </div>

          </div>


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
              placeholder="Enter username"
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
                placeholder="Enter password"
              />

              <button
                type="button"
                className="shopbot-password-toggle"
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>

          </div>


          {/* LOGIN */}

          <button
            type="button"
            className="shopbot-login-button"
            onClick={handleLogin}
          >
            Log In to ShopBot
          </button>


          {/* LOGIN SUCCESS */}

          {loggedIn && (
            <div className="shopbot-login-success">

              <CheckCircle2 size={18} />

              <span>
                Logged in as{" "}

                <strong>
                  {username}
                </strong>
              </span>

            </div>
          )}


          {/* =================================================
              CREATE ACCOUNT
          ================================================= */}

          <div className="shopbot-signup-area">

            <p>
              New customer?
            </p>

            <button
              type="button"
              className="shopbot-create-button"
              onClick={
                handleCreateAccount
              }
            >
              <UserPlus size={17} />

              Create an account
            </button>

          </div>

        </section>


        {/* =================================================
            RIGHT - CYBER SECURITY DETAILS
        ================================================= */}

        <section className="shopbot-security-panel">

          <div className="security-eyebrow">
            SECURITY TRAINING ENVIRONMENT
          </div>

          <h2>
            ShopBot
            <span>
              Security Overview
            </span>
          </h2>

          <p className="security-intro">
            ShopBot is a deliberately vulnerable
            e-commerce assistant designed to demonstrate
            security weaknesses in AI-driven applications.
          </p>


          {/* SECURITY ITEMS */}

          <div className="security-feature-list">

            {/* ITEM 1 */}

            <div className="security-feature">

              <div className="security-feature-icon">
                <Terminal size={21} />
              </div>

              <div>
                <h3>
                  Text-to-SQL
                </h3>

                <p>
                  Natural-language requests can be
                  translated into database queries,
                  creating a dangerous attack surface
                  when generated output is not validated.
                </p>
              </div>

            </div>


            {/* ITEM 2 */}

            <div className="security-feature">

              <div className="security-feature-icon">
                <Database size={21} />
              </div>

              <div>
                <h3>
                  Database Security
                </h3>

                <p>
                  The lab demonstrates how unsafe
                  query generation and weak authorization
                  boundaries can expose application data.
                </p>
              </div>

            </div>


            {/* ITEM 3 */}

            <div className="security-feature">

              <div className="security-feature-icon">
                <LockKeyhole size={21} />
              </div>

              <div>
                <h3>
                  Prompt Injection
                </h3>

                <p>
                  Explore how manipulated instructions
                  can influence an AI assistant and cause
                  unsafe application behavior.
                </p>
              </div>

            </div>

          </div>


          {/* SECURITY TAGS */}

          <div className="security-tags">

            <span>
              LLM Security
            </span>

            <span>
              Prompt Injection
            </span>

            <span>
              Text-to-SQL
            </span>

            <span>
              Insecure Output
            </span>

          </div>


          {/* WARNING */}

          <div className="security-note">

            <div className="security-note-icon">
              !
            </div>

            <div>
              <strong>
                Controlled Training Lab
              </strong>

              <p>
                Use this environment only for
                authorized security learning and
                testing.
              </p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}