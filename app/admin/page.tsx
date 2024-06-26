"use client";
import { BsMailboxFlag } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NextPage } from "next";
import {} from "zustand";
import { signOut } from "next-auth/react";
import TableRow from "../components/ui/TableRow";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { data: messages, isLoading } = useQuery<ContactType[]>({
    queryKey: ["message_fetcher"],
    queryFn: async () => {
      const { data } = await axios.get("/api/message", {
        baseURL: process.env.NEXTAUTH_URL,
      });
      return data.messages;
    },
  });

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between bg-white rounded-lg mb-5 p-4">
          <h2 className="text-3xl text-center">All Messages</h2>
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
              {isLoading ? (
                <tr className="text-center bg-white">
                  <td className="p-4" colSpan={8}>
                    Loading...
                  </td>
                </tr>
              ) : messages?.length == 0 ? (
                <tr className="text-center bg-white">
                  <td align="center" className="p-4" colSpan={8}>
                    <BsMailboxFlag size={70} />
                    <p>Empty Table!</p>
                  </td>
                </tr>
              ) : (
                messages?.map((message) => (
                  <TableRow key={message.id} message={message} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
