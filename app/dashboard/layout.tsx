import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
