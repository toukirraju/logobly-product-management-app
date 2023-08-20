import BestSellerCard from "./components/BestSellerCard";
import TransactionsCard from "./components/TransactionsCard";
import ProfitChart from "./components/ProfitChart";
import BalanceReport from "./components/BalanceReport";
import WeeklyOverviewChart from "./components/WeeklyOverviewChart";
import RecentOrders from "./components/RecentOrders";
import TopSellingList from "./components/TopSellingList";

const Dashboard = () => {
  return (
    <>
      {/* card section start */}
      <div className="w-full py-4 px-6 flex flex-col md:flex-row justify-between gap-4 ">
        <BestSellerCard />
        <TransactionsCard />
      </div>

      {/* chart section start */}
      <div className="w-full py-2 px-6 flex justify-between flex-col lg:flex-row gap-4 ">
        <div className="card w-full md:w-8/12 flex flex-col lg:flex-row">
          {/* total profit chart  */}
          <ProfitChart />

          {/* balance report view */}
          <BalanceReport />
        </div>

        {/* weekly overview */}
        <WeeklyOverviewChart />
      </div>

      {/* table section start */}
      <div className="w-full py-2 px-6 flex justify-between flex-col lg:flex-row gap-4 ">
        {/* recent order table  */}
        <RecentOrders />
        {/* top selling products */}
        <TopSellingList />
      </div>
    </>
  );
};

export default Dashboard;
