import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <div className="hero position-relative">
        <div className="container text-center d-flex flex-column align-items-center justify-content-center gap-3 ms-5">
          <h1 className="text-white hero-heading">Stay Digital</h1>
          <Link className="btn bg-purple join-btn px-5" to="./register">
            Join Us Now!
          </Link>
          <Link className="text-decoration-none hero-link" to="./login">
            Already have an account?
          </Link>
        </div>
      </div>
      <div className="my-4 text-center px-3">
        <h1 className="text-purple">Our Services</h1>
        <p className="lead text-secondary">
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
