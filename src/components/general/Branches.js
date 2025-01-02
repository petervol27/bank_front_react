function Branches() {
  return (
    <div>
      <main>
        <ul class="list-unstyled row m-3" id="branchList"></ul>
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

export default Branches;

{
  /* <script>
  const branchList = document.getElementById('branchList');
  const fetchChoices = async () => {
    const response = await axios.get(
      'https://bank-zdpd.onrender.com/accounts/branches/'
    );
    const branches = response.data;
    let branchesHTML = ``;
    let counter = 1;
    branches.map((branch) => {
      let branchImage = `../../images/branch${counter}.jpg`;
      let branchHTML = `<li class="col-sm-3 mb-4">
  <div class="card">
    <img
      src="${branchImage}"
      class="card-img-top branch-img"
      alt="Branch${counter}"
    />
    <div class="card-body">
      <h5 class="card-title">Branch: ${branch.number}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Name: ${branch.name}</h6>
      <p class="card-text">
        Description: This is one of our great establishments
      </p>
    </div>
  </div>
</li>`;
      counter++;
      branchesHTML += branchHTML;
    });
    branchList.innerHTML = branchesHTML;
  };
  window.onload = async () => await fetchChoices();
</script> */
}
