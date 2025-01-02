function Login() {
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
                  <a class="nav-link text-purple" href="./about.html">
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
                    class="nav-link px-5 py-2 bg-purple login-txt d-inline active"
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
      <main class="text-center">
        <h1>Login</h1>
        <form id="loginForm" class="p-3 m-3 w-25 mx-auto bg-light">
          <div>
            <label class="form-label" for="username">
              Username:
            </label>
            <input
              id="username"
              name="username"
              class="form-control"
              type="text"
            />
          </div>
          <div>
            <label class="form-label" for="password">
              Password:
            </label>
            <input
              id="password"
              name="password"
              class="form-control"
              type="password"
            />
          </div>
          <button type="submit" class="btn bg-purple mt-3 form-btn">
            Login
          </button>
          <p id="errortxt" class="text-danger"></p>
        </form>
      </main>
      <footer class="bg-light p-3 text-center">
        <h1 class="text-purple">Neo Banking</h1>
        <ul class="list-group list-group-horizontal justify-content-center">
          <li class="list-group-item">
            <a class="text-decoration-none text-purple" href="./about.html">
              About Us
            </a>
          </li>
          <li class="list-group-item">
            <a class="text-decoration-none text-purple" href="./contact.html">
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

export default Login;
{
  /* <script>
  const errortxt = document.getElementById('errortxt');
  errortxt.innerHTML = '';
  const form = document.getElementById('loginForm');
  const login = async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');
    try {
      const response = await axios.post(
        'https://bank-zdpd.onrender.com/users/login/',
        {
          username: username,
          password: password,
        }
      );
      const access = response.data.access;
      const refresh = response.data.refresh;
      const checkAdmin = response.data.is_staff;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      if (checkAdmin) {
        alert('Hello Admin');
        window.location.href = '../admin/dashboard.html';
      } else {
        alert('You are being redirected to your account');
        window.location.href = '../app/account.html';
      }
    } catch (error) {
      errortxt.innerHTML = 'Wrong Credentials';
    }
  };
  form.addEventListener('submit', login);
</script> */
}
