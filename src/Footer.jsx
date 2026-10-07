import zrdcLogo from "./assets/zrdc.png";
import icuLogo from "./assets/icu.png";
function Footer() {
  return (
    <>
      <footer>
        <p id="copyRight">
          <span className="copyright">
            &copy; 2024 <strong>Tebuho Paul, SIN: 2210296779</strong> All rights
            reserved.
          </span>
        </p>
        <ul>
          <li>
            <a href="http://www.icuzambia.net" target="_blank">
              <img src={icuLogo} className="logo" alt="icu logo" />
            </a>
          </li>
          <li>
            <a href="https://www.zrdc.org" target="_blank">
              <img src={zrdcLogo} className="logo" alt="zrdc logo" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
