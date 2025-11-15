import React from "react";

async function page({ params }) {
  const { slug } = await params;

  if (slug?.length == 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}{" "}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]} </h1>;
  }
  //agar is file ko [...slug] -> [[...slug]] (optional catch-all-segment) aise kar denge to ye last wali 
  // render hogi joki https://localhost:3000/Docs par dikegi
  return <h1>Docs home page</h1>;
}

export default page;
