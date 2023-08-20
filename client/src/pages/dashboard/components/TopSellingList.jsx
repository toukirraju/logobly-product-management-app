import { moreHorizontal } from "../../../assets";

const TopSellingList = () => {
  return (
    <div className="card w-full md:w-4/12 ">
      <div className="flex justify-between items-center px-2 mb-6">
        <span className="text-lg font-semibold">Top selling Products</span>
        <img src={moreHorizontal} alt="" />
      </div>
      {/* product list 1 */}
      <div className="flex my-2 px-2 gap-4">
        <img
          className="h-[80px] w-[80px] object-cover rounded"
          src="https://images.unsplash.com/photo-1678059285316-f69c45482d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div>
          <span className="text-[16px] text-gray-700">MacBook Pro M2</span>
          <div className="flex gap-2 my-1.5">
            {Array(Number(4))
              .fill()
              .map((_, index) => {
                return (
                  <div key={index}>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                );
              })}
          </div>
          <span className="text-[16px] text-gray-700">$1,200.00</span>
        </div>
      </div>
      <hr />
      {/* product list 2 */}
      <div className="flex my-2 px-2 gap-4">
        <img
          className="h-[80px] w-[80px] object-cover rounded"
          src="https://images.unsplash.com/photo-1678059285316-f69c45482d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div>
          <span className="text-[16px] text-gray-700">MacBook Pro M2</span>
          <div className="flex gap-2 my-1.5">
            {Array(Number(4))
              .fill()
              .map((_, index) => {
                return (
                  <div key={index}>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                );
              })}
          </div>
          <span className="text-[16px] text-gray-700">$1,200.00</span>
        </div>
      </div>
      <hr />
      {/* product list 3 */}
      <div className="flex my-2 px-2 gap-4">
        <img
          className="h-[80px] w-[80px] object-cover rounded"
          src="https://images.unsplash.com/photo-1678059285316-f69c45482d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div>
          <span className="text-[16px] text-gray-700">MacBook Pro M2</span>
          <div className="flex gap-2 my-1.5">
            {Array(Number(4))
              .fill()
              .map((_, index) => {
                return (
                  <div key={index}>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                );
              })}
          </div>
          <span className="text-[16px] text-gray-700">$1,200.00</span>
        </div>
      </div>
      <hr />
      {/* product list 4 */}
      <div className="flex my-2 px-2 gap-4">
        <img
          className="h-[80px] w-[80px] object-cover rounded"
          src="https://images.unsplash.com/photo-1678059285316-f69c45482d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div>
          <span className="text-[16px] text-gray-700">MacBook Pro M2</span>
          <div className="flex gap-2 my-1.5">
            {Array(Number(4))
              .fill()
              .map((_, index) => {
                return (
                  <div key={index}>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                );
              })}
          </div>
          <span className="text-[16px] text-gray-700">$1,200.00</span>
        </div>
      </div>
    </div>
  );
};

export default TopSellingList;
