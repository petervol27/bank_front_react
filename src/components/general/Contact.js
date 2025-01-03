import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const makeContact = (e) => {
    e.preventDefault();
    alert(`Thank you ${name} , we will contact you soon!`);
  };
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center text-purple mb-4">Contact Us</h1>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h4 className="text-center mb-3">Send Us a Message</h4>
            <form className="text-center" onSubmit={(e) => makeContact(e)}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
