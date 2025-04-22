import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter
      id="footer-section"
      className="py-5 px-20 w-full bottom-0 bg-dark-gray text-white items-center justify-items-center"
    >
      <p className="w-fit mt-0 max-sm:mt-5">
        @ 2025 Shakiba Alipour. All rights reserved.
      </p>
    </AntFooter>
  );
};

export default Footer;
