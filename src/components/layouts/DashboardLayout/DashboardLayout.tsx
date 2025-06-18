import PageHead from "@/components/commons/PageHead";
import { ReactNode, useState } from "react";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";
import { Navbar, NavbarMenuToggle } from "@nextui-org/react";

interface PropTypes {
  children: ReactNode;
  description?: string;
  title?: string;
  type?: string;
}
const DashboardLayout = (props: PropTypes) => {
  const { children, description, title, type = "admin" } = props;
  const [Open, setOpen] = useState(false);
  return (
    <>
      <PageHead title={title} />
      <div className="3-xl:container flex max-w-screen-2xl">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={Open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">
          <Navbar
            className="flex justify-between bg-transparent px-0"
            isBlurred={false}
            classNames={{ wrapper: "p-0" }}
            position="static"
          >
            <h1 className="text-2xl font-bold">{title}</h1>
            <NavbarMenuToggle
              aria-label={Open ? "Close menu" : "Open menu"}
              onPress={() => setOpen(!Open)}
              className="lg:hidden"
            />
          </Navbar>
          <p className="mb-4 text-small">{description}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
