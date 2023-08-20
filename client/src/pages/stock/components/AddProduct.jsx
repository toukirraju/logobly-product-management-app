/* eslint-disable react/prop-types */
import { Modal } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { folderAddIcon } from "../../../assets";
import InputField from "../../../components/InputField";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../../../redux/features/errorSlice";
import { useCreateProductMutation } from "../../../redux/features/products/productApi";
import readFileAsBase64 from "../../../../../app/utils/readFileAsBase64";

const AddProduct = ({ isModalOpen, setIsModalOpen }) => {
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

  const [createProduct, { isSuccess, isError }] = useCreateProductMutation();

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
          <div className="flex flex-col gap-1 mb-3">
            <span className="font-semibold">Add Media</span>
            <span className="text-[12px] text-gray-500">
              Add up to 50 images to your product image, videos.
            </span>
          </div>
          <div className="my-1">
            <Dropzone
              onDrop={(files) =>
                setInitialValues({ ...initialValues, image: files[0] })
              }
              accept={["image/png", "image/jpeg", "image/jpg"]}
              classNames={{
                root: "bg-indigo-500 bg-opacity-10 border border-indigo-500",
              }}
            >
              {initialValues.image ? (
                <>
                  <img
                    src={URL.createObjectURL(initialValues.image)}
                    alt={initialValues.image.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      marginRight: "10px",
                    }}
                  />
                </>
              ) : (
                <div className="flex flex-col justify-between items-center p-4">
                  <img
                    className="bg-indigo-500  p-2 rounded-full bg-opacity-20"
                    src={folderAddIcon}
                    alt=""
                  />
                  <span>
                    Drag and drop files, or{" "}
                    <strong className="text-indigo-500">Browse</strong>
                  </span>
                  <span className="text-[12px] text-gray-500">
                    Support image and videos
                  </span>
                </div>
              )}
            </Dropzone>
          </div>
        </div>

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

export default AddProduct;
