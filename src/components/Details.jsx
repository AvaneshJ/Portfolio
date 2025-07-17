import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Details = () => {
  return (
    <section className="footer-container">
      <p className="mt-3">
        ©2025 <span className="font-semibold">Avanesh Joshi</span>. All Rights
        Reserved
      </p>
      <div className="mt-5 flex ">
        {socialLinks.map((socialLinks) => (
          <div className="w-10 h-10">
            <div className="btn-front rounded-xl ">
              <Link to={socialLinks.link}>
                <img
                  src={socialLinks.iconUrl}
                  alt={socialLinks.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;
