import React from "react";
import Link from "next/link";
import "../dash.css";
const Navigation = () => {
  return (
    <div className="dash">
      <h1>dashboard</h1>
      <Link href="/dashboard/setting">go to setting</Link>
      <Link href="/homePage">back to home page</Link>
    </div>
  );
};

export default Navigation;
