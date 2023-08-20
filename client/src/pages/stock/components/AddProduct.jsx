/* eslint-disable react/prop-types */
import { Modal } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { folderAddIcon } from "../../../assets";

const AddProduct = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      classNames={{
        title: "text-[24px] font-semibold text-gray-900",
      }}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="lg"
      opened={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Add Product"
    >
      <form>
        <div>
          <label className="font-semibold">Product Title</label>
          <div className="my-1">
            <input
              className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-2 "
              type="text"
              name=""
              id=""
              placeholder="Enter your product title"
            />
          </div>
        </div>
        <div>
          <label className="font-semibold">Product Description</label>
          <div className="my-1">
            <textarea
              className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-2 "
              type="text"
              name=""
              id=""
              placeholder="Tell us about your home here"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-1 mb-3">
            <span className="font-semibold">Add Media</span>
            <span className="text-[12px] text-gray-500">
              Add up to 50 images to your product image, videos.
            </span>
          </div>
          <div className="my-1">
            <Dropzone
              classNames={{
                root: "bg-indigo-500 bg-opacity-10 border border-indigo-500",
              }}
            >
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
            </Dropzone>
          </div>
        </div>

        <div>
          <label className="font-semibold">Product Added Date</label>
          <div className="my-1">
            <input
              className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-2 "
              type="date"
              name=""
              id=""
              placeholder="Tell us about your home here"
            />
          </div>
        </div>
        <div>
          <label className="font-semibold">Stock</label>
          <div className="my-1">
            <input
              className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-2 "
              type="number"
              name=""
              id=""
              placeholder="Enter your stock"
            />
          </div>
        </div>
        <div>
          <label className="font-semibold">Purchase Price</label>
          <div className="my-1">
            <input
              className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-2 "
              type="number"
              name=""
              id=""
              placeholder="Enter your purchase price"
            />
          </div>
        </div>
        <div>
          <label className="font-semibold">Selling Price</label>
          <div className="my-1">
            <input
              className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-2 "
              type="number"
              name=""
              id=""
              placeholder="Enter your selling price"
            />
          </div>
        </div>
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
