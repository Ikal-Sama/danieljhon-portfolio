import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Ikal-Sama",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/danieljhon-bancale-a13b55260/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/profile.php?id=100083109102057",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/deje.28/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
