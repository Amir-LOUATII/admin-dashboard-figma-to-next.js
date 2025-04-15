import DashboardDropdownFilter from "./dashboard-dropdown-filter";
import EarningsChart from "./earnings-chart";
import PaymentIssuesChart from "./payment-issues";
import SuccessRate from "./success-rate";
import Title from "./title";

export default function Dashboard() {
  return (
    <div className="w-full overflow-hidden px-9 pt-3">
      <Title />
      <DashboardDropdownFilter />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <EarningsChart />

          <div className="grid grid-cols-2 gap-8">
            <SuccessRate successful={150} unsuccessful={1} />

            <PaymentIssuesChart />
          </div>
        </div>
      </div>
    </div>
  );
}
