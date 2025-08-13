import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashboardLayout;
