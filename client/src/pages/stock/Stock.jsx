import StockListHeader from "./components/StockListHeader";
import StockList from "./components/StockList";

const Stock = () => {
  return (
    <div className="card mx-6 my-4 px-0 overflow-hidden">
      <StockListHeader />
      <StockList />
    </div>
  );
};

export default Stock;
