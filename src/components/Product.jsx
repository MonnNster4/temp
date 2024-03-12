import React, { useCallback, useContext } from "react";

import { Table } from "flowbite-react";
import { IoMdPersonAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../components/Modal";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import { useEffect, useState } from "react";
import axios from "axios";

function Product({}) {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const [candidates, setCandidates] = useState([]);
  const [deleteid, setdDeleteId] = useState("");
  const [editid, setdEditId] = useState("");

  const fetchData =
    useCallback(async () => {
      try {
        const result = await axios.get(
          "http://localhost:1993/api/get_candidate"
        );
        setCandidates(result.data.item);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [candidates]);

  useEffect(() => {
    return () => fetchData();
  }, []);

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
            {candidates.length > 0
              ? candidates.map((item, key) => {
                  return (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={item.ID}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item.ID}
                      </Table.Cell>
                      <Table.Cell>{item.Name}</Table.Cell>
                      <Table.Cell>
                        {" "}
                        <div className="bg-[#20c934]  w-14 h-5 rounded-md flex justify-center items-center text-white uppercase font-bold text-[10.5px] ">
                          {item.Status}
                        </div>
                      </Table.Cell>
                      <Table.Cell>{item.CreationDate}</Table.Cell>
                      <Table.Cell>{item.DOB}</Table.Cell>
                      <Table.Cell>{item.Address}</Table.Cell>
                      <Table.Cell>{item.Email}</Table.Cell>
                      <Table.Cell>{item.Phone}</Table.Cell>
                      <Table.Cell>{item.TypeCandidate}</Table.Cell>
                      <Table.Cell>{item.Comments}</Table.Cell>
                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500  flex gap-2"
                        >
                          <MdEdit
                            size={15}
                            className="cursor-pointer"
                            onClick={() => setShowModalEdit(item) || setdEditId(item)}
                          />
                          <RiDeleteBin6Fill
                            size={15}
                            className="cursor-pointer"
                            onClick={() =>
                              setShowModalTwo(true) || setdDeleteId(item)
                            }
                          />
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              : null}
          </Table.Body>
        </Table>
      </div>
      <Modal
        data={candidates}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
      <ModalEdit
        isVisible={showModalEdit}
        onClose={() => setShowModalEdit(false)}
        data={editid}
      />
      <ModalDelete
        isVisible={showModalTwo}
        onClose={() => setShowModalTwo(false)}
        data={deleteid}
      />
    </>
  );
}

export default Product;
