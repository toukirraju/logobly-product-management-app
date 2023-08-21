import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProductMutation } from "../../../redux/features/products/productApi";
import { clearError } from "../../../redux/features/errorSlice";

const useUpdateProduct = ({ selectedProduct, isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.serverError);
  const [initialValues, setInitialValues] = useState({
    ...selectedProduct,
  });

  const [updateProduct, { isSuccess, isLoading }] = useUpdateProductMutation();

  useEffect(() => {
    setInitialValues({ ...selectedProduct });
  }, [isModalOpen, selectedProduct]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInitialValues({
      ...initialValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());
    // eslint-disable-next-line no-unused-vars
    const { image, ...others } = initialValues || {};
    updateProduct(others);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(false);
    }
  }, [isSuccess]);
  return { handleSubmit, handleChange, initialValues, error, isLoading };
};

export default useUpdateProduct;
