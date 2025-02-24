import axios from "axios";
import { useEffect, useState } from "react";

const backendurl = import.meta.env.VITE_BACKEND_URL;

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState("waiting");

  useEffect(() => {
    if (loaded == "waiting") {
      const token = localStorage.getItem("token");
      axios
        .get(`${backendurl}/api/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUsers(res.data);
          setLoaded("success");
        });
    }
  }, [loaded]);

  return (
    <div className=" h-screen w-full flex items-center flex-col">
      <div className="mt-4 text-[40px] font-semibold  h-[70px]">
        <h1>User Details</h1>
      </div>

      {loaded == "waiting" && (
        <div className=" w-[300px] h-[300px] mt-4 border-t-8 border-green-500 rounded-full animate-spin"></div>
      )}

      {loaded == "success" && (
        <div>
          <table className="min-w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border-b">First Name</th>
                <th className="px-4 py-2 border-b">Last Name</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Phone</th>
                <th className="px-4 py-2 border-b">Role</th>
                <th className="px-4 py-2 border-b">Created At</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((usr) => (
                <tr key={usr._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">{usr.firstName}</td>
                  <td className="px-4 py-2 text-gray-700">{usr.lastName}</td>
                  <td className="px-4 py-2 text-gray-700">{usr.email}</td>
                  <td className="px-4 py-2 text-gray-700">{usr.phone}</td>
                  <td
                    className={`px-4 py-2 text-gray-700 ${
                      usr.role === "admin" ? "text-green-500" : "text-red-400"
                    }`}
                  >
                    {usr.role}
                  </td>
                  <td className="px-4 py-2 text-gray-500">
                    {new Date(usr.create_at).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
