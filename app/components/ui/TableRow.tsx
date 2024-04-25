"use client";

import { useIdStore, useModalStore } from "@/lib/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

interface Props {
  message: ContactType;
}

const TableRow: NextPage<Props> = ({ message }) => {
  const { modal, setModal } = useModalStore();
  const { id, setId } = useIdStore();

  const handleModal = (id: string) => {
    setId(id);
  };

  console.log(id);

  const { data, isLoading } = useQuery<ContactType>({
    queryKey: ["contact-id", id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/message/${id}`);

      return data.messages;
    },

    enabled: id ? true : false,
  });

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">
          {message.firstName} {message.lastName}
        </td>
        <td className="px-6 py-4">{message.email}</td>
        <td className="px-6 py-4">{message.phone}</td>
        <td className="px-6 py-4">{message.company}</td>
        <td className="px-6 py-4">${message.role}</td>
        <td className="px-6 py-4">{message.projectDesign}</td>
        <td className="px-6 py-4">{message.productBudget}</td>
        <td className="px-6 py-4 flex items-center gap-4">
          <Link
            href={`mailto:${message.email}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Reply
          </Link>

          <span
            onClick={() => {
              setModal();
              handleModal(message.id);
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
          >
            Details
          </span>
        </td>
      </tr>

      {/* conatct details modal */}

      <tr
        onClick={() => setModal()}
        id="default-modal"
        className={`${
          modal ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-start w-full md:inset-0 h-screen max-h-full bg-slate-500/10`}
      >
        <div className="relative pt-12 w-full max-w-2xl max-h-full">
          <div
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="relative bg-white rounded-lg dark:bg-gray-700"
          >
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-2xl text-gray-900 dark:text-white">
                Message Details
              </h3>
              <button
                onClick={() => {
                  setModal();
                  setId("");
                }}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              {isLoading ? (
                <div className="min-h-24">
                  <p className="text-xl text-center">Loading...</p>
                </div>
              ) : (
                <>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Full Name: </span>
                    {data?.firstName} {data?.lastName}
                  </p>

                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Email: </span>
                    {data?.email}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Phone: </span>
                    {data?.phone}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Company: </span>
                    {data?.company}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Role: </span>
                    {data?.role}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Project Design: </span>
                    {data?.projectDesign}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Product Description: </span>
                    {data?.productDescription}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Product Budget: </span>
                    {data?.productBudget}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </tr>
    </>
  );
};

export default TableRow;
