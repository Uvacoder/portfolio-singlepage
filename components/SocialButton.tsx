import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string | undefined;
  link: string
}

const SocialButton: React.FC<Props> = ({ children, bgColor = "black", link = '' }) => {
  let bgHoverColorClass;

  switch (bgColor) {
    case "whatsapp":
      bgHoverColorClass = "hover:bg-whatsapp";
      break;
    case "instagram":
      bgHoverColorClass = "hover:bg-instagram";
      break;
    case "twitter":
      bgHoverColorClass = "hover:bg-twitter";
      break;
    case "fiver":
      bgHoverColorClass = "hover:bg-fiver";
      break;
    default:
      bgHoverColorClass = "hover:bg-black";
      break;
  }

  return (
    <a
      href={link}
      target="_blank"
      className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      <div className="fill-black group-hover:fill-white transition-colors duration-200 ease-in-out">
        {children}
      </div>
    </a>
  );
};

export default SocialButton;
