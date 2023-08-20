/* eslint-disable react/prop-types */
import { Modal } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { folderAddIcon } from "../../../assets";
import InputField from "../../../components/InputField";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../../../redux/features/errorSlice";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../../redux/features/products/productApi";
import readFileAsBase64 from "../../../../../app/utils/readFileAsBase64";

const UpdateProduct = ({
  isModalOpen,
  setIsModalOpen,
  selectedProduct = {},
}) => {
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    ...selectedProduct,
  });

  const [updateProduct, { isSuccess }] = useUpdateProductMutation();

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
    const { image, ...others } = initialValues || {};
    updateProduct(others);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(false);
    }
  }, [isSuccess]);

  return (
    <Modal
      classNames={{
        title: "text-[24px] font-semibold text-gray-900 px-4",
      }}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="lg"
      opened={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Add Product"
    >
      <form className="px-4" onSubmit={handleSubmit}>
        <InputField
          label="Product Title"
          type="text"
          name="name"
          value={initialValues.name}
          onChange={handleChange}
          required
          placeholder="Enter your product title"
        />
        <InputField
          fieldType="textarea"
          label="Product Description"
          type="text"
          name="description"
          value={initialValues.description}
          onChange={handleChange}
          required
          placeholder="Tell us about your home here"
        />

        <div>
          <label className="font-semibold">Product Added Date</label>
          <div className="my-1">
            <input
              className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-2 "
              type="date"
              name="addedDate"
              value={initialValues.addedDate}
              onChange={handleChange}
              required
              placeholder="Tell us about your home here"
            />
          </div>
        </div>

        <InputField
          label="Stock"
          type="number"
          name="quantity"
          value={initialValues.quantity}
          onChange={handleChange}
          required
          placeholder="Enter your stock"
        />

        <InputField
          label="Purchase Price"
          type="number"
          name="purchasePrice"
          value={initialValues.purchasePrice}
          onChange={handleChange}
          required
          placeholder="Enter your purchase price"
        />

        <InputField
          label="Selling Price"
          type="number"
          name="sellingPrice"
          value={initialValues.sellingPrice}
          onChange={handleChange}
          required
          placeholder="Enter your selling price"
        />
        <div className="w-full flex justify-between py-4 gap-2">
          <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
            Cancel
          </button>
          <button className="btn_primary w-full py-2">Save</button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateProduct;
