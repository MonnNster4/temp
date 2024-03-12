import React, { useEffect, useState } from "react";
import Axios from "axios";

const Modal = ({ isVisible, onClose, updatePage }) => {
  const [inputData, setInputData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios({
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: "http://localhost:1993/api/candidate",
      data: inputData,
    }).then(function (response) {
      onClose();
      updatePage()
    });
  }

  if (!isVisible) return null;

  return (
    <>
      {/* <!-- Modal toggle --> */}
      {/* <div className="flex justify-center m-5">
        <button
          id="defaultModalButton"
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          Create product
        </button>
      </div> */}

      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex z-50  justify-center items-center "
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Candidate
              </h3>
              <button
                onClick={() => onClose()}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body  */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 "
                    onChange={(e) =>
                      setInputData({ ...inputData, Name: e.target.value })
                    }
                    placeholder="Enter candidate name"
                    required
                  />
                </div>

                {/* <div className="relative max-w-sm flex pt-4">
                  <label className="inline-flex items-center  cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Active
                    </span>
                  </label>
                </div> */}

                <div className="relative max-w-sm">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Creation Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        CreationDate: e.target.value,
                      })
                    }
                    placeholder="Creation date"
                    required
                  />
                </div>

                <div className="relative max-w-sm">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        DOB: e.target.value,
                      })
                    }
                    placeholder="Date of birth"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        Address: e.target.value,
                      })
                    }
                    placeholder="Enter address"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        Email: e.target.value,
                      })
                    }
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        Phone: e.target.value,
                      })
                    }
                    placeholder="Enter number"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Type of Candidate
                  </label>
                  <select
                    name="type"
                    id="type"
                    
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        Type: e.target.value,
                      })
                    }
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="">Select category</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Immigration">Immigration</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Language
                  </label>
                  <input
                    type="language"
                    name="language"
                    id="language"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        Language: e.target.value,
                      })
                    }
                    placeholder="Enter language"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Comments
                  </label>
                  <textarea
                    id="Your message"
                    rows="4"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        Comment: e.target.value,
                      })
                    }
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="  text-white bg-gray-700 hover:bg-gray-800 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
