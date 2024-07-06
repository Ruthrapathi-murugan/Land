import React, { useState } from 'react';

function Header() {
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
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                <form className="form-subscribe" id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <input 
                        className="form-control form-control-lg" 
                        id="emailAddress" 
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
        </div>
      </header>
    </>
  );
}

export default Header;
