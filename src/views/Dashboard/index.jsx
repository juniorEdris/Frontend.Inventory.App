import React, { useState } from "react";
import ItemCountCards from "../../components/Cards/ItemCountCards";
import InventoryBar from "../../components/AppCharts/InventoryBar";
import SaleSummaryGraph from "../../components/AppCharts/SaleSummaryGraph";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { allInventories } from "../../utils/uiData";

const Dashboard = () => {
  return (
    <div className="py-4">
      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-2 mb-4">
        {allInventories.map((item, i) => (
          <ItemCountCards
            key={i}
            count={item?.total}
            itemName={item?.label}
            route={item?.route}
            Icon={item?.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <InventoryBar />
        <SaleSummaryGraph />
      </div>
    </div>
  );
};

export default withHeaderAndSidebar(Dashboard);
