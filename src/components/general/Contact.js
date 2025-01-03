function Contact() {
  return (
    <div>
      <div class="container my-5">
        <h1 class="text-center text-purple mb-4">Contact Us</h1>

        <div class="text-center mb-4">
          <h4>Contact Information</h4>
          <ul class="list-group w-50 mx-auto mt-3">
            <li class="list-group-item">
              Email: <strong>NeoBanking@neo.com</strong>
            </li>
            <li class="list-group-item">
              Phone: <strong>+972551472398</strong>
            </li>
            <li class="list-group-item">
              Address:
              <strong>
                HaGanavim 15, Kiryat Ganav 752-198, Gush Dan, Israel
              </strong>
            </li>
          </ul>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6">
            <h4 class="text-center mb-3">Send Us a Message</h4>
            <form class="text-center" id="contactForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-block mt-3">
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
{
  /* <script>
  const contact = () => {
    const name = document.getElementById('name');
    alert(`Thank you ${name.value} we will contact you shortly`);
  };
  document.getElementById('contactForm').addEventListener('submit', contact);
</script> */
}
