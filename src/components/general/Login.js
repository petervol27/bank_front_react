function Login() {
  return (
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
