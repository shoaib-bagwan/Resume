import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Resume() {
    return (
        <div
            className="bg-dark text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <div className="container py-5 fade-in">
                {/* Header */}
                <header className="text-center mb-5">
                    <h1 className="fw-bold text-light display-5">Shoaib Bagwan</h1>
                    <h3 className="text-info fw-semibold mb-3">
                        Full Stack Developer (MERN)
                    </h3>
                    <p className="text-light">
                        Pune |{" "}
                        <a
                            href="mailto:shoaibbagwan727@gmail.com"
                            className="text-decoration-none text-info link-hover"
                        >
                            shoaibbagwan727@gmail.com
                        </a>{" "}
                        |{" "}
                        <a
                            href="https://www.linkedin.com/in/shoaib-bagwan-525691201/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-info link-hover"
                        >
                            LinkedIn
                        </a>{" "}
                        |{" "}
                        <a
                            href="https://github.com/shoaib-bagwan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-info link-hover"
                        >
                            GitHub
                        </a>{" "}
                        | 8669018078
                    </p>
                </header>

                {/* Summary */}
                <section className="mb-5 fade-up">
                    <h4 className="text-uppercase text-info border-bottom border-2 border-info pb-2 mb-3">
                        Summary
                    </h4>
                    <p className="lh-lg text-light">
                        Highly motivated MERN Stack Developer skilled in building scalable full-stack applications
                        using MongoDB, Express.js, React, and Node.js. Experienced in developing RESTful APIs,
                        collaborating in Agile teams, and integrating modern solutions. Quick learner with strong
                        problem-solving and debugging skills.
                    </p>
                </section>

                {/* Skills */}
                <section className="mb-5 fade-up">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card bg-secondary bg-gradient border-0 h-100 card-hover text-white">
                                <div className="card-body">
                                    <h5 className="text-info fw-bold mb-3">Professional Skills</h5>
                                    <ul className="list-unstyled lh-lg">
                                        <li>• Design Understanding</li>
                                        <li>• Team Collaboration</li>
                                        <li>• Problem Solving</li>
                                        <li>• Database Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card bg-secondary bg-gradient border-0 h-100 card-hover text-white">
                                <div className="card-body">
                                    <h5 className="text-info fw-bold mb-3">Technical Skills</h5>
                                    <ul className="list-unstyled lh-lg">
                                        <li>• HTML, CSS, JavaScript, Bootstrap</li>
                                        <li>• React.js, Node.js, Express.js</li>
                                        <li>• MongoDB, MySQL</li>
                                        <li>• REST APIs, Git, Postman</li>
                                        <li>• Python, Java</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-5 fade-up">
                    <h4 className="text-uppercase text-info border-bottom border-2 border-info pb-2 mb-4">
                        Projects
                    </h4>

                    <div className="card bg-secondary bg-gradient border-0 mb-4 card-hover text-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h5 className="fw-bold text-white mb-0">Car Dealing Platform</h5>
                                <span className="text-light fs-6"><Link to="" target="_blank" style={{ textDecoration: "none", color: "blue" }}>check{" "}</Link>(Aug 2025 - Present)</span>
                            </div>
                            <p className="mt-2">
                                Built a full-stack car dealing platform where users can buy new cars and sell their old ones.
                                The frontend was developed using React, while the backend was implemented with Node.js,
                                Express.js, and MongoDB. Includes REST APIs, admin panel, and secure payment gateway.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-secondary bg-gradient border-0 card-hover text-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h5 className="fw-bold text-white mb-0">Flipkart Clone</h5>
                                <span className="text-light fs-6"><Link to="http://flipkart-clone-topaz-iota.vercel.app" target="_blank" style={{ textDecoration: "none", color: "blue" }}>check{" "}</Link>(Jul 2025 - Sept 2025)</span>
                            </div>
                            <p className="mt-2">
                                Built a Flipkart clone with user authentication using JWT tokens for secure login and operations.
                                Developed using React, Node.js, Express.js, and MongoDB, with admin functionality and a secure
                                payment gateway for transactions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-5 fade-up">
                    <h4 className="text-uppercase text-info border-bottom border-2 border-info pb-2 mb-3">
                        Experience
                    </h4>
                    <div className="card bg-secondary bg-gradient border-0 card-hover text-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h5 className="fw-bold text-white mb-0">
                                    Full Stack Developer (Academic Role)
                                </h5>
                                <span className="text-light fs-6">Apr 2025 - Sept 2025</span>
                            </div>
                            <p className="mb-1">The Kiran Academy, Pune Deccan</p>
                            <p className="mt-2">
                                Built full-stack applications using React, Bootstrap, Node.js, and MongoDB.
                                Managed both front-end and back-end independently.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-5 fade-up">
                    <h4 className="text-uppercase text-info border-bottom border-2 border-info pb-2 mb-3">
                        Education
                    </h4>
                    <div className="card bg-secondary bg-gradient border-0 card-hover text-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h5 className="fw-bold text-white mb-0">
                                    Bachelor of Computer Application (BCA)
                                </h5>
                                <span className="text-light fs-6">Jul 2022 - May 2025</span>
                            </div>
                            <p className="mb-1">
                                Abeda Inamdar College, Pune — Savitribai Phule Pune University
                            </p>
                            <p className="mb-0">CGPA: 8.523 | Ranked in Top 10% of the class</p>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-5 fade-up">
                    <h4 className="text-uppercase text-info border-bottom border-2 border-info pb-2 mb-3">
                        Certifications & Courses
                    </h4>
                    <div className="card bg-secondary bg-gradient border-0 card-hover text-white">
                        <div className="card-body">
                            <ul className="list-unstyled mb-0 lh-lg">
                                <div className="d-flex justify-content-between">
                                    <li>• MERN Stack Professional Course</li>
                                        <Link to="/Mern_Stack_Certificate.pdf" target='_blank' className="pe-5" style={{ textDecoration: "none",color:"blue" }}>Check</Link>
                                </div>
                                <li>• ChatGPT for Coders</li>
                                <li>• SQL for Data Science</li>
                                <li>• Front-End Development</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Download Button */}
                <div className="text-center mt-5 fade-up">
                    <Link
                        to="/Shoaib_Bagwan_Resume.pdf"
                        target="_blank"
                        download
                        className="btn btn-info text-dark fw-semibold px-4 py-2 shadow-sm btn-hover"
                    >
                        Download PDF Resume
                    </Link>
                </div>
            </div>

            {/* Fonts + Custom CSS */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <style>{`
        /* Animations */
        .fade-in { animation: fadeIn 1s ease-in-out; }
        .fade-up { animation: fadeUp 0.9s ease-in-out; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Hover Effects */
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: linear-gradient(145deg, #212529, #2c3035);
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);
        }
        .btn-hover {
          transition: all 0.3s ease;
        }
        .btn-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(13, 202, 240, 0.6);
        }
        .link-hover {
          transition: color 0.3s ease;
        }
        .link-hover:hover {
          color: #0dcaf0;
          text-decoration: underline;
        }
      `}</style>
        </div>
    );
}

export default Resume;
