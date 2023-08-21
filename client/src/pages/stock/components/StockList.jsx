import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";
import moment from "moment";
import { edit2Icon, trashIcon } from "../../../assets";
import {
  useDeleteProductMutation,
  useFetchProductsQuery,
} from "../../../redux/features/products/productApi";
import { useDispatch, useSelector } from "react-redux";
import { apiSlice } from "../../../redux/api/apiSlice";
import { getProducts } from "../../../redux/features/products/productSlice";
import UpdateProduct from "./UpdateProduct";
import ServerError from "../../../components/ServerError";
// const products = [
//   {
//     id: "#27544323",
//     name: "MacBook Pro M2",
//     productAddedDate: "Today, 19:40",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#275443235",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#275443234",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#2754432334",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#2754432356",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#2754432334",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#27544323745",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#27544323456",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#2754432334564",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#275443238",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#27544323465",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#27544323456",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#27544323465",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
//   {
//     id: "#27544323456",
//     name: "MacBook Pro M2",
//     productAddedDate: "Jan6, 2022",
//     stock: 12,
//     productSold: 5,
//     purchasePrice: 1400000,
//     sellingPrice: 1500000,
//     productImage:
//       "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//   },
// ];

const StockList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteProduct] = useDeleteProductMutation();
  const error = useSelector((state) => state.serverError);
  const { user } = useSelector((state) => state.auth);

  const { pagination, products } = useSelector((state) => state.products);

  const PAGE_SIZE = 4;
  const [records, setRecords] = useState(products.slice(0, PAGE_SIZE));

  useEffect(() => {
    setFetching(true);
    dispatch(
      apiSlice.endpoints.fetchProducts.initiate({ page: page, limit: 4 })
    )
      .unwrap()
      .then(({ payload }) => {
        dispatch(
          getProducts({
            pagination: payload.pagination,
            products: payload.products,
          })
        );
        setFetching(false);
      });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE;
      setRecords(products.slice(from, to));
    }
  }, [page, products, products.length]);

  useEffect(() => {
    if (page === pagination?.nextPage) {
      setFetching(true);
      dispatch(
        apiSlice.endpoints.fetchProducts.initiate({
          page: pagination?.nextPage,
          limit: 4,
        })
      )
        .unwrap()
        .then(({ payload }) => {
          dispatch(
            getProducts({
              pagination: payload.pagination,
              products: payload.products,
            })
          );
          setFetching(false);
        });
    }
  }, [page]);

  //delete product
  const handleDelete = (row) => {
    deleteProduct(row.slug);
  };

  //update product
  const handleUpdate = (row) => {
    setSelectedProduct(row);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full h-[calc(100vh-290px)] overflow-y-auto">
      {error && <ServerError message={error?.data?.message} />}
      <DataTable
        rowStyle={{ height: "72px", color: "#667085" }}
        records={records}
        fetching={fetching}
        columns={[
          {
            accessor: "name",
            title: "Name",
            width: 250,
            render: ({ name, image }) => {
              return (
                <div className="flex items-center gap-3">
                  <img
                    className="h-[50px] w-[50px] object-cover rounded"
                    src={image}
                    alt=""
                  />
                  <span>{name}</span>
                </div>
              );
            },
          },
          {
            accessor: "createdAt",
            title: "Product Added",
            render: ({ createdAt }) => <>{moment(createdAt).calendar()}</>,
          },

          {
            accessor: "quantity",
            title: "Stock",
            width: 250,
            render: ({ quantity, sold }) => (
              <div className="flex items-center gap-5">
                <span>{quantity}</span>
                <span className="py-1 px-4 border rounded-2xl text-sm font-semibold text-blue-700">
                  {Number(quantity) - Number(sold)} Left
                </span>
              </div>
            ),
          },

          {
            accessor: "purchasePrice",
            title: "Purchase",
            // width: 200,
          },
          {
            accessor: "sellingPrice",
            title: "Selling",
            // width: 200,
          },
          {
            accessor: "_id",
            title: "",
            render: (row) => (
              <>
                {user.isAdmin && (
                  <div className="flex items-center justify-center gap-6">
                    <img
                      className="p-1 rounded-md bg-red-200 hover:cursor-pointer hover:bg-red-400"
                      src={trashIcon}
                      alt=""
                      onClick={() => handleDelete(row)}
                    />
                    <img
                      className="p-1 rounded-md bg-blue-200 hover:cursor-pointer hover:bg-blue-400"
                      src={edit2Icon}
                      alt=""
                      onClick={() => handleUpdate(row)}
                    />
                  </div>
                )}
              </>
            ),
          },
        ]}
        totalRecords={pagination?.totalNumberOfProducts}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
      <UpdateProduct
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default StockList;
