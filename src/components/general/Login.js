function Login() {
  return (
    <main className="text-center">
      <h1>Login</h1>
      <form className="p-3 m-3 w-25 mx-auto bg-light">
        <div>
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input name="username" className="form-control" type="text" />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input name="password" className="form-control" type="password" />
        </div>
        <button type="submit" className="btn bg-purple mt-3 form-btn">
          Login
        </button>
        <p className="text-danger"></p>
      </form>
    </main>
  );
}

export default Login;
