import { useState } from 'react';
import { register } from '../../scripts/api';

function Register() {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [citizenNum, setCitizenNum] = useState('');
  const test = (e) => {
    e.preventDefault();
    console.log('testing register');
    const newUser = {
      username: username,
      password: password,
      phone: phone,
      fname: fname,
      lname: lname,
      address: address,
      citizen_num: citizenNum,
      email: email,
    };
    register(newUser).then((response) => {
      console.log(response);
    });
  };
  return (
    <main className="text-center">
      <h1>Register</h1>
      <form
        className="p-3 m-3 w-25 mx-auto bg-light global-form"
        onSubmit={(e) => test(e)}
      >
        <div>
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            name="username"
            className="form-control"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            name="password"
            className="form-control"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            name="email"
            className="form-control"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="fname">
            First Name:
          </label>
          <input
            name="fname"
            className="form-control"
            type="text"
            required
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="lname">
            Last Name:
          </label>
          <input
            name="lname"
            className="form-control"
            type="text"
            required
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="phone">
            Phone:
          </label>
          <input
            name="phone"
            className="form-control"
            type="tel"
            pattern="[0-9]{10,12}"
            required
            maxLength="12"
            title="please enter a phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="address">
            Address:
          </label>
          <input
            name="address"
            className="form-control"
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="citizen_num">
            Citizen Number:
          </label>
          <input
            name="citizen_num"
            className="form-control"
            type="text"
            required
            maxLength="9"
            pattern="[0-9]{9}"
            title="please enter numbers only"
            value={citizenNum}
            onChange={(e) => setCitizenNum(e.target.value)}
          />
        </div>

        <button type="submit" className="btn bg-purple mt-3 form-btn">
          Register
        </button>
        <p className="text-danger">{error}</p>
      </form>
    </main>
  );
}

export default Register;
{
  /* <script>
  const errortxt = document.getElementById('errortxt');
  const form = document.getElementById('registerForm'); 0
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
