import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";
import { edit2Icon, trashIcon } from "../../../assets";
const products = [
  {
    id: "#27544323",
    productName: "MacBook Pro M2",
    productAddedDate: "Today, 19:40",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#275443235",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#275443234",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#2754432334",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#2754432356",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#2754432334",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#27544323745",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#27544323456",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#2754432334564",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#275443238",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#27544323465",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#27544323456",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#27544323465",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "#27544323456",
    productName: "MacBook Pro M2",
    productAddedDate: "Jan6, 2022",
    stock: 12,
    productSold: 5,
    purchasePrice: 1400000,
    sellingPrice: 1500000,
    productImage:
      "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
];

const StockList = () => {
  const PAGE_SIZE = 9;
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(products.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(products.slice(from, to));
  }, [page]);
  return (
    <div className="w-full h-[calc(100vh-290px)] overflow-y-auto">
      <DataTable
        rowStyle={{ height: "72px", color: "#667085" }}
        records={records}
        columns={[
          {
            accessor: "productName",
            title: "Name",
            width: 250,
            render: ({ productName, productImage }) => (
              <div className="flex items-center gap-3">
                <img
                  className="h-[50px] w-[50px] object-cover rounded"
                  src={productImage}
                  alt=""
                />
                <span>{productName}</span>
              </div>
            ),
          },
          {
            accessor: "productAddedDate",
            title: "Product Added",
            sortable: true,
            // width: 200,
          },

          {
            accessor: "stock",
            title: "Stock",
            width: 250,
            render: ({ stock, productSold }) => (
              <div className="flex items-center gap-5">
                <span>{stock}</span>
                <span className="py-1 px-4 border rounded-2xl text-sm font-semibold text-blue-700">
                  {productSold} Left
                </span>
              </div>
            ),
          },

          {
            accessor: "purchasePrice",
            title: "Purchase",
            // width: 200,
            sortable: true,
          },
          {
            accessor: "sellingPrice",
            title: "Selling",
            // width: 200,
            sortable: true,
          },
          {
            accessor: "id",
            title: "",
            render: (row) => (
              <div className="flex items-center justify-center gap-6">
                <img src={trashIcon} alt="" />
                <img src={edit2Icon} alt="" />
              </div>
            ),
          },
        ]}
        totalRecords={products.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
};

export default StockList;
