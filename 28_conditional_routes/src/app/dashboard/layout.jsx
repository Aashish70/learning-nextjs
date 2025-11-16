export default function parallelRoutes({
  children,
  users,
  revenue,
  notification,
  login,
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </div>
  ) : ( login );
}
