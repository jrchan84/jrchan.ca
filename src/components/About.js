import './About.css';

function About() {
  return (
    <div className="about" id="About">
      <div className="content">
        <h1 className="about-title">About</h1>
        <div className="about-profile">
          <img className="about-portrait" src="/assets/images/about-profile.png" alt="About Profile"/>
        </div>
        <div className="console">
          <div className="fakeMenu">
            <div className="fakeButtons fakeClose"></div>
            <div className="fakeButtons fakeMinimize"></div>
            <div className="fakeButtons fakeZoom"></div>
          </div>
          <div className="fakeScreen">
            <p className="line1">justin.chan@127.0.0.1 ~$: whoami</p>
            <p className="line2">
               Fourth year computer science student at UBC. Fourth year computer science student at UBC.
               Fourth year computer science student at UBC. Fourth year computer science student at UBC.
               Fourth year computer science student at UBC. Fourth year computer science student at UBC.
               Fourth year computer science student at UBC. Fourth year computer science student at UBC.
               Fourth year computer science student at UBC. Fourth year computer science student at UBC.
               Fourth year computer science student at UBC. Fourth year computer science student at UBC.
            </p>
            <p className="line3">Driven by a passion to create, technology is my medium of creation.</p>
            <p className="line4">><span className="cursor4">_</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
