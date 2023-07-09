import React from "react";
import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

function ShareButtons() {
  const [isOpen, setOpen] = useState(false);
  const shareUrl = "https://example.com";
  const title = "Example Title";
  const [showDiv, setShowDiv] = useState(true);

  return (
    <div>
      <div>
      <button onClick={() => setOpen(!isOpen)}>Open</button>
      {isOpen && (
        <div>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
      )}
    </div>
      {showDiv && (
        <div className="button3">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="btnFacebook">
            Share on Facebook
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={title}>
            Share on Twitter
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={title}>
            Share on Whatsapp
          </WhatsappShareButton>
        </div>
      )}
      <button className="buttonshare" onClick={() => setShowDiv(!showDiv)}>
        Share
      </button>
    </div>
  );
}

export default ShareButtons;
