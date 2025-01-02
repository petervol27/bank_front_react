function Home() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-sm bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="./index.html">
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
                  <a
                    class="nav-link text-purple"
                    href="./assets/html/global/register.html"
                  >
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-purple"
                    href="./assets/html/global/branches.html"
                  >
                    Branches
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-purple"
                    href="./assets/html/global/about.html"
                  >
                    About Us
                  </a>
                </li>
                <li class="nav-item me-3">
                  <a
                    class="nav-link text-purple"
                    href="./assets/html/global/contact.html"
                  >
                    Contact
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link px-5 py-2 bg-purple login-txt d-inline"
                    href="./assets/html/global/login.html"
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
        <div class="hero position-relative">
          <div class="container text-center d-flex flex-column align-items-center justify-content-center gap-3 ms-5">
            <h1 class="text-white hero-heading">Stay Digital</h1>
            <a
              class="btn bg-purple join-btn px-5"
              href="./assets/html/global/register.html"
            >
              Join Us Now!
            </a>
            <a
              class="text-decoration-none hero-link"
              href="./assets/html/global/login.html"
            >
              Already have an account?
            </a>
          </div>
        </div>
        <div class="my-4 text-center px-3">
          <h1 class="text-purple">Our Services</h1>
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
        </div>
      </main>
      <footer class="bg-light p-5 text-center mt-3">
        <h1 class="text-purple">Neo Banking</h1>
        <ul class="list-group list-group-horizontal justify-content-center">
          <li class="list-group-item">
            <a
              class="text-decoration-none text-purple"
              href="./assets/html/global/about.html"
            >
              About Us
            </a>
          </li>
          <li class="list-group-item">
            <a
              class="text-decoration-none text-purple"
              href="./assets/html/global/contact.html"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul class="list-group w-25 mx-auto mt-3 contact-details">
          <li class="list-group-item">
            Email: <strong>NeoBanking@neo.com</strong>
          </li>
          <li class="list-group-item">
            Phone: <strong>+972551472398</strong>
          </li>
          <li class="list-group-item">
            Address:
            <strong>
              HaGanavim 15, Kiryat Ganav 752-198 , Gush Dan, Israel
            </strong>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
