import React, { Children } from "react";

function ProtectedRoute() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to="home" />;
  }
  return children;
}
export default ProtectedRoute;
