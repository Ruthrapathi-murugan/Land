import React, { useState } from 'react';

function Header2() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsSubmitted(true);
      setError('');
    } else {
      setError('Email Address is not valid.');
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <section className="call-to-action text-white text-center" id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              <form className="form-subscribe" id="contactFormFooter" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control form-control-lg"
                      id="emailAddressBelow"
                      type="email"
                      placeholder="Email Address"
                      data-sb-validations="required,email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitted}
                    />
                    {error && <div className="invalid-feedback text-white">{error}</div>}
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit" disabled={isSubmitted}>
                      {isSubmitted ? 'Submitted' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
              {isSubmitted && (
                <div id="submitSuccessMessage" className="mt-3">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
              )}
              {error && !isSubmitted && (
                <div id="submitErrorMessage" className="mt-3">
                  <div className="text-center text-danger mb-3">{error}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header2;
