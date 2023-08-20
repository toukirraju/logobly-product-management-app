import { DataTable } from "mantine-datatable";
import { moreHorizontal } from "../../../assets";

const RecentOrders = () => {
  return (
    <div className="card w-full md:w-8/12 flex flex-col">
      <div className="flex justify-between items-center lg:px-2 mb-3">
        <span className="text-lg font-semibold">Recent Orders</span>
        <img src={moreHorizontal} alt="" />
      </div>
      <DataTable
        className="w-full"
        withColumnBorders
        records={[
          {
            trackingNo: "#874353",
            productName: "MacBook Pro M2",
            perProductPrice: 120000,
            quantity: 12,
            totalPrice: 1400000,
          },
          {
            trackingNo: "#874357",
            productName: "Iphone 14 Pro Max",
            perProductPrice: 120000,
            quantity: 12,
            totalPrice: 1400000,
          },
          {
            trackingNo: "#874359",
            productName: "ipad pro 2022",
            perProductPrice: 120000,
            quantity: 12,
            totalPrice: 1400000,
          },
          {
            trackingNo: "#874355",
            productName: "Imac 2022",
            perProductPrice: 120000,
            quantity: 12,
            totalPrice: 1400000,
          },
          {
            trackingNo: "#874359",
            productName: "Apple Smart Watch",
            perProductPrice: 120000,
            quantity: 12,
            totalPrice: 1400000,
          },
          {
            trackingNo: "#874352",
            productName: "MacBook Pro M2",
            perProductPrice: 120000,
            quantity: 12,
            totalPrice: 1400000,
          },
          {
            trackingNo: "#874351",
            productName: "Iphone 13 Pro Max",
            perProductPrice: 120000,
            quantity: 12,
            totalPrice: 1400000,
          },
        ]}
        columns={[
          {
            accessor: "trackingNo",
            title: "Tracking no",
            width: "40%",
            sortable: true,
          },
          { accessor: "productName", title: "Name", width: "60%" },
          {
            accessor: "perProductPrice",
            title: "Price",
            width: 160,
            sortable: true,
          },
          { accessor: "quantity", title: "Total Order", sortable: true },
          { accessor: "totalPrice", title: "Total Amount", sortable: true },
        ]}
      />
    </div>
  );
};

export default RecentOrders;
