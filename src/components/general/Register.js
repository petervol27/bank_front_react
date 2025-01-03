function Register() {
  return (
    <main class="text-center">
      <h1>Register</h1>
      <form id="registerForm" class="p-3 m-3 w-25 mx-auto bg-light">
        <div>
          <label class="form-label" for="username">
            Username:
          </label>
          <input
            id="username"
            name="username"
            class="form-control"
            type="text"
            required
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
            required
          />
        </div>
        <div>
          <label class="form-label" for="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            class="form-control"
            type="email"
            required
          />
        </div>
        <div>
          <label class="form-label" for="fname">
            First Name:
          </label>
          <input
            id="fname"
            name="fname"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div>
          <label class="form-label" for="lname">
            Last Name:
          </label>
          <input
            id="lname"
            name="lname"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div>
          <label class="form-label" for="phone">
            Phone:
          </label>
          <input
            id="phone"
            name="phone"
            class="form-control"
            type="tel"
            pattern="[0-9]{10,12}"
            required
            maxlength="12"
            title="please enter a phone number"
          />
        </div>
        <div>
          <label class="form-label" for="address">
            Address:
          </label>
          <input
            id="address"
            name="address"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div>
          <label class="form-label" for="citizen_num">
            Citizen Number:
          </label>
          <input
            id="citizen_num"
            name="citizen_num"
            class="form-control"
            type="text"
            required
            maxlength="9"
            pattern="[0-9]{9}"
            title="please enter numbers only"
          />
        </div>

        <button type="submit" class="btn bg-purple mt-3 form-btn">
          Register
        </button>
        <p id="errortxt" class="text-danger"></p>
      </form>
    </main>
  );
}

export default Register;
{
  /* <script>
  const errortxt = document.getElementById('errortxt');
  const form = document.getElementById('registerForm');
  const register = async (event) => {
    event.preventDefault();
    errortxt.innerHTML = '';
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');
    const phone = formData.get('phone');
    const fname = formData.get('fname');
    const lname = formData.get('lname');
    const address = formData.get('address');
    const citizenNum = formData.get('citizen_num');
    const email = formData.get('email');
    const registerData = {
      username: username,
      password: password,
      phone: phone,
      fname: fname,
      lname: lname,
      address: address,
      citizen_num: citizenNum,
      email: email,
    };
    const formValidationEmpty = Object.values(registerData).every(
      (value) => value && value.trim() !== ''
    );
    if (!formValidationEmpty) {
      errortxt.innerHTML = 'You must fill in all fields!';
      return;
    }
    try {
      const response = await axios.post(
        'https://bank-zdpd.onrender.com/users/register/',
        registerData
      );
      alert('Thank you for joining us, we are creating your account now!');

      const loginResponse = await axios.post(
        'https://bank-zdpd.onrender.com/users/login/',
        {
          username: username,
          password: password,
        }
      );
      const access = loginResponse.data.access;
      const refresh = loginResponse.data.refresh;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      const createAccount = await axios.post(
        'https://bank-zdpd.onrender.com/accounts/auto_create/',
        {},
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );
      console.log(createAccount.data);
      window.location.href = '../app/account.html';
    } catch (error) {
      console.log(error);
      errortxt.innerHTML = 'Something went wrong please check Credentials!';
    }
  };
  form.addEventListener('submit', register);
</script> */
}
