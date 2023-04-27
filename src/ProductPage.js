import React from "react";
import Template_intro from "./components/Template_intro";
import TemplateDetails from "./components/TemplateDetails";
import MainHighlights from "./components/MainHighlights";
const ProductPage = () => {
  return (
    <>
      <div>
        <Template_intro />
        <TemplateDetails />
        <MainHighlights />
      </div>
    </>
  );
};

export default ProductPage;
