import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SweetAlert2 from "react-sweetalert2";
import { toast } from "react-toastify";

const backendurl = import.meta.env.VITE_BACKEND_URL;

export default function AdminProfile() {
  const [User, setUser] = useState({});
  const location = useLocation();
  const user = location.state;
  const [loaded, setLoaded] = useState("Loading");
  const navigation = useNavigate();
  const [swalProps, setSwalProps] = useState({});

  useEffect(() => {
    if (loaded == "Loading") {
      const token = localStorage.getItem("token");
      axios
        .get(`${backendurl}/api/user/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          setLoaded("Success");
        });
    }
  }, [loaded]);

  function handleDelete() {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: "Do you want to update this information?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "No, cancel!",
      preConfirm: () => {
        const token = localStorage.getItem("token");
        axios
          .delete(`${backendurl}/api/user/${user._id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            toast.success("Deleted successfully");
            navigation(`/login`);
          })
          .catch((err) => {
            toast.error("Delete unsuccessfully");
          });
      },
    });
  }

  return (
    <div className="h-screen w-full flex flex-col mt-10 items-center">
      {loaded == "Loading" && (
        <div className="flex flex-col items-center justify-center">
          <div className="h-[300px] w-[300px] border-t-8 border-green-600 rounded-full animate-spin"></div>
          <h1 className="mt-4 text-[30px] animate-ping">Loading</h1>
        </div>
      )}
      {loaded == "Success" && (
        <div className="flex flex-col items-center">
          <div>
            <img
              src="/profile.png"
              className="object-cover w-[200px] h-[200px] rounded-full shadow-xl
                    "
            ></img>
          </div>

          <div className="w-[800px] h-full flex flex-col p-20 shadow-2xl rounded-lg mt-10">
            <label>First Name</label>
            <input
              type="text"
              className="rounded-lg h-[40px] mt-3 mb-4 shadow-xl border-[2px] pl-4"
              readOnly
              value={User.firstName}
            ></input>
            <label>Last Name</label>
            <input
              type="text"
              className="rounded-lg h-[40px] mt-3 mb-4  shadow-xl border-[2px] pl-4"
              readOnly
              value={User.lastName}
            ></input>
            <label>Email</label>
            <input
              type="text"
              className="rounded-lg h-[40px] mt-3 mb-4 shadow-xl border-[2px] pl-4"
              readOnly
              value={User.email}
            ></input>
            <label>Phone</label>
            <input
              type="text"
              className="rounded-lg h-[40px] mt-3 mb-4 shadow-xl border-[2px] pl-4"
              readOnly
              value={User.phone}
            ></input>

            <div className="items-center flex-row relative mt-4">
              <button
                className="bg-green-400 h-[35px] w-[80px] rounded-lg absolute left-4"
                onClick={() => {
                  navigation(`/admin/update`, { state: User });
                }}
              >
                Update
              </button>

              <button
                className="bg-red-400 h-[35px] w-[80px] rounded-lg absolute right-4"
                onClick={handleDelete}
              >
                Delete
              </button>
              <SweetAlert2 {...swalProps} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
