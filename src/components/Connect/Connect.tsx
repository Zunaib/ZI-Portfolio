import React, { FC } from "react";
import ConnectIMG from "../../assets/connect.png";

interface ConnectProps {
  scrollRef: any;
}

const Connect: FC<ConnectProps> = function ({ scrollRef }) {
  return (
    <div className="connect" ref={scrollRef}>
      <div className="connect-inner">
        <div className="connect-form">
          <h2 className="connect-title" data-sr-id="8">
            Lets Connect.
          </h2>
          <h5 className="connect-description">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </h5>
          <div className="form">
            <form>
              <div className="email">
                <label>Email</label>
                <div>
                  <input
                    type="text"
                    className="no-error"
                    name="email"
                    value=""
                    placeholder="Email"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1583839727610-2"
                  />
                  <span className="error-message"></span>
                </div>
              </div>
              <div className="message">
                <label>Message</label>
                <div>
                  <textarea
                    className="no-error"
                    name="message"
                    placeholder="Hey, how's it going?"
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </form>
            <button className="btn-send">Send ›</button>
          </div>
        </div>
        <div className="connect-image">
          <div className="image">
            <div className="png">
              <img src={ConnectIMG} alt="user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
