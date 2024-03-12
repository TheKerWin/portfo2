import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface SocialMediaButtonsProps {
  stylePhrasePairs: [string, string][];
}

// interface HeadingProps{
//     heading: number;
//     content: string;
//     style: string;
//}
const SocialMediaButtons = () => {
  const socialMediaButtons = [
    { name: "GitHub", url: "https://github.com/TheKerWin", icon: faGithub, },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kerwin-mercado-b00a55142/",
      icon: faLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pseudokoder/",
      icon: faInstagram,
    },
  ];

  return (
    <div className="">
      <nav className="h1">
        <ul className="space-x-3 list-none p-0  justify-center bg-slate-100 max-w-[700px] max-h-[150px] flex flex-row  overflow-auto"> 
          {socialMediaButtons.map((link, index) => (
            <li key={index} className="mr-10">
              <a href={link.url} className="icon-link">
                <div className="bg-red-300 text-xs">
                <FontAwesomeIcon
                    style={{ fontSize: '0.75rem' }}
                    icon={link.icon}
                    listItem
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SocialMediaButtons;
