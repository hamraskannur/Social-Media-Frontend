import React, { useEffect, useRef, useState } from "react";
import style from "../../../styles/editProfile.module.css";
import { getUserData } from "../../../Api/userApi/userApi";

const EditProfile = () => {
  const imageRef = useRef();
  const [proImg, setProImg] = useState();
  const [coverImg, setCoverImg] = useState();
  const [userData, setUserData] = useState([]);
  const [editUser, setEditUser] = useState([]);
  let user;
  useEffect(() => {
    async function getUser() {
      user = await getUserData();
      setUserData(user[0]);
    }
    getUser();
  }, []);

  const handleEdit = async (e) => {
    const { name, value } = e.target;
    setUserData({ userData, [name]: value });
    console.log(name, "haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaai");
    console.log(value, "jaaaaaaaaaaaaaaaaaaaaaaaaai");
  };
  return (
    <>
      <div className=" p-5 max-sm:ml-20  max-md:ml-20  max-lg:ml-20  mt-10">
        <div className="flex">
          <h1 className="font-bold text-2xl">Profile photo</h1>
          <button
            onClick={() => imageRef.current.click()}
            className="text-lg text-blue-600 ml-auto"
          >
            edit
          </button>
          <input
            type="file"
            name="Profile_img"
            onChange={(e) => setProImg(e.target.files)}
            ref={imageRef}
            hidden
          />
          <input
            type="file"
            name="cover_img"
            // onChange={handleFile}
            // ref={imageRef}
            hidden
          />
        </div>

        <div class="flex flex-wrap justify-center">
          <div class="relative w-4/12 h-20 sm:w-4/12 px-4">
            <img
              src={proImg? URL.createObjectURL(proImg[0]):"https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" }
              // src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              class="absolute shadow rounded-full w-28 align-middle border-none"
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="flex">
            <h1 className="font-bold text-2xl">Cover photo</h1>
            <button
              onClick={() => imageRef.current.click()}
              className="text-lg text-blue-600 ml-auto"
            >
              edit
            </button>
            <input
              // onChange={handleCover}
              name="cover_img"
              // ref={imageRefCov}
              hidden
              type="file"
            />
          </div>
          <div className="h-36 overflow-hidden flex justify-center mt-4 items-center">
            <img
              // src={cover ? URL.createObjectURL(cover) : data?.cover}
              src="https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg"
              alt="cover"
            />
          </div>
        </div>
        <div className="row">
          <div className={style.col - 25}>
            <label className={style.EditLabel}>Name</label>
          </div>
          <div className={style.col - 75}>
            <input
              value={userData?.name}
              onChange={handleEdit}
              className={style.inputText}
              type="text"
              placeholder="Your name.."
            />
          </div>
        </div>
        {/* <div className="row">
          <div className={style.col - 25}>
            <label className={style.EditLabel}>date of birth</label>
          </div>
          <div className={style.col - 75}>
            <input
              className={style.inputText}
              value={userData?.dob}
              type="date"
              placeholder="date of birth"
            />
          </div>
        </div> */}
        <div className="row">
          <div className={style.col - 25}>
            <label className={style.EditLabel}>country</label>
          </div>
          <div className={style.col - 75}>
            <input
              name="country"
              onChange={handleEdit}
              value={userData?.country}
              className={style.inputText}
              type="text"
              placeholder="Your country.."
            />
          </div>
        </div>
        <div className="row">
          <div className={style.col - 25}>
            <label className={style.EditLabel}>place</label>
          </div>
          <div className={style.col - 75}>
            <input
              onChange={handleEdit}
              value={userData?.place}
              name="place"
              className={style.inputText}
              type="text"
              placeholder="Your place.."
            />
          </div>
        </div>
        <div className="row">
          <div className={style.col - 25}>
            <label className={style.EditLabel} for="subject">
              description
            </label>
          </div>
          <div className={style.col - 75}>
            <textarea
              onChange={handleEdit}
              className={style.inputText}
              value={userData?.description}
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <input
            className={`${style.inputText} bg-slate-500 hover:bg-slate-800`}
            type="button"
            value="Submit"
          />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
