"use client";

import { NextPage } from "next";
import { signOut } from "next-auth/react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between bg-white rounded-lg mb-5 p-4">
          <h2 className="text-3xl text-center">Message Lists</h2>
          <button
            onClick={() => signOut()}
            className="bg-rose-500 hover:bg-rose-600 transition-colors px-3 py-1 rounded-full text-white"
          >
            logout
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Project Design
                </th>
                <th scope="col" className="px-6 py-3">
                  Project Budget
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">3.0 lb.</td>
                <td className="px-6 py-4">3.0 lb.</td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Reply
                  </a>

                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Details
                  </a>
                </td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">3.0 lb.</td>
                <td className="px-6 py-4">3.0 lb.</td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Reply
                  </a>

                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Details
                  </a>
                </td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">3.0 lb.</td>
                <td className="px-6 py-4">3.0 lb.</td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Reply
                  </a>

                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Details
                  </a>
                </td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">3.0 lb.</td>
                <td className="px-6 py-4">3.0 lb.</td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Reply
                  </a>

                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
