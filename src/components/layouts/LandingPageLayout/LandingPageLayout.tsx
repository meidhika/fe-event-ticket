import PageHead from "@/components/commons/PageHead";
import { Fragment, ReactNode } from "react";
import LandingPageLayoutNavbar from "./LandingPageLayoutNavbar";
import LandingPageLayoutFooter from "./LandingPageFooter";

interface PropTypes {
  title: string;
  children: ReactNode;
}
const LandingPageLayout = (props: PropTypes) => {
  const { title, children } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <LandingPageLayoutNavbar />
      <div className="py-10">{children}</div>
      <LandingPageLayoutFooter />
    </Fragment>
  );
};

export default LandingPageLayout;
