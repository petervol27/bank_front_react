function GlobalNav() {
  return (
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
  );
}

export default GlobalNav;
