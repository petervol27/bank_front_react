function Home() {
  return (
    <main>
      <div class="hero position-relative">
        <div class="container text-center d-flex flex-column align-items-center justify-content-center gap-3 ms-5">
          <h1 class="text-white hero-heading">Stay Digital</h1>
          <a
            class="btn bg-purple join-btn px-5"
            href="./assets/html/global/register.html"
          >
            Join Us Now!
          </a>
          <a
            class="text-decoration-none hero-link"
            href="./assets/html/global/login.html"
          >
            Already have an account?
          </a>
        </div>
      </div>
      <div class="my-4 text-center px-3">
        <h1 class="text-purple">Our Services</h1>
        <p class="lead text-secondary">
          Welcome to Neo Banking, where modern financial solutions meet
          exceptional customer care. Neo Banking is committed to transforming
          the way you manage your finances by offering an innovative, secure,
          and user-friendly platform for all your banking needs. From seamless
          account transactions and tailored loan services to flexible credit
          card options and a wide range of financial services, Neo Banking is
          designed to simplify your financial journey and empower you with the
          tools to reach your financial goals.
        </p>
      </div>
    </main>
  );
}

export default Home;
