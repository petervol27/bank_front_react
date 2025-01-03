function GlobalFooter() {
  return (
    <footer className="bg-light p-3 text-center">
      <h1 className="text-purple">Neo Banking</h1>
      <ul className="list-group list-group-horizontal justify-content-center">
        <li className="list-group-item">
          <a className="text-decoration-none text-purple" href="./about.html">
            About Us
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none text-purple" href="./contact.html">
            Contact
          </a>
        </li>
      </ul>
      <ul className="list-group w-25 mx-auto mt-3 contact-details">
        <li className="list-group-item">
          Email: <strong>NeoBanking@neo.com</strong>
        </li>
        <li className="list-group-item">
          Phone: <strong>+972551472398</strong>
        </li>
        <li className="list-group-item">
          Address:
          <strong>HaGanavim 15, Kiryat Ganav 752-198 , Gush Dan, Israel</strong>
        </li>
      </ul>
    </footer>
  );
}

export default GlobalFooter;
