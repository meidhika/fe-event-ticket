import PageHead from "../../commons/PageHead/PageHead";
import { Fragment, ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  title?: string;
}
const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <div className="lg:py flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10">
      <PageHead title={title} />
      <section className="max-w-screen-2xl p-6 2xl:container">
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
