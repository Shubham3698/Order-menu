import React from "react"
import './Faq.css'

const FAQ = () => {
  return (
    <div className="section" id="faq">
      <h2 className="secondary">Frequently Asked Questions</h2>
      <div className="faq">
        <details>
          <summary>I got wrong food, what should I do?</summary>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores amet sunt at?
            </p>
          </div>
        </details>

        <details>
          <summary>How can I contact customer support?</summary>
          <div className="content">
            <p>
              You can contact our support team via email or call our hotline for
              immediate assistance.
            </p>
          </div>
        </details>

        <details>
          <summary>Do you offer refunds?</summary>
          <div className="content">
            <p>
              Refunds are processed under certain conditions. Please check our
              refund policy for more details.
            </p>
          </div>
        </details>

        <details>
          <summary>What are your delivery timings?</summary>
          <div className="content">
            <p>
              Our delivery timings are from 9 AM to 11 PM. Special deliveries
              can be arranged upon request.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
