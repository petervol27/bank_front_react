function Footer() {
  return (
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
          <strong>HaGanavim 15, Kiryat Ganav 752-198 , Gush Dan, Israel</strong>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
