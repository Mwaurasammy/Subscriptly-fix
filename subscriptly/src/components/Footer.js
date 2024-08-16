import React from 'react';
import "../components/Footer.css";

//Footer modals
function Footer() {
    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
    }
    
  return (
    
    <div className='footer'>
     
      {/* Privacy Policy Button and Modal */}
      <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#privacyModal">Privacy Policy</button>
      <div className="modal fade" id="privacyModal" tabIndex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="privacyModalLabel">Privacy Policy</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Your privacy is important to us. We ensure your data is securely stored and never shared without your consent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms of Service Button and Modal */}
      <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#termsModal">Terms of Service</button>
      <div className="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="termsModalLabel">Terms of Service</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                By using our service, you agree to our terms and conditions. Please read them carefully before using the app.
              </p>
              <a href='https://www.termsandconditionsgenerator.com/'>Terms and conditions</a>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe to Weekly Emails Button and Modal */}
      <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#subscribeModal">Subscribe to Weekly Emails</button>
      <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="subscribeModalLabel">Subscribe to Weekly Emails</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Stay updated with our latest features and offers. Enter your email to subscribe to our weekly newsletter.
              </p>
              <form onSubmit={(e)=>{handleSubmit(e)}}  className='form'>
                <input type='text' placeholder='Add email'>
                </input>
                <button className='form-button'>submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

     
      <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#supportModal">Support</button>
      <div className="modal fade" id="supportModal" tabIndex="-1" aria-labelledby="supportModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="supportModalLabel">Support</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Need help? Our support team is here to assist you. Contact us for any inquiries or issues.
              </p>
              
              <li>
                Contact : +25472134567
              </li>
              <li>
                Email :customercare@subscriptly.com
              </li>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
