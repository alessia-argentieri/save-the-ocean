import { FC } from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

const Social: FC = () => {
  return (
    <ul className="social">
      <li>
        <a href="facebook.com" target="_blank">
          <img src={facebook} />
        </a>
      </li>
      <li>
        <a href="instagram.com" target="_blank">
          <img src={instagram} />
        </a>
      </li>
      <li>
        <a href="twitter.com" target="_blank">
          <img src={twitter} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
