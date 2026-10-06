import { useEffect, useState } from "react";

import {
  ArrowLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  UserPlus,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

import {
  GoogleLogin,
} from "@react-oauth/google";

import {
  useNavigate,
} from "react-router-dom";

import "./ShopBotSignup.css";

export default function ShopBotSignup() {
  const navigate = useNavigate();

  // =====================================================
  // FORM STATE
  // =====================================================

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // =====================================================
  // CAPTCHA
  // =====================================================

  const [captchaQuestion, setCaptchaQuestion] =
    useState("");

  const [captchaAnswer, setCaptchaAnswer] =
    useState("");

  const [captchaInput, setCaptchaInput] =
    useState("");

  // =====================================================
  // STATUS
  // =====================================================

  const [created, setCreated] =
    useState(false);

  const [googleUser, setGoogleUser] =
    useState(false);

  // =====================================================
  // GENERATE CAPTCHA
  // =====================================================

  const generateCaptcha = () => {
    const number1 =
      Math.floor(Math.random() * 10) + 1;

    const number2 =
      Math.floor(Math.random() * 10) + 1;

    setCaptchaQuestion(
      `${number1} + ${number2} = ?`
    );

    setCaptchaAnswer(
      String(number1 + number2)
    );

    setCaptchaInput("");
  };

  // Generate CAPTCHA when page loads
  useEffect(() => {
    generateCaptcha();
  }, []);

  // =====================================================
  // SIGNUP
  // =====================================================

  const handleSignup = (event) => {
    event.preventDefault();

    // First name
    if (!firstName.trim()) {
      alert("Please enter your first name.");
      return;
    }

    // Last name
    if (!lastName.trim()) {
      alert("Please enter your last name.");
      return;
    }

    // Email
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    // Mobile
    if (!mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    // Mobile validation
    const mobileRegex =
      /^[0-9]{10}$/;

    if (!mobileRegex.test(mobile)) {
      alert(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    // Password
    if (!password.trim()) {
      alert("Please enter a password.");
      return;
    }

    // Confirm password
    if (!confirmPassword.trim()) {
      alert(
        "Please confirm your password."
      );
      return;
    }

    // Password match
    if (password !== confirmPassword) {
      alert(
        "Password and confirm password do not match."
      );
      return;
    }

    // CAPTCHA
    if (
      captchaInput.trim() !==
      captchaAnswer
    ) {
      alert(
        "Incorrect CAPTCHA. Please try again."
      );

      generateCaptcha();
      return;
    }

    // Success
    setCreated(true);
  };

  // =====================================================
  // GOOGLE LOGIN SUCCESS
  // =====================================================

  const handleGoogleSuccess = (
    credentialResponse
  ) => {
    console.log(
      "Google credential received:",
      credentialResponse
    );

    setGoogleUser(true);
  };

  // =====================================================
  // GOOGLE LOGIN ERROR
  // =====================================================

  const handleGoogleError = () => {
    alert(
      "Google Sign-In failed. Please try again."
    );
  };

  return (
    <div className="shopbot-signup-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="signup-header">

        <button
          type="button"
          className="signup-back-button"
          onClick={() =>
            navigate("/labs/shopbot")
          }
        >
          <ArrowLeft size={18} />

          Back to ShopBot
        </button>


        <div className="signup-brand">

          <div className="signup-icon">
            <ShieldCheck size={24} />
          </div>

          <div>
            <strong>
              ShopBot
            </strong>

            <span>
              Customer Registration
            </span>
          </div>

        </div>

      </header>


      {/* =================================================
          SIGNUP LAYOUT
      ================================================= */}

      <main className="signup-layout">

        {/* =================================================
            LEFT INFORMATION
        ================================================= */}

        <section className="signup-info">

          <span>
            NEW CUSTOMER
          </span>

          <h1>
            Create your
            <strong>
              ShopBot account.
            </strong>
          </h1>

          <p>
            Create an account to access the
            ShopBot e-commerce security
            training environment.
          </p>


          <div className="signup-info-box">

            <div>
              <ShieldCheck size={20} />
            </div>

            <p>
              Your account is used only for the
              controlled ShopBot security lab.
            </p>

          </div>

        </section>


        {/* =================================================
            RIGHT SIGNUP FORM
        ================================================= */}

        <section className="signup-form-card">

          {/* FORM HEADER */}

          <div className="signup-form-title">

            <div className="signup-form-icon">

              <UserPlus size={21} />

            </div>

            <div>

              <h2>
                Sign Up
              </h2>

              <p>
                Enter your details to create
                a customer account.
              </p>

            </div>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={handleSignup}
          >

            {/* FIRST + LAST NAME */}

            <div className="signup-two-column">

              <div className="signup-field">

                <label htmlFor="first-name">
                  First Name
                </label>

                <input
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(event) =>
                    setFirstName(
                      event.target.value
                    )
                  }
                  placeholder="First name"
                />

              </div>


              <div className="signup-field">

                <label htmlFor="last-name">
                  Last Name
                </label>

                <input
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(event) =>
                    setLastName(
                      event.target.value
                    )
                  }
                  placeholder="Last name"
                />

              </div>

            </div>


            {/* EMAIL + MOBILE */}

            <div className="signup-two-column">

              <div className="signup-field">

                <label htmlFor="signup-email">
                  Email
                </label>

                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  placeholder="you@example.com"
                />

              </div>


              <div className="signup-field">

                <label htmlFor="signup-mobile">
                  Mobile Number
                </label>

                <input
                  id="signup-mobile"
                  type="tel"
                  value={mobile}
                  onChange={(event) => {
                    const value =
                      event.target.value.replace(
                        /\D/g,
                        ""
                      );

                    setMobile(
                      value.slice(0, 10)
                    );
                  }}
                  placeholder="10-digit mobile"
                  inputMode="numeric"
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="signup-field">

              <label htmlFor="signup-password">
                Password
              </label>

              <div className="signup-password">

                <input
                  id="signup-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  placeholder="Create password"
                />

                <button
                  type="button"
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
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="signup-field">

              <label htmlFor="signup-confirm-password">
                Confirm Password
              </label>

              <div className="signup-password">

                <input
                  id="signup-confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(
                      event.target.value
                    )
                  }
                  placeholder="Confirm password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      (prev) => !prev
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            {/* =================================================
                CAPTCHA
            ================================================= */}

            <div className="signup-captcha">

              <div className="captcha-header">

                <label htmlFor="captcha-input">
                  Security Check
                </label>

                <button
                  type="button"
                  className="captcha-refresh"
                  onClick={generateCaptcha}
                  aria-label="Refresh CAPTCHA"
                >
                  <RefreshCw size={16} />
                </button>

              </div>


              <div className="captcha-box">

                <span>
                  {captchaQuestion}
                </span>

              </div>


              <input
                id="captcha-input"
                type="text"
                value={captchaInput}
                onChange={(event) =>
                  setCaptchaInput(
                    event.target.value
                  )
                }
                placeholder="Enter CAPTCHA answer"
                inputMode="numeric"
              />

            </div>


            {/* =================================================
                CREATE ACCOUNT
            ================================================= */}

            <button
              type="submit"
              className="signup-submit"
            >
              <UserPlus size={18} />

              Create Account
            </button>

          </form>


          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="signup-divider">

            <span></span>

            <b>
              OR
            </b>

            <span></span>

          </div>


          {/* =================================================
              GOOGLE LOGIN
          ================================================= */}

          <div className="google-login-wrapper">

            <GoogleLogin
              onSuccess={
                handleGoogleSuccess
              }
              onError={
                handleGoogleError
              }
              text="signup_with"
              theme="outline"
              size="large"
              width="100%"
            />

          </div>


          {/* GOOGLE SUCCESS */}

          {googleUser && (
            <div className="signup-success">

              <CheckCircle2 size={18} />

              <div>

                <strong>
                  Google authentication successful
                </strong>

                <span>
                  Google credential received.
                </span>

              </div>

            </div>
          )}


          {/* FORM SUCCESS */}

          {created && (
            <div className="signup-success">

              <CheckCircle2 size={18} />

              <div>

                <strong>
                  Account created successfully
                </strong>

                <span>
                  Your ShopBot customer registration
                  is complete.
                </span>

              </div>

            </div>
          )}

        </section>

      </main>

    </div>
  );
}