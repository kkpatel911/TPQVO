const audiences = [
  { title: "Hospitals", href: "https://tpqvo.com/Hospital_Credentialing.htm", mark: "H" },
  { title: "Surgery Centers", href: "https://tpqvo.com/ASC_Credentialing.htm", mark: "SC" },
  { title: "Networks, IPAs, PPOs", href: "https://tpqvo.com/Network_Credentialing.htm", mark: "N" },
  { title: "Practices", href: "https://tpqvo.com/Credentials_Check_Service.htm", mark: "P" },
];

const quickLinks = [
  ["Applications and Forms", "https://tpqvo.com/Forms.htm"],
  ["Client Login", "https://www.tpqvo.com/client/login.asp"],
  ["Physician Login", "https://www.tpqvo.com/physician/login.asp"],
  ["Allied Health Login", "https://www.tpqvo.com/allied/login.asp"],
  ["TPQVO Facts", "https://tpqvo.com/About_TPQVO.htm"],
  ["Certification News", "https://tpqvo.com/Certification_News.htm"],
  ["Contact Us", "https://tpqvo.com/Contact_Us.htm"],
  ["Recredentialing Schedules", "https://tpqvo.com/Recredentialing_Schedules.htm"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TPQVO home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span><b>TPQVO</b><small>Your Credentialing Partner</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="https://tpqvo.com/About_TPQVO.htm">About</a>
          <a href="#professionals">For Professionals</a>
          <a className="nav-contact" href="https://tpqvo.com/Contact_Us.htm">Contact us</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <div>
            <a href="#services">Services</a>
            <a href="https://tpqvo.com/About_TPQVO.htm">About</a>
            <a href="#professionals">For Professionals</a>
            <a href="https://tpqvo.com/Contact_Us.htm">Contact us</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Credentials verification services since 1998</p>
          <h1>Credentialing,<br /><em>made clear.</em></h1>
          <p className="hero-intro">We handle the data-intensive work of verifying healthcare credentials—so your organization can stay focused on providing exceptional care.</p>
          <div className="hero-actions">
            <a className="button primary" href="#services">Explore our services <span>→</span></a>
            <a className="button text" href="https://tpqvo.com/Contact_Us.htm">Talk with our team</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="TPQVO credentials verification">
          <div className="panel-grid" />
          <div className="seal"><span className="seal-mark"><i /></span><b>Verified with care.</b><small>Precision in every detail</small></div>
          <div className="standard standard-one"><i>01</i><span><b>Primary source</b><small>Verification</small></span><strong>✓</strong></div>
          <div className="standard standard-two"><i>02</i><span><b>Accreditation</b><small>Standards</small></span><strong>✓</strong></div>
          <div className="standard standard-three"><i>03</i><span><b>Provider files</b><small>Managed securely</small></span><strong>✓</strong></div>
          <div className="panel-note">Built around accuracy,<br />service &amp; trust.</div>
        </div>
      </section>

      <section className="help" id="services">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> How can we help you?</p><h2>Credentialing support for<br />every care setting.</h2></div>
          <p>Our clients love us because we help solve their credentialing problems. Learn how we can help:</p>
        </div>
        <div className="audience-grid">
          {audiences.map((item) => (
            <a className="audience-card" href={item.href} key={item.title}>
              <span className="audience-mark">{item.mark}</span>
              <span><b>{item.title}</b><small>Credentialing solutions</small></span>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="partner">
        <div className="partner-label"><span>20+</span><p>Years of CVO<br />industry experience</p></div>
        <div className="partner-copy">
          <p className="eyebrow"><span /> A partner you can rely on</p>
          <h2>TPQVO is your<br />credentialing partner.</h2>
          <p>TPQVO is a credentials verification organization that aims at improving credentialing processes for healthcare organization clients by handling the data-intensive and often frustrating process of verifying health care credentials. With over 20 years of CVO industry experience in hand, TPQVO removes some of the pain of health care credentialing by helping clients meet accreditation standards at the same time treating medical staff members and applicants as our customers.</p>
          <p>TPQVO provides credentials verification services to a broad range of healthcare organization clients including hospitals, ambulatory surgery centers (ASC), office-based surgical practice, networks, nursing homes, and medical practices.</p>
          <p>We follow Joint Commission, NCQA, and AAAHC credentials verification standards as required by our clients. We are experts in managing and verifying physician and other healthcare professional credentials information. Our goal is to help our clients focus on what they do best—providing healthcare services. Our clients trust us to help make credentialing as frustration-free as possible. That&apos;s why TPQVO is your credentialing partner.</p>
          <a className="inline-link" href="https://tpqvo.com/About_TPQVO.htm">Learn more about TPQVO <span>→</span></a>
        </div>
      </section>

      <section className="professional-links" id="professionals">
        <div className="professional-copy">
          <p className="eyebrow light"><span /> For healthcare professionals</p>
          <h2>The right form.<br />Right when you need it.</h2>
          <p>Access reappointment forms, new initial applications, and secure portals for physicians and allied health professionals.</p>
        </div>
        <div className="form-links">
          <a href="https://www.tpqvo.com/physician/login.asp"><span>Physician online<br /><b>Reappointment forms</b></span><i>→</i></a>
          <a href="https://www.tpqvo.com/allied/login.asp"><span>Allied health online<br /><b>Reappointment forms</b></span><i>→</i></a>
          <a href="https://tpqvo.com/Forms.htm"><span>New initial<br /><b>Application forms</b></span><i>→</i></a>
        </div>
      </section>

      <section className="quick-section">
        <p className="eyebrow"><span /> Find it quickly</p>
        <h2>Quick links</h2>
        <div className="quick-grid">
          {quickLinks.map(([label, href], index) => <a href={href} key={label}><span>{String(index + 1).padStart(2, "0")}</span>{label}<i>↗</i></a>)}
        </div>
      </section>

      <section className="cta">
        <div><p className="eyebrow light"><span /> Let&apos;s work together</p><h2>Ready to make credentialing<br />less frustrating?</h2></div>
        <a className="button cream" href="https://tpqvo.com/Contact_Us.htm">Contact TPQVO <span>→</span></a>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /></span><span><b>TPQVO</b><small>Your Credentialing Partner</small></span></a>
          <div><small>Get in touch</small><a href="mailto:tpqvo@tpqvo.com">tpqvo@tpqvo.com</a><a href="tel:+14234951191">(423) 495-1191</a></div>
          <div><small>Visit us</small><p>1092 Chamberlain Avenue, Suite B<br />Chattanooga, TN 37404</p></div>
          <a className="fee-link" href="https://banccard.hyfin.app/online-payment/rrsrkzjk/TPQVO"><span>Pay application<br />fees online</span><i>↗</i></a>
        </div>
        <div className="footer-bottom"><span>© 2002 TPQVO, Inc.</span><span>Providing credentialing solutions since 1998</span></div>
      </footer>
    </main>
  );
}
