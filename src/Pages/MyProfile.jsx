import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { profileUser, updateCreatedUser, setUser, setLoading } = useContext(AuthContext);

  //   Calling the function here to Update Profile
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const newUserName = e.target.username.value;
    const newPhotoUrl = e.target.photourl.value;

    updateCreatedUser({
      displayName: newUserName,
      photoURL: newPhotoUrl,
    })
    .then(() => {
      setUser((prevUser) => ({
        ...prevUser,
        displayName: newUserName,
        photoURL: newPhotoUrl,
      }));
      Swal.fire({
        title: "Success!",
        text: "You have successfully updated your account!",
        icon: "success",
      });
    })
    .catch(err => {
        Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
          });
    })
    .finally(() => {
        setLoading(false);
      })
  };

  // Fetching Information about the user
  const email = profileUser.email;
  const photo = profileUser.photoURL;
  const username = profileUser.displayName;

  return (
    <div className="py-10 px-4 bg-base-200 rounded-2xl">
      <h1 className="text-4xl font-bold text-center mt-10">Your Profile</h1>
      {/* Image div */}
      <div className="flex justify-center items-center mt-14">
        <img
          className="w-[170px] h-[170px] object-cover rounded-2xl"
          src={photo}
          alt=""
        />
      </div>
      {/* Image div */}

      {/* Info Div */}
      <div className="mt-10 flex flex-col items-center">
        <p className="font-medium text-lg mb-4">
          User Name: <span className="font-bold">{username}</span>
        </p>
        <p className="font-medium text-lg mb-4">
          Email: <span className="font-bold">{email}</span>
        </p>
        <p className="font-medium text-lg mb-4 break-all text-center">
          PhotoURL: <span className="font-bold">{photo}</span>
        </p>
      </div>
      {/* Info Div */}

      <div className="divider md:w-[80%] lg:w-[70%] mx-auto mt-10"></div>

      {/* Update Profile input field Div */}
      <div className="mx-auto md:w-[65%] lg:w-[55%] xl:w-[40%] mt-20">
        <h1 className="font-bold text-2xl text-center mb-8">Update Profile</h1>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateProfile} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                name="username"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Photo URL"
                className="input input-bordered"
                name="photourl"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
      {/* Update Profile input field Div */}
    </div>
  );
};

export default MyProfile;
