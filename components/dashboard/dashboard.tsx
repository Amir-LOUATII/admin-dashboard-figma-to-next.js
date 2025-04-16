import DashboardDropdownFilter from "./dashboard-dropdown-filter";
import EarningsChart from "./earnings-chart";
import Messages from "./messages";
import PaymentIssuesChart from "./payment-issues";
import SuccessRate from "./success-rate";
import Title from "./title";

export default function Dashboard() {
  return (
    <div className="w-full overflow-hidden px-9 pt-3">
      <div className="flex justify-between items-start  gap-8 w-full">
        <div className=" p-6 rounded-lg  flex-1">
          <Title />
          <DashboardDropdownFilter />
          <EarningsChart />

          <div className="grid grid-cols-2 gap-8 mt-14 ">
            <SuccessRate successful={150} unsuccessful={1} />

            <PaymentIssuesChart />
          </div>
        </div>
        <Messages />
      </div>
    </div>
  );
}
