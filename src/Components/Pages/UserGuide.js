import React from 'react';
import '../../App.css';
import './UserGuide.css';

export default function Link1() {
    return (
        <div id="home_container">
            {/* About Website information */}
            <div className="home_content" id="home_about">
                <h1>Secret Garden</h1>
                <p>Your dream lives here.
                    </p>

                <br /> <br />

            </div>

            {/* Video Demo*/}
            <div id="home_hw">
                <h3 className="smaller_h1">Video Demo</h3>

                <div class="embed-responsive embed-responsive-16by9" style={{ width: "60%", margin: "auto" }}>
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QvxgzL8XBks"


                        allowfullscreen></iframe>
                </div>

                <h3 className="smaller_h1">Features Summary and Coding Logistics</h3>
                <p class='text_for_first'>
                    For more details please read README.md file in my github at <a href="https://github.com/yue-cheng-wind/shopify-image-repository">https://github.com/yue-cheng-wind/shopify-image-repository</a>
                </p>
                <br></br>

            </div>

        </div >
    );
}
