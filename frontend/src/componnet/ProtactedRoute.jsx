export default function ProtactedRoute({ children, roles=["admin"] }) {
  // if (localStorage.getItem("user_type") !== "admin") return null;
  return (
    <>{children}</>
  )
}
