import './Footer.scss';

const Footer = () =>  (
  <footer className="py-5 bg-dark Footer">
    <div className="container d-flex flex-wrap justify-content-between">
      <a href='https://github.com/jburto94/drag-and-drop-ranker-client' className="text-white">See it on Github</a>
      <span className="text-white">Created by <a href='//jakeburton.dev'>Jake Burton</a></span>
    </div>
  </footer>
);

export default Footer;