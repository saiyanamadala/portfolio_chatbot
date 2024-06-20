"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen]=useState(false);

  const toggleMobileMenu =()=>{
      setMenuOpen(!menuOpen);
  }

  return (
    <>
    <header className="navbar">
        <a href="#" className="logo-holder">
            <div className="logo"><img src="./images/sai-round.png" width="64px" height="64px"/></div>
            <div className="logo-text">Naga Venkata Sairam Yanamadala</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen?"active":""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto:nagavenkatasairam.yanamadala@gmail.com" className="button">Contact Me</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
                </svg>
            </a>
        </nav>
    </header>

    <main>
        <section className="hero container">
            <div className="hero-blue">
                <div>
                    <h1><small>Hi I'm</small>
                        Naga Venkata Sairam Yanamadala
                    </h1>
                    <p>
                        Full stack Developer<span>I'm interested in AI topics which is why I also add things like
                            ChatGPT into my projects these days.</span>
                    </p>
                    <div className="call-to-action">
                        <a href="./NagaVenkataSairamY_resume.pdf" className="button black">
                            View Resume
                        </a>
                        <a href="mailto:nagavenkatasairam.yanamadala@gmail.com" className="button white">
                            Contact Me
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="#">
                            <img src="./images/github.png" alt="GitHub" width="48" />
                        </a>
                        <a href="#">
                            <img src="./images/linkedin.png" alt="LinkedIn" width="48" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-yellow">
                <img src="./images/sai.jpg" alt="Naga Venkata Sairam" width="100%" />
            </div>
        </section>
        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="./images/java.png" alt="JAVA" width="128" />
                    <img src="./images/springboot.png" alt="SPRINGBOOT" width="128" />
                    <img src="./images/javascript.png" alt="JS" width="128" />
                    <img src="./images/react.png" width="128" alt="React" />
                    <img src="./images/nextjs.png" width="128" alt="Next JS" />
                    <img src="./images/vscode.png" width="128" alt="VS Code" />
                    <img src="./images/python.png" width="128" alt="Python" />

                    {/* <!-- copy again --> */}
                    <img src="./images/java.png" alt="JAVA" width="128" />
                    <img src="./images/springboot.png" alt="SPRINGBOOT" width="128" />
                    <img src="./images/javascript.png" alt="JS" width="128" />
                    <img src="./images/react.png" width="128" alt="React" />
                    <img src="./images/nextjs.png" width="128" alt="Next JS" />
                    <img src="./images/vscode.png" width="128" alt="VS Code" />
                    <img src="./images/python.png" width="128" alt="Python" />
                </div>
            </div>
        </section>
        <section id="skills" className="skills container">
            <h2>
                <small>About Me</small>
                Skills
            </h2>
            <div className="holder-blue">
                <div className="left-column">
                    {/* <!-- <h3>Skills</h3> --> */}

                    <h4>Programming Languages</h4>
                    <ul>
                        <li>Java (Java 8/11/17)</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>C#</li>
                    </ul>

                    <h4>Frontend Technologies</h4>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Angular (12-16)</li>
                        <li>Vue.js</li>
                        <li>Bootstrap</li>
                    </ul>

                    <h4>Backend Technologies</h4>
                    <ul>
                        <li>Spring Boot</li>
                        <li>Spring MVC</li>
                        <li>Spring Security</li>
                        <li>Spring Data</li>
                        <li>Spring Batch</li>
                        <li>Spring AOP</li>
                        <li>Spring IOC</li>
                        <li>Hibernate</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>

                    <h4>Cloud & DevOps</h4>
                    <ul>
                        <li>AWS (EC2, S3, RDS, VPC, IAM, ELB, Route53, SQS, SNS, ES, ECS, EKS)</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                    </ul>

                    <h4>Databases</h4>
                    <ul>
                        <li>SQL (Oracle, SQL Server, MySQL)</li>
                        <li>NoSQL (MongoDB, Apache Cassandra)</li>
                    </ul>

                    <h4>APIs</h4>
                    <ul>
                        <li>RESTful APIs</li>
                        <li>GraphQL</li>
                    </ul>

                    <h4>Version Control & CI/CD</h4>
                    <ul>
                        <li>Git</li>
                        <li>Maven</li>
                        <li>Jenkins</li>
                    </ul>

                    <h4>Testing Frameworks</h4>
                    <ul>
                        <li>JUnit</li>
                        <li>Selenium</li>
                    </ul>


                    {/* <!-- </ul>

                    <h3>Backend</h3>
                    <ul> --> */}


                </div>
                <div className="right-column">
                    <h3>A bit about me</h3>
                    <p>
                        description about me
                    </p>
                    <p>
                        description about me
                    </p>
                </div>
            </div>
        </section>

        <section className="work-experience container">
			<h2>
				<small>Recent</small>
				Work Experience
			</h2>
			<div className="jobs">
				<article>
					<figure>
						<div>
							<img src="./imags/workplace-1.jpg" alt="RxSS" width="100%" />
							<figcaption>
								Workplace - RxSS
							</figcaption>
						</div>
					</figure>
					<h3>Full Stack Developer</h3>
					<div>2020-current</div>
					<p>Content creation online teaching people about how to code using HTML, CSS, JS.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imags/workplace-2.jpg" alt="Kroger" width="100%" />
							<figcaption>
								Workplace - Kroger
							</figcaption>
						</div>
					</figure>
					<h3>Full Stack Developer</h3>
					<div>20018-2020</div>
					<p>Marketing agency building websites and programming them from the ground up. </p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imags/workplace-3.jpg" alt="Workplace 3 - Chamber of Commerce" width="100%" />
							<figcaption>
								Workplace - Chamber of Commerce
							</figcaption>
						</div>
					</figure>
					<h3>Chamber of Commerce</h3>
					<div>2013-2018</div>
					<p>A small to large business organisation that helps facilitate advice and support.</p>
				</article>
				
			</div>
		</section>

        <section id="projects" className="bento container">
			<h2>
				<small>
					Previous
				</small>
				Completed Projects
			</h2>
			<div className="bento-grid">
				<a href="#" className="bento-item">
					<img src="./imags/bento-1.jpg" alt="BGCCI" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imags/bento-2.jpg" alt="Churhview" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imags/bento-3.jpg" alt="Harley" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imags/bento-5.jpg" alt="Bunbury" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imags/bento-6.jpg" alt="Running" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imags/bento-7.jpg" alt="School" width="100%" />
				</a>
			</div>
		</section>

        <section className="chatbot container">
			<h2>
				<small>
					Talk to me
				</small>
				Chatbot
			</h2>
			<div className="chatbot-blue">
				<div className="chat-info">
					<h3>Chatbot</h3>
					<p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
					<p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
					<a href="./NagaVenkataSairamY_resume.pdf" className="button black">Download Resume</a>
				</div>
				<div className="chat-box">
					<div className="scroll-area">
						<ul id="chat-log">
							<li>
								<span className="avatar bot">AI</span>
								<div className="message">
									Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How can I help?
								</div>
							</li>
							<li>
								<span className="avatar user">User</span>
								<div className="message">
									I have a question to ask you about this resume
								</div>
							</li>
						</ul>
					</div>
					<div className="chat-message">
						<input type="text" placeholder="Hey Sairam, what skills are you best at?"/>
						<button className="button black">Send</button>
					</div>
				</div>
			</div>
		</section>
	</main>
    </>
  );
}
