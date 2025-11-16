// import UserAnalytics from "/path-to-component";
// import RevenueAnalytics from "/path-to-component";
// import Notification from "/path-to-component";

//this is traditional way to make complex dashboard
export default function ComplexDashboardLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      {/* <UserAnalytics />
      <RevenueAnalytics />
      <Notification /> */}
    </>
  );
}
