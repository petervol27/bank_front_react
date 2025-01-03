function Branches() {
  return (
    <div>
      <main>
        <ul class="list-unstyled row m-3" id="branchList"></ul>
      </main>
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
