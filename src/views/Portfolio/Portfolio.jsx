import React from 'react';
import './Portfolio.css';
import ButtonLink from '../../components/ButtonLink';
import NavHeaderSub from '../../components/NavHeaderSub';
import ContactCall from '../../components/ContactCall';
import HeaderSub from '../../components/HeaderSub';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [
      {
        title: "Maple PR Vis - Visualising Canada's PR Immigration Data",
        tech: 'D3js, MongoDB Atlas Cloud, Express, Angular, Node, AWS',
        description:
          "A visualisation project to develop an Interactive Visualisation tool for analysing the Government of Canada's Permanent Residency Immigration Data using D3js.",
        image: './img/portfolio/mapleprvis.png',
        link: 'http://maple-pr-vis.samsonmaconi.com/'
      },
      {
        title: 'New Spring Church Website',
        tech: 'AWS, WordPress, PHP, CSS, HTML5, Photoshop',
        description:
          'A pro bono website development project to support a church with its mission to create an environment where young people are encouraged to freely express themselves.',
        image: './img/portfolio/newspringhamilton.png',
        link: 'http://newspringhamilton.ca/'
      },
      {
        title: 'Easy Attendance Mobile App',
        tech: 'Android, Java, PHP, SQL, GPS, Git',
        description:
          'The team and I designed and implemented a mobile application on the Android platform that allows professors to capture class attendance in real-time via mobile devices; using GPS to ensure the students are within the range of the lecture.',
        image: './img/portfolio/easyattendance.png',
        link: 'https://github.com/samsonmaconi/EasyAttendance'
      },
      {
        title: 'This website (samsonmaconi.com)',
        tech: 'React JS, JavaScript, AWS, HTML5, SASS, Git',
        description:
          'My website redesigned.',
        image: './img/portfolio/samsonmaconi.png',
        link: '#'
      }
    ];
  }

  render() {
    return (
      <div id="portfolio" className="Portfolio fadeIn">
        <NavHeaderSub>
          <HeaderSub
            backgroundImage=""
            title="Recent Projects"
            tagline="Portfolio"
          />
        </NavHeaderSub>
        <div className="row no-gutters p-3">
          {this.projects.map((element, i) => (
            <div className="col-sm-6" key={i}>
              <div className="card p-3 m-3 text-center">
                <a
                  href={element.link !== '#' ? `${element.link}` : undefined}
                  target='_blank'
                >
                  <img
                    className="card-img-top"
                    src={`${element.image}`}
                    alt="Screenshot"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text text-uppercase">{element.tech}</p>
                  <p className="card-text">{element.description}</p>
                  {element.link !== '#' && (
                    <ButtonLink
                      href={`${element.link}`}
                      label="View"
                      className="dark"
                    />
                  )}
                  {element.link === '#' && (
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      className="btn btn-primary text-center"
                    >
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ContactCall
          label="Ask me about it"
          tagline="Find anything <span>interesting?</span>"
        />
      </div>
    );
  }
}
