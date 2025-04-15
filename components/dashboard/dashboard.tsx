import React from "react";
import Title from "./title";
import EarningsChart from "./earnings-chart";
import SuccessRate from "./success-rate";
import PaymentIssues from "./payment-issues";

export default function Dashboard() {
  return (
    <div className="w-full overflow-hidden px-9 pt-3">
      <Title />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <EarningsChart />

          <div className="grid grid-cols-2 gap-8">
            <SuccessRate successful={150} unsuccessful={1} />

            <PaymentIssues />
          </div>
        </div>
      </div>
    </div>
  );
}
