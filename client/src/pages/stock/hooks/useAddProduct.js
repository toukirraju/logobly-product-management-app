import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateProductMutation } from "../../../redux/features/products/productApi";
import { clearError } from "../../../redux/features/errorSlice";
import readFileAsBase64 from "../../../../../app/utils/readFileAsBase64";

const useAddProduct = ({ setIsModalOpen }) => {
  const error = useSelector((state) => state.serverError);
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    purchasePrice: 0,
    sellingPrice: 0,
    quantity: 0,
    addedDate: "",
    image: null,
  });

  const resetForm = () => {
    setInitialValues({
      name: "",
      description: "",
      purchasePrice: 0,
      sellingPrice: 0,
      quantity: 0,
      addedDate: "",
      image: null,
    });
  };

  const [createProduct, { isSuccess, isLoading }] = useCreateProductMutation();

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

    if (initialValues.image) {
      try {
        const base64Data = await readFileAsBase64(initialValues.image);
        createProduct({ ...initialValues, image: base64Data });
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(false);
      resetForm();
    }
  }, [isSuccess]);
  return {
    initialValues,
    handleSubmit,
    handleChange,
    setInitialValues,
    isLoading,
    error,
  };
};

export default useAddProduct;
