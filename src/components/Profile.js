import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Profile() {
  return (
    <div className="nav-bar">
      <Navbar collapseOnSelect expand="lg" className="nav-mainContainer">
        <Container className="nav-container">
          <Navbar.Brand href="#home">Ratnakar B.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>

              <Nav.Link eventKey={2} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="profile-div">
        <div>
          <h1>Hi There,</h1>
          <h1>I'm Ratnakar Baalkundhi</h1>
          <h2>I am a MERN Full Stack Developer.</h2>
          <a id="about" href="#about">
            <button className="btn-about" type="button" onClick={() => {}}>
              About Me!
            </button>
          </a>
        </div>
        <div>
          <img src="./images/Ratnakar.jpeg" alt=""></img>
        </div>
      </div>

      <div className="about" id="about">
        <div>
          <img className="profilePic" src="./images/Ratnakar.jpeg" alt=""></img>
        </div>
        <div className="content-div">
          <h2>A Bit About Me</h2>
          <p>
            Experienced MERN (MongoDB, Express.js, React.js, and Node.js) Full
            Stack Developer with a proven track record of delivering
            high-quality web applications. Possessing 3.3 years of hands-on
            experience in designing, developing, and implementing web solutions.
            Adept at collaborating with cross- functional teams to drive project
            success. Strong problem-solving skills and a passion for staying
            updated with the latest technologies.
          </p>

          <button className="button">
            <a className="button" href="./images/Ratnakar-Resume.pdf" download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="education" id="education">
        <div className="content-div">
          <h1>B.E (Bachelor of Engineering)</h1>
          <h2>Mechanical Engineering-Basavakalyan Engineering College</h2>
          <p>2013-2017 Basavakalyan , India</p>
        </div>
        <div>
          <img
            className="graduationLogo"
            src="https://www.schooldrillers.com/wp-content/uploads/2024/03/Educational-Qualifications-in-Nigeria.jpg"
            alt=""
          ></img>
        </div>
      </div>

      <div className="skills" id="skills">
        <div>
          <img
            className="skills-logo"
            src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://seekvectors.com/files/download/70ccc1a930b323b6a7df002dbf0c22e1.jpg"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbwI6_Kr4kKDxH5UN_yc9p0AJqmdFx7tqQA&s"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVw6XrV_bi5-_sFIbvhYWJmoTkMJDPC0alw&s"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhGETiCc_Hct6__P9a6iU9vs1DqRCDEiHNQ&s"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mkk0TKy0Hww7V1J9JkVUaHoF35GhtJN1Tw&s"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://newrelic.com/sites/default/files/2021-10/mongo_logo.jpg"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://cdn.shopaccino.com/igmguru/articles/What-Is-React-Native.png?v=448"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://miro.medium.com/v2/resize:fit:600/1*LKaM6rFUCeB-O0oo0kowoQ.png"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src="https://media.licdn.com/dms/image/D5612AQGuJ-MjQYP8Og/article-cover_image-shrink_720_1280/0/1686168471229?e=2147483647&v=beta&t=-x7SjnbUgIIWyjgoGUqiRkh2GS5Mm7OOrUt-n3qzPJQ"
            alt=""
          ></img>
          <img
            className="skills-logo"
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZBqlBpUt5wLTV4HYuX2kz3amqeI6kwFb6a4MbKmbk8juAaUFMayam4vHKk7DlCduOVA&usqp=CAU"
            alt=""
          ></img>
        </div>
        <div className="content-div">
          <h1 className="text">Technical Skills</h1>
        </div>
      </div>
      <div>
        <div className="about" id="contact">
          <div>
            <h1>Contact</h1>
            <p>Email: ratnakar.rb02@gmail.com</p>
            <p>Mobile: +91-8309046535</p>
          </div>
          <div className="content-div">
            <form>
              <div>
                <input type="email" placeholder="Email"></input>
              </div>
              <div>
                <input type="text" placeholder="+91-"></input>
              </div>
              <div>
                <textarea cols="40" rows="10"></textarea>
              </div>

              <div>
                <button type="submit"> Submit</button>
              </div>
            </form>
          </div>
        </div>
        <p className="footer">@2024 ratnakar.b MERN Full Stack Developer.</p>
      </div>
    </div>
  );
}

export default Profile;
