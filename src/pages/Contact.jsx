import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  ShieldCheck,
  MessageSquare,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import "./Contact.css";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "Your Email Address",
    description: "For general questions and collaboration.",
  },
  {
    icon: MessageSquare,
    title: "Security Discussions",
    value: "AI Security & Red Teaming",
    description: "Discuss labs, research and security learning.",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24–48 hours",
    description: "We aim to respond as quickly as possible.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page" id="contact">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="contact-hero">

        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />

        <div className="contact-container">

          <motion.div
            className="contact-kicker"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <ShieldCheck size={15} />

            BYTESECRYPT

            <span />

            CONTACT
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
          >
            Let's talk about
            <span> AI Security.</span>
          </motion.h1>


          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.14,
            }}
          >
            Have a question about the labs, AI security,
            red teaming, or the platform? Send us a message
            and start the conversation.
          </motion.p>

        </div>

      </section>


      {/* =================================================
          CONTACT CONTENT
      ================================================= */}

      <section className="contact-content">

        <div className="contact-container">

          <div className="contact-layout">

            {/* =================================================
                LEFT INFORMATION
            ================================================= */}

            <motion.div
              className="contact-info"
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
              }}
            >

              <span className="contact-section-label">
                GET IN TOUCH
              </span>

              <h2>
                Connect with
                <span> BytesEncrypt.</span>
              </h2>

              <p>
                Whether you're exploring AI security for the
                first time or building security-focused
                applications, we'd love to hear from you.
              </p>


              {/* Contact cards */}

              <div className="contact-cards">

                {contactCards.map(
                  (card, index) => {
                    const Icon =
                      card.icon;

                    return (
                      <motion.div
                        key={card.title}
                        className="contact-card"
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            index * 0.08,
                        }}
                        whileHover={{
                          y: -4,
                        }}
                      >

                        <div className="contact-card-icon">
                          <Icon size={20} />
                        </div>

                        <div className="contact-card-content">

                          <span>
                            {card.title}
                          </span>

                          <strong>
                            {card.value}
                          </strong>

                          <p>
                            {card.description}
                          </p>

                        </div>

                      </motion.div>
                    );
                  }
                )}

              </div>

            </motion.div>


            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <motion.div
              className="contact-form-wrapper"
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
              }}
            >

              <div className="contact-form-header">

                <div className="contact-form-icon">
                  <Send size={20} />
                </div>

                <div>
                  <h3>
                    Send us a message
                  </h3>

                  <p>
                    Fill out the form below.
                  </p>
                </div>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* Name */}

                <div className="form-field">

                  <label htmlFor="contact-name">
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />

                </div>


                {/* Email */}

                <div className="form-field">

                  <label htmlFor="contact-email">
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />

                </div>


                {/* Subject */}

                <div className="form-field">

                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                  />

                </div>


                {/* Message */}

                <div className="form-field">

                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                  />

                </div>


                {/* Submit */}

                <motion.button
                  type="submit"
                  className="contact-submit-button"
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Send size={17} />

                  Send Message

                  <ArrowUpRight
                    size={16}
                    className="submit-arrow"
                  />
                </motion.button>


                {/* Success */}

                {submitted && (
                  <motion.div
                    className="contact-success"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    <ShieldCheck size={18} />

                    Message submitted successfully.
                    Connect your backend or email service
                    to receive messages.
                  </motion.div>
                )}

              </form>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =================================================
          BOTTOM CTA
      ================================================= */}

      <section className="contact-bottom">

        <div className="contact-container">

          <motion.div
            className="contact-bottom-box"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            <ShieldCheck size={25} />

            <div>

              <h2>
                Build. Test. Secure.
              </h2>

              <p>
                Explore the AI Security Labs and
                learn through practical security scenarios.
              </p>

            </div>

            <motion.a
              href="/#labs"
              className="contact-labs-button"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              Explore Labs

              <ArrowUpRight size={16} />
            </motion.a>

          </motion.div>

        </div>

      </section>

    </main>
  );
}