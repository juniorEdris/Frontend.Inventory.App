import React from "react";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { PageHeadingWithAddButton } from "../../components/UI/PageHeadings";

const Admins = () => {
  return (
    <div>
        <PageHeadingWithAddButton title="Admins"/>
    </div>
  );
};

export default withHeaderAndSidebar(Admins);
