import React, { FC } from "react";
import ConnectIMG from "../../assets/connect.png";
import { useWidthHeight } from "../useWidthHeight";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
// init("user_xLOmKpLDckCBvv16g53Pv");
interface ConnectProps {
  scrollRef: any;
}

const Connect: FC<ConnectProps> = function ({ scrollRef }) {
  const { width } = useWidthHeight();
  const breakpoint = 800;

  const { register, handleSubmit, errors } = useForm();

  const sendFeedback = (serviceID: any, templateId: any, variables: any) => {
    emailjs
      .send(serviceID, templateId, variables, "user_xLOmKpLDckCBvv16g53Pv")
      .then((res) => {})
      .catch((err) => {});
  };

  const onSubmit = (data: any, r: any) => {
    const templateId = "my_portfolio_template";
    const serviceID = "my_portfolio_gmail";
    sendFeedback(serviceID, templateId, {
      to_name: "Zunaib Imtiaz",
      from_name: data.name,
      message: data.message,
      reply_to: data.email,
    });
    r.target.reset();
    alert(`Thank you for your message from ${data.email}`);
  };

  const connectForm = (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <label>Name</label>
          <div>
            <input
              className={`${errors.name && "error"}`}
              type="text"
              name="name"
              placeholder="Enter your name"
              ref={register({
                required: "Please enter your name",
                maxLength: {
                  value: 20,
                  message: "Please enter a name with fewer than 20 characters",
                },
              })}
            />
            <span className="error-message">
              {errors.name && errors.name.message}
            </span>
          </div>
        </div>
        <div className="email">
          <label>Email</label>
          <div>
            <input
              className={`${errors.name && "error"}`}
              type="text"
              name="email"
              placeholder="Enter your email"
              ref={register({
                required: "Please enter an email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <span className="error-message">
              {errors.email && errors.email.message}
            </span>
          </div>
        </div>
        <div className="message">
          <label>Message</label>
          <div>
            <textarea
              className={`${errors.name && "error"}`}
              name="message"
              placeholder="Hey, how's it going?"
              rows={4}
              ref={register({
                required: true,
              })}
            />
            <span className="error-message">
              {errors.message && "Please enter some message"}
            </span>
          </div>
        </div>
        <button className="btn-send" type="submit">
          Send
        </button>
      </form>
    </div>
  );

  return (
    <div className="connect" ref={scrollRef}>
      <div className="connect-inner">
        {width < breakpoint ? (
          <>
            <div className="connect-image">
              <div className="image">
                <div className="png">
                  <img src={ConnectIMG} alt="user" />
                </div>
              </div>
            </div>
            <div className="connect-form">
              <h2 className="connect-title" data-sr-id="8">
                Lets Connect.
              </h2>
              <h5 className="connect-description">
                If you want to know more about me or my work, or if you would
                just like to say hello, send me a message. I'd love to hear from
                you.
              </h5>
              {connectForm}
            </div>
          </>
        ) : (
          <>
            <div className="connect-form">
              <h2 className="connect-title" data-sr-id="8">
                Lets Connect.
              </h2>
              <h5 className="connect-description">
                If you want to know more about me or my work, or if you would
                just like to say hello, send me a message. I'd love to hear from
                you.
              </h5>
              {connectForm}
            </div>
            <div className="connect-image">
              <div className="image">
                <div className="png">
                  <img src={ConnectIMG} alt="user" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Connect;
