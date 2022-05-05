import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="hero-flex">
          <div className="hero_one">
            <h1>
              Become a <span>software developer</span>
            </h1>
            <p>
              Earn above $1000 creating webiste, web apps and mobile
              application. Learn today’s most in-demand digital skills and
              kickstart your new career.
            </p>
            <div className="enroll_parent" style={{ marginTop: '32px' }}>
              <Link href="/apply">
                <a className="enroll">Enroll Now</a>
              </Link>
            </div>
          </div>
          <div>
            <img className="hero-img" src="../img/l2c.png" alt="" />
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="service_head">
          <h1>Everything you need to get started</h1>
          <p>
            Technical basics, design principles, and everything you need to know
            when going digital.
          </p>
        </div>
        <div className="w-layout-grid service-grid">
          <a href="#" className="grid-block w-inline-block">
            <div className="profile-details">
              <img
                src="https://uploads-ssl.webflow.com/61254341a0f0b4b787555a2e/61294a6a866ecb86b71a67e8_dev_icon.svg"
                alt=""
                className="grid-icon"
              />
              <div className="faq-title">Full-stack Development</div>
              <p className="paragraph-basic">
                Full-stack web development using HTML, CSS, JavaScript and
                frameworks such as ReactJS and NodeJS to create unique web apps.
                Apps like websites, mobile websites, but also mobile apps and
                progressive web apps.
              </p>
            </div>
          </a>
          <a href="#" className="grid-block w-inline-block">
            <div className="profile-details">
              <img
                src="https://uploads-ssl.webflow.com/61254341a0f0b4b787555a2e/61294a697c531e4a058ab08c_design_icon.svg"
                alt=""
                className="grid-icon"
              />
              <div className="faq-title">Design Principles</div>
              <p className="paragraph-basic">
                UX/UI technologies provide visually aesthetic and functional
                user interfaces. An intuitive and at the same time visually
                appealing interface adds value for users and companies.
              </p>
            </div>
          </a>
          <a href="#" className="grid-block w-inline-block">
            <div className="profile-details">
              <img
                src="https://uploads-ssl.webflow.com/61254341a0f0b4b787555a2e/612662ef579b023492dc4184_business_icon.svg"
                alt=""
                className="grid-icon"
              />
              <div className="faq-title">Business</div>
              <p className="paragraph-basic">
                Business design involves design thinking, which puts the user at
                the center of the design process while focusing on profitable
                business models.
              </p>
            </div>
          </a>
        </div>
      </section>

      <section className="info-section">
        <div className="wrapper1">
          <div className="wrapper1-img"></div>

          <div className="wrapper1-text">
            <h2>Get ready for the tech world</h2>
            <p>
              We have the best teachers, coming directly from the industry. All
              of our staff are trained and are at the source. Our trainers work
              simultaneously in tech companies around the world and help you
              gain a holistic view of the industry.
            </p>
          </div>
        </div>
        <div className="wrapper2">
          <div className="wrapper1-text">
            <h2>Learn design and technical fundamentals</h2>
            <p>
              In our three-month course, you will learn all the design
              principles that are valid regardless of time and are based on
              human perception. At the same time, you will learn about and apply
              the latest technologies.
            </p>
          </div>

          <div className="wrapper2-img"></div>
        </div>
      </section>

      <section className="feature-section">
        <div className="service_head">
          <h1>What you{`'`}ll learn</h1>
          <p>
            Our course content. A small overview into the wide digital world.
            Find all the details in our courses page
          </p>
        </div>
        <div className="w-layout-grid2 service-grid2">
          <div className="feature-grid-block">
            <img src="../img/wf_ux.svg" alt="" className="icon-image" />
            <div className="feature-header">UX Design</div>
            <div className="standard-paragraph">
              Learn the basics of user experience design and how to create
              products that are truly user friendly
            </div>
          </div>
          <div className="feature-grid-block">
            <img src="../img/wf_ui.svg" alt="" className="icon-image" />
            <div className="feature-header">UI Design</div>
            <div className="standard-paragraph">
              Learn how to make user interfaces as intuitive as possible using
              color schemes, typography, spacing, images etc.
            </div>
          </div>
          <div className="feature-grid-block">
            <img src="../img/wf_fe.svg" alt="" className="icon-image" />
            <div className="feature-header">Full-stack Development</div>
            <div className="standard-paragraph">
              HTML, CSS, Javascript and all relevant frameworks will be more
              than just letters strung together after the course
            </div>
          </div>
          <div className="feature-grid-block">
            <img src="../img/wf_dt.svg" alt="" className="icon-image" />
            <div className="feature-header">Design thinking</div>
            <div className="standard-paragraph">
              Understand the design thinking approach and use this knowledge to
              develop better products
            </div>
          </div>
          <div className="feature-grid-block">
            <img src="../img/wf_pt.svg" alt="" className="icon-image" />
            <div className="feature-header">Prototyping</div>
            <div className="standard-paragraph">
              Put your skills to work and test them on real industry examples
            </div>
          </div>
          <div className="feature-grid-block">
            <img src="../img/wf_bs.svg" alt="" className="icon-image" />
            <div className="feature-header">Business</div>
            <div className="standard-paragraph">
              Learn how to get your foot in the door and build a career in the
              tech industry
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
