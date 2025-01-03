import { useEffect, useState } from 'react';
import { getBranches } from '../../scripts/api';

function Branches() {
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    getBranches().then((branches) => {
      setBranches(branches);
    });
  }, []);
  return (
    <main>
      <ul className="list-unstyled row m-3">
        {branches.map((branch, index) => {
          return (
            <li className="col-sm-3 mb-4" key={index}>
              <div className="card">
                <img
                  src={`../../images/branch${index}.jpg`}
                  className="card-img-top branch-img"
                  alt={branch.name}
                />
                <div className="card-body">
                  <h5 className="card-title">Branch: {branch.number}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Name: {branch.name}
                  </h6>
                  <p className="card-text">
                    Description: This is one of our great establishments
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Branches;

/* 

    let branchesHTML = ``;
    let counter = 1;
    branches.map((branch) => {
      let branchImage = `../../images/branch${counter}.jpg`;
      let branchHTML = `<li className="col-sm-3 mb-4">
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
