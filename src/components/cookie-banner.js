import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "../style/cookie-banner.less";

const cookieConsentStorageKey = "cookiesAllowed";

export default () => {
    const [cookiesAccepted, setCookieAccepted] = useState(true);

    useEffect(() => {
        if (localStorage.getItem(cookieConsentStorageKey) !== "true") {
            setCookieAccepted(false);
        }
    }, [])

    return cookiesAccepted ? null : (
        <div id="cookie-banner">
            <div className="container">
                <div class="row">
                    <div class="col">
                        <p id="cookies-text">
                            This site uses cookies for analytics and to improve
                            the user experience. By using this site, you are
                            agreeing to their use. Please read the{" "}
                            <Link to={"/data-policy"}>data policy</Link> for
                            more information.
                        </p>
                    </div>
                    <div class="col-md">
                        <button
                            class="btn"
                            onClick={() => {
                                setCookieAccepted(true);
                                localStorage.setItem(cookieConsentStorageKey, "true");
                            }}
                        >
                            Got It!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
