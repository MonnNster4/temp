import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";
import { Table } from "flowbite-react";
import { IoMdPersonAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
import Modal from "../components/Modal";

// const Product = ({ product }) => {

function Product() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <nav className=" ">
        <div className="flex justify-between pb-1 pt-8 px-3 mr-12 ml-5 md:ml-[320px]">
          <div className="flex flex-col ">
            <ol className="flex flex-row w-24">
              <li>
                <a className="text-gray-400 text-sm text-[14.3px] cursor-pointer">
                  Pages
                </a>
              </li>
              <span className="mx-2 ">/</span>
              <li className="text-sm mt-[0.21rem]">Tables</li>
            </ol>

            <h6 className="font-bold leading-6 text-[17px] mb-0 text-secondary  w-40 ">
              Candidate
            </h6>
          </div>
          <div className="text-primary">
            <IoMdPersonAdd
              onClick={() => setShowModal(true)}
              size={17}
              className="mt-4 cursor-pointer"
            />
          </div>
        </div>
      </nav>
      <div className="overflow-x-auto m-5 md:ml-[320px] mt-[3.5rem] mr-[1.5rem] md:mr-[2.5rem] rounded-2xl shadow-md ">
        <Table striped className="p-4 ">
          <Table.Head className="p-2 text-tertiary text-[0.70rem]">
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Creation date</Table.HeadCell>
            <Table.HeadCell>Date of birth</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Type of Candidate</Table.HeadCell>
            <Table.HeadCell>Language</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-[12.5px]">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"1"}
              </Table.Cell>
              <Table.Cell>Jeremiah Monfiel</Table.Cell>
              <Table.Cell>
                {" "}
                <div className="bg-[#20c934]  w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active{" "}
                </div>
              </Table.Cell>
              <Table.Cell>24/03/11</Table.Cell>
              <Table.Cell>99/04/01</Table.Cell>
              <Table.Cell>Laspinas, 509 Moonwalk, 1475</Table.Cell>
              <Table.Cell>monfiel@gmail.com</Table.Cell>
              <Table.Cell>09270147892</Table.Cell>
              <Table.Cell>Temporary</Table.Cell>
              <Table.Cell>Filipino</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500  flex gap-2"
                >
                  <MdEdit
                    size={15}
                    className="cursor-pointer"
                    onClick={() => setShowModal(true)}
                  />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                2
              </Table.Cell>
              <Table.Cell>Dave Falo</Table.Cell>
              <Table.Cell>
                <div className="bg-[#6c757d] from-red-300 via-red-600 to-red-900 w-16 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Inactive
                </div>
              </Table.Cell>
              <Table.Cell>24/01/01</Table.Cell>
              <Table.Cell>91/09/24</Table.Cell>
              <Table.Cell>Batangas City, 1475</Table.Cell>
              <Table.Cell>davefalo@gmail.com</Table.Cell>
              <Table.Cell>09272940124</Table.Cell>
              <Table.Cell>Permanent</Table.Cell>
              <Table.Cell>Filipino</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                3
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                {" "}
                <div className="bg-[#6c757d] from-red-300 via-red-600 to-red-900 w-16 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Inactive
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                4
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                {" "}
                <div className="bg-[#20c934] w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                5
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                <div className="bg-[#20c934]  w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                6
              </Table.Cell>
              <Table.Cell>Dave Falo</Table.Cell>
              <Table.Cell>
                <div className="bg-[#6c757d] from-red-300 via-red-600 to-red-900 w-16 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Inactive
                </div>
              </Table.Cell>
              <Table.Cell>24/01/01</Table.Cell>
              <Table.Cell>91/09/24</Table.Cell>
              <Table.Cell>Batangas City, 1475</Table.Cell>
              <Table.Cell>davefalo@gmail.com</Table.Cell>
              <Table.Cell>09272940124</Table.Cell>
              <Table.Cell>Permanent</Table.Cell>
              <Table.Cell>Filipino</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                7
              </Table.Cell>
              <Table.Cell>Dave Falo</Table.Cell>
              <Table.Cell>
                <div className="bg-[#6c757d] from-red-300 via-red-600 to-red-900 w-16 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Inactive
                </div>
              </Table.Cell>
              <Table.Cell>24/01/01</Table.Cell>
              <Table.Cell>91/09/24</Table.Cell>
              <Table.Cell>Batangas City, 1475</Table.Cell>
              <Table.Cell>davefalo@gmail.com</Table.Cell>
              <Table.Cell>09272940124</Table.Cell>
              <Table.Cell>Permanent</Table.Cell>
              <Table.Cell>Filipino</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                8
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                <div className="bg-[#20c934]  w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                9
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                <div className="bg-[#20c934]  w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                10
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                <div className="bg-[#20c934]  w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      {/* <div className="overflow-x-auto m-5 md:ml-[320px] mt-[3.5rem] mr-[1.5rem] md:mr-[2.5rem]  rounded-2xl shadow-md ">
        <Table striped className="p-4 ">
          <Table.Head className="p-2 text-tertiary text-[0.70rem]">
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Creation date</Table.HeadCell>
            <Table.HeadCell>Date of birth</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Type of Candidate</Table.HeadCell>
            <Table.HeadCell>Language</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-[12.5px]">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"1"}
              </Table.Cell>
              <Table.Cell>Jeremiah Monfiel</Table.Cell>
              <Table.Cell>
                {" "}
                <div className="bg-[#20c934]  w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active{" "}
                </div>
              </Table.Cell>
              <Table.Cell>24/03/11</Table.Cell>
              <Table.Cell>99/04/01</Table.Cell>
              <Table.Cell>Laspinas, 509 Moonwalk, 1475</Table.Cell>
              <Table.Cell>monfiel@gmail.com</Table.Cell>
              <Table.Cell>09270147892</Table.Cell>
              <Table.Cell>Temporary</Table.Cell>
              <Table.Cell>Filipino</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                2
              </Table.Cell>
              <Table.Cell>Dave Falo</Table.Cell>
              <Table.Cell>
                <div className="bg-[#6c757d] from-red-300 via-red-600 to-red-900 w-16 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Inactive
                </div>
              </Table.Cell>
              <Table.Cell>24/01/01</Table.Cell>
              <Table.Cell>91/09/24</Table.Cell>
              <Table.Cell>Batangas City, 1475</Table.Cell>
              <Table.Cell>davefalo@gmail.com</Table.Cell>
              <Table.Cell>09272940124</Table.Cell>
              <Table.Cell>Permanent</Table.Cell>
              <Table.Cell>Filipino</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                3
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                {" "}
                <div className="bg-[#6c757d] from-red-300 via-red-600 to-red-900 w-16 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Inactive
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                4
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                {" "}
                <div className="bg-[#20c934] w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                5
              </Table.Cell>
              <Table.Cell>Jeff Bongcayao</Table.Cell>
              <Table.Cell>
                <div className="bg-[#20c934]  w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                  Active
                </div>
              </Table.Cell>
              <Table.Cell>24/09/25</Table.Cell>
              <Table.Cell>98/07/21</Table.Cell>
              <Table.Cell>New york, 0008</Table.Cell>
              <Table.Cell>jeffbongcayao@gmail.com</Table.Cell>
              <Table.Cell>22-506-301</Table.Cell>
              <Table.Cell>Immigration</Table.Cell>
              <Table.Cell>English</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex gap-2"
                >
                  <MdEdit size={15} className="cursor-pointer" />
                  <RiDeleteBin6Fill size={15} className="cursor-pointer" />
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div> */}
    </>
  );
}

export default Product;
