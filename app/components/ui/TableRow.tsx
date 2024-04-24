"use client";

import { NextPage } from "next";
import Link from "next/link";

interface Props {
  message: ContactType;
}

const TableRow: NextPage<Props> = ({ message }) => {
  const handleModal = (id: string) => {
    console.log(id);
  };

  return (
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
          onClick={() => handleModal(message.id)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
        >
          Details
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
