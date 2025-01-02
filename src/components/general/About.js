function About() {
  return (
    <div>
      {' '}
      <header>
        <nav class="navbar navbar-expand-sm bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="../../../index.html">
              <h3 class="text-purple">Neo Banking</h3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link text-purple" href="./register.html">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-purple" href="./branches.html">
                    Branches
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-purple active" href="./about.html">
                    About Us
                  </a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link text-purple" href="./contact.html">
                    Contact
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link px-5 py-2 bg-purple login-txt d-inline"
                    href="./login.html"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div class="container my-5">
          <h1 class="text-purple mb-4">About Us</h1>
          <p class="lead text-secondary">
            Welcome to Neo Banking, where modern financial solutions meet
            exceptional customer care. Neo Banking is committed to transforming
            the way you manage your finances by offering an innovative, secure,
            and user-friendly platform for all your banking needs. From seamless
            account transactions and tailored loan services to flexible credit
            card options and a wide range of financial services, Neo Banking is
            designed to simplify your financial journey and empower you with the
            tools to reach your financial goals.
          </p>

          <div class="section mb-5">
            <h2 class="text-purple">Our Mission</h2>
            <p class="text-muted">
              At Neo Banking, we strive to create a bank that doesn’t just
              manage your money but enhances your life. Our mission is to
              provide you with smart, convenient, and intuitive banking
              solutions that keep you in control and ahead financially. We are
              dedicated to delivering secure and efficient services, backed by
              the latest in financial technology, so you can focus on what
              matters most.
            </p>
          </div>

          <div class="section mb-5">
            <h2 class="text-purple">Our Values</h2>
            <ul class="list-unstyled text-muted">
              <li>
                <strong>Customer-Centric Service</strong>: Our customers come
                first. We listen, understand, and adapt to your unique needs to
                ensure an outstanding banking experience.
              </li>
              <li>
                <strong>Innovation</strong>: Embracing technology to create
                efficient, seamless, and innovative financial solutions is at
                the heart of Neo Banking.
              </li>
              <li>
                <strong>Transparency and Integrity</strong>: We believe in open
                communication and ethical practices, ensuring that our
                customers’ trust is always upheld.
              </li>
            </ul>
          </div>

          <div class="section mb-5">
            <h2 class="text-purple">What We Offer</h2>
            <ul class="list-unstyled text-muted about-list">
              <li>
                <strong>Account Services</strong>: Easily manage and access your
                accounts with our secure and user-friendly interface, available
                anytime, anywhere.
              </li>
              <li>
                <strong>Transactions</strong>: Transfer funds, pay bills, and
                handle all your day-to-day transactions with speed and
                convenience.
              </li>
              <li>
                <strong>Loans</strong>: From personal loans to business
                financing, we offer flexible options tailored to meet your
                unique requirements.
              </li>
              <li>
                <strong>Credit Cards</strong>: Choose from a variety of credit
                card options designed to suit different spending styles and
                reward preferences.
              </li>
              <li>
                <strong>Financial Services</strong>: Plan for the future with
                Neo Banking's expert financial guidance, investment
                opportunities, and customized financial services.
              </li>
            </ul>
          </div>

          <div class="section mb-5">
            <h2 class="text-purple">Why Choose Neo Banking?</h2>
            <p class="text-muted">
              We understand that banking is personal, and that’s why we’re
              committed to providing a service that’s accessible, secure, and
              responsive. Neo Banking combines the best of technology with
              human-centered support, ensuring you have the help you need every
              step of the way. Join us on the path to financial success, where
              every transaction brings you closer to achieving your goals.
            </p>
          </div>

          <p class="text-secondary">
            Thank you for trusting Neo Banking as your financial partner.
            Together, let’s build a brighter, more secure future.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
