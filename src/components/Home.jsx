import React from 'react';

function Home() {
  return (
    <div>
        <section className="hero bg-primary text-white text-center py-5">
            <div className="container">
                <h1 className="display-4">Welcome to NegotiatorBot</h1>
                <p className="lead">Your Expert Negotiation Partner for Better Deals</p>
                <a href="#get-started" className="btn btn-light btn-lg">Start Negotiating</a>
            </div>
        </section>

        {/* <!-- Features Section --> */}
        <section id="features" className="py-5">
            <div className="container">
                <div className="row text-center">
                <div className="col-md-4 mb-4">
                    <div className="h1 text-primary">
                    <i className="bi bi-person-circle"></i>
                    </div>
                    <h3>Expert Negotiation Skills</h3>
                    <p>Leverage advanced algorithms and AI-driven strategies to get the most favorable terms.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="h1 text-primary">
                    <i className="bi bi-clock"></i>
                    </div>
                    <h3>Time-Saving Efficiency</h3>
                    <p>Let NegotiatorBot handle the details while you focus on what matters most.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="h1 text-primary">
                    <i className="bi bi-gear"></i>
                    </div>
                    <h3>Tailored Strategies</h3>
                    <p>Get personalized negotiation strategies based on your specific needs and preferences.</p>
                </div>
                </div>
            </div>
        </section>

        {/* <!-- Get Started Section --> */}
        <section id="get-started" className="bg-light py-5">
            <div className="container text-center">
                <h2 className="mb-4">Get Started Today!</h2>
                <p className="lead">Ready to make smarter deals? Start using NegotiatorBot and experience a new level of efficiency.</p>
                <a href="#login-seller" className="btn btn-primary btn-lg me-2">Login as Seller</a>
                <a href="#login-company" className="btn btn-secondary btn-lg me-2">Login as Company</a>
                <a href="#start" className="btn btn-light btn-lg">Start Negotiating</a>
            </div>
        </section>
    </div>
  );
}

export default Home;
