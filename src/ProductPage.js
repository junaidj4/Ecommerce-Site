import React from "react";
import Template_intro from "./components/Template_intro";
import TemplateDetails from "./components/TemplateDetails";
import MainHighlights from "./components/MainHighlights";
import Suggested from "./components/Suggested";
const ProductPage = () => {
  return (
    <>
      <div>
        <Template_intro />
        <TemplateDetails />
        <MainHighlights />
        <Suggested />
      </div>
    </>
  );
};

export default ProductPage;
