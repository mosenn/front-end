import Link from "next/link";
import React from "react";
// for icon type props
import { IconBaseProps } from "react-icons";

type propsType = {
  address: string;
  text: string;
  sizeText: string;
  icon?: React.ReactElement<IconBaseProps>;
  title?: string;
};
const LinkContainer = ({ address, text, sizeText, icon, title }: propsType) => {
  return (
    <div className={`my-3  text-${sizeText} text-blue-500 hover:text-blue-600`}>
      <Link title={title} href={address} className="flex items-center">
        {icon}
        {text}
      </Link>
    </div>
  );
};

export default LinkContainer;
