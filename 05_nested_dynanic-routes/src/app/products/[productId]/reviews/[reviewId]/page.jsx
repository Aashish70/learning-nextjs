import React from "react";

async function page({ params }) {
  const { productId, reviewId } = await params;
  return <div>
    <h1>Review {reviewId} for product {productId} </h1>
  </div>;
}

export default page;
