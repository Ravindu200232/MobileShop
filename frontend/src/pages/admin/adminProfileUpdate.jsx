import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SweetAlert2 from "react-sweetalert2";

export default function AdminProfileUpdate() {
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const location = useLocation();
  const user = location.state;
  const navigation = useNavigate();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [swalProps, setSwalProps] = useState({});

  function handleSubmit() {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: "Do you want to update this information?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
      preConfirm: () => {
        const token = localStorage.getItem("token");
        return axios
          .put(
            `${backendurl}/api/user/${user._id}`,
            {
              firstName: firstName,
              lastName: lastName,
              email: email,
              phone: phone,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            toast.success("Profile updated successfully!");
            navigation(`/login`);
          })
          .catch(() => {
            toast.error("Something went wrong!");
          });
      },
    });
  }

  function handleFirstName(e) {
    let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFirstName(value);
  }

  function handleLastName(e) {
    let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setLastName(value);
  }

  function handlePhoneChange(e) {
    let value = e.target.value.replace(/[^\d+]/g, ""); //remove non-numerical chareter
    if (value.length > 10) {
      value = value.slice(0, 20); //restric input to 10 digits
    }
    setPhone(value);
  }

  function handleEmail(e) {
    let value = e.target.value.replace(/[^a-zA-Z0-9@.]/g, "");
    setEmail(value);
  }

  return (
    <div className="h-screen w-full flex flex-col mt-10 items-center">
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
            onChange={(e) => {
              handleFirstName(e);
            }}
            value={firstName}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            className="rounded-lg h-[40px] mt-3 mb-4  shadow-xl border-[2px] pl-4"
            onChange={(e) => {
              handleLastName(e);
            }}
            value={lastName}
          ></input>
          <label>Email</label>
          <input
            type="text"
            className="rounded-lg h-[40px] mt-3 mb-4 shadow-xl border-[2px] pl-4"
            onChange={(e) => {
              handleEmail(e);
            }}
            value={email}
          ></input>
          <label>Phone</label>
          <input
            type="text"
            className="rounded-lg h-[40px] mt-3 mb-4 shadow-xl border-[2px] pl-4"
            onChange={(e) => {
              handlePhoneChange(e);
            }}
            value={phone}
          ></input>

          <div className="items-center flex-row relative mt-4">
            <button
              className="bg-green-400 h-[35px] w-[80px] rounded-lg absolute left-4"
              onClick={handleSubmit}
            >
              Update
            </button>
            <SweetAlert2 {...swalProps} />

            <button className="bg-red-400 h-[35px] w-[80px] rounded-lg absolute right-4">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
