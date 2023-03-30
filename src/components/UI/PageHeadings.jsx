import React from "react";
import { ChartHeading } from "./Headings";
import { Button } from "../Inputs";
import { BsFillPlusCircleFill } from "react-icons/bs";

export const PageHeadingWithAddButton = ({title='', handleAddBtn=()=>{}}) => {
  return (
    <div className="flex justify-between mb-7">
      <ChartHeading className="text-3xl">{title}</ChartHeading>
      <div>
        <Button handleClick={handleAddBtn}>
          Add admin <BsFillPlusCircleFill className="mx-1" />
        </Button>
      </div>
    </div>
  );
};
