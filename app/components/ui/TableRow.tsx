import { NextPage } from "next";
import Link from "next/link";

interface Props {
  data: ContactType;
}

const TableRow: NextPage<Props> = ({ data }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">
        {data.firstName} {data.lastName}
      </td>
      <td className="px-6 py-4">{data.email}</td>
      <td className="px-6 py-4">{data.phone}</td>
      <td className="px-6 py-4">{data.company}</td>
      <td className="px-6 py-4">${data.role}</td>
      <td className="px-6 py-4">{data.projectDesign}</td>
      <td className="px-6 py-4">{data.productBudget}</td>
      <td className="px-6 py-4 flex items-center gap-4">
        <Link
          href={`mailto:${data.email}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Reply
        </Link>

        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={`/contact/${data.id}`}
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
