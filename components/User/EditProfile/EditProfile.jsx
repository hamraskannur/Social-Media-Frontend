import React, { useEffect, useRef, useState } from "react";
import style from "../../../styles/editProfile.module.css";
import { getUserData } from "../../../Api/userApi/userApi";
import Head from "next/head";

const EditProfile = () => {
  const proImageRef = useRef();
  const coverImageRef = useRef();
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
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>
      {/* <section className=" py-1 bg-blueGray-50"> */}
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                My account
              </h6>
              <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div className="relative">
                <div
                  onClick={() => proImageRef.current.click()}
                  className="h-40 w-full overflow-hidden flex rounded-md justify-center items-center"
                >
                  <img
                    src={proImg? URL.createObjectURL(proImg[0]):"https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg  "}
                    alt="cover"
                  />
                  <input
                    type="file"
                    name="Profile_img"
                    onChange={(e) => setProImg(e.target.files)}
                    ref={proImageRef}
                    hidden
                  />
                
                </div>
                <div className="absolute top-14 left-4">
                  <div   onClick={() => coverImageRef.current.click()} className="w-36 h-36 rounded-full overflow-hidden shadow-sm shadow-gray-500">
                    <img
                      src={coverImg? URL.createObjectURL(coverImg[0]):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAABqamr8/Pzv7+/5+fnr6+thYWHy8vKdnZ3Hx8fX19fm5uZ8fHx1dXXg4OC8vLzS0tKnp6eurq6MjIy2trakpKRJSUnExMR9fX2VlZVeXl4tLS2lpaWRkZEjIyNSUlI2NjYzMzMeHh4SEhIWFhZERESFhYU9PT1WVlZNTU0U74XbAAANFElEQVR4nO1d13bqOhAltFBNC6SeNDiB5P8/8AaMQbKlPUVyuWud/ZgYyaMyfcat1j/8A43ubDRfrzav+6SdInl8vBuu1uN+r+5XC8bs4an9dgPw9vO4WXTrfk0dJuvpPaLNws9+Pqn7hUXor5Mdm7oLnpezul+ch9Hji5y6M7bJelD3+2P01rdq6jJ8/WnugZ2Hk5fisGwik53cRSIvxfND3QTlMHqOSt8Jr825kr3N3/j0HdEe103aCd19OeSd8DWqm7xW97FE+o441Etj6fTVTGOvzPNp4qem+7ipiL4jbmvQzh+gzRAfTxXT1/2ulr5f7Cq9jsvK6TuiXZkuN/mohcBfzKshsEoOk8dtBdvY5VvupaB0jXxeL32/2JdL4LRu+n5xKFE29vX+iagoTW481E3ZBSWJ/2HddBl4LoPAJPCltof39+92ckT7+xCq831EdwB0vrTvckiWi5nrfbqz8Wr/rnCspojsXB2oeMyuvRx3qKG78/2nisSo/GaieIHbFd/vORg9Klw9EXW4sXjyRL7As6H4nKxiETgTTnyr1azGUqdBJBJlO/gW5q+e/4hm21RO4Hf49Z+INnIZTqDkiCZxYio9iW4RfFD7/Lmm/RjkpRDQGMhRB2yB/Bw3JtbjB3rCLgZXFh/iezT77FhdiHbzzpxjHY0uEwuugNTrqEx7tzwf2BPvBT614zOve5l+zAlP4VcaUyPW4ElckgrgLfOrZugua+jyPZgzFjvXKIqca/5RScCkzSFRLqw4Jn27BHJcWDHe5UU66Jox6J8yqHGCoxtPZUNyLmGVsaAuw68ju4oMJi3UJDrj5fR9e/rl9jsZjoQ3mOMnkohlWtK+ifSIyaaoHb3dyTQ9OmPnmz8YbTF9SNZr7Vv/lyHppzJA8z6+JUXq2wfBi+Fo6p3gLNBKJPfok2qEgMDRlhpMYKWTuS23vHFI16GAQI5UvedvI7mLPH5KhUBf2JdnwDQv+SyHtBk5g1Ax0B17yfl+ZL52SwkNTlSKUnTZCqDAxcMnsUOJftpZ9EqMwNZkegICb24W3GEpbYvUlakB+C5YYUYD21FH6ajUpSaYH9+aYDogLvhgj0ykK33hXxPMge8QkcY6JJFrwl7EEoNQ/vg+X0VAlT84ZobQUiTOON9pqEm74buTiAOCXhMLVIFJrwrT8wU/1ivf/D8kbiHfENDlpQhWEDNqv3TFjFRg0ytz3/hWMdYmvHwZ/0zgGNWE/Y8QxDvxOfXpDzjcI7B5pbIwg8TshM5On7UPZ5dEItXpb4II5AIO5FaeoQORr3LIVG4bkhgWlPtu1+IB/YStGbd4vlY3JEEQrEG77hSU9gI3FsPZ4AWQZEVAK8h1qeB7iRx/soQRCxLfWwcN5LpV6Hmmh4cxEgHRSkKJUXRYQ01S5N+Ga0tAFKyDE90VHkcqqWwL5YbTFUPRTEjubvMPQ5+DzP2OJRVGceUR4EvnuT86pPeiaYMKFoQRSZQglq9aQPJTGEEOKYr6kU0FFeDcs+DJv7JZgzLeJZrpEaiEzr5b6O5IMxwpfySCNDMG5YvYjh9kVkgzjkJaD4ij8WAsm30AnVSksB0RUv1c4PEU0HKauukAPCfOmAkpzJDeeSh8TQ6JGLxEVTyBlf7iwU4824d/MFNeALkiz5mplkLAuc1LDYxyeVpXpacUisQrj0TXUJ5ZGUKhmNPA3bl6B4E0FHPSMF4qMoFTAG561eNB7bKioCFEHipyYYHQv8YJAG9Q5G+H6DREaMwFYGDsLg+BoyyfMUgv1ST7AqdJxmqArSyzfVPoXW26jGNgB2esBnjZZDZ3ihALWFPgCy5i9vpg0SVu0gzaqMURmhofcBGzIwFYg6rOIIBCzYq2PrzDZazZ74QSGzMnBFTtq0qLgIpx3iF/bpaujiFAMVXNB8T5ecX8gX9dZb9eXAh9XmcAVpMyUxDi0NUz8UpRXNB19QCxrpQAwPt0FWm8WhQXlPUp/gFT3gzkl7KmUFdffyOKkJrws7ZUIAIDX2yPptD2cVNYFif485xSHzqoSFHOqL2IMp/+FX5x8Xj6v5/17YiRvVBSqJL3LXRmEuL/6spFpUTUTufXvVMvk3+PhVGEK3Q5UdpDCk5hSqF/wTW2UwoVheqKZT8nSSn0q6X6+lCNJ0On0BzhN45uS6NQI/T1tXB1UKhwKWqFYQtJ9BIplOdFBVQU10Kh+CaqJVOrplMqzjkJaTvh56UphX5pEVTJLHNIBXVD9JvAFIV6eXiERP+WpD4W4ddpUgr8bO89aF5JfltYfzn/nU9PoX+tpZkROfTI6soMgb1f/LGglEL/HitiXRa4/Xu0NkUG/ylMeSXI8AmcudVlORaD+wP6s2pSCoHLO3TqVofuih2hx6N/HVMWDSzyCI09qBwwVd+VHPyjp+5QkLARo79kH5nDUfpngcBFWigOVMg43WdmPhq/4/TPAu7Q1JsIlkATXHOhuyxW6+3uYnUgBdrTeYv8hWYxG9Ashsn9eaa/X/t1xPZu4KqfD4lf9whTphzoDX4RuzUYUA+75BNN/O5SAf6uclkC0h8/haHaRiXwv/77+QlwU6P0By0ZQNpl/kngNqqq11UIQFTiEh30PxKut5UP4PS6yCOgPP4PPknI2R+QjBGhi23JANfwGpUAEURFbmKKriMHYPAwTNrt6cahrI3UXBtkDVydPyjHRxckHeyLkmZyvTCfBf/2282Xskc28JUYIwJbXKN890+0PNp/tONROTF0Sjw7aPYRZf8axh8wcOTyYnB2m9jx1fyb2CzsrFb9yBkbkBVvvMekx9RocWxtSd6naXubL131E6nFD+SAeYjQRZQdU/PeW17evNSydtjUqu5EujAKcllvDjp1SNzCc3sc81+F2IF5Nmx3oMQqBTq17YRF2efsc7PI59GYUqGgeZi/zP+Pn4sFUnfsjGoUeGcuab+Y1WIe07xX1kx7LKbwcvuDo6KgnI8LPMnyC/dc7fDMX+YNGJN6l1f+luUEQE34couECp0Z4WcPMzaYfz7aZjJaNxdgpGbAEF7uWZR+/k5NNPIxKlNzsy+iub3eo0bmRCM+k1M4cFk0PjBdXo6xfdlMjd6v+FPXEb10QUFCxxTGgmE421wby51ijoBCVG3EydHBK2aswRpzv3d/hL/xY6qf5mFce/7uAGDlKO7jCCqjWXwxaIeEsGHljV132xJVVNL0p++owk1x/AhmwLjPCuNrltYPLwzJutiwL84JnlbdqGWaS8TBzALXJrK+ZmlpJ1mUy2JznMybrcvmgJ3anWcbRjOL7JSXJmvXM2wdg/FaMDi8KfB556GDUxX0b25vCNNSyLbLUvqZ+QwFfg4birnNBdxSNSde2DUVJjXZqphWNbLR0Uvjw+3xFsBOy3aBEL9oxKTmcnGNv/Fr+WxvA+TivmomXHRmijZJgxbXdhkuIrqZ/AWmooqzkL3WF57tWgwhqr+76u1X4XLdDlH623VhiCbFPgKJ9qVX6U1LMANT188uBr4sI/zCtnD6KlCD8PedMo4tLIN17fyF/8iy+rPVIiQVcJ4R+YRnOSZsv5rxNZO9Z2JSmqOZ3hTijMKKO6ymvCgO1pVBWG7nHmszCki1IYI7Qf8nsYlTxvhFpEPbl/xs3Iq/gn38EaEOE34l4vWX0l7rR6Rqvu3OO5ceiMd6oFuWYwLJdnILRT3Mq4uYvuaQHpU3aoVJ1wdVRjCQl96drm9eSRiqDunNX0qPpYsaKD3xU1E+ebR98oJoqzqkv+op8X9G/Iph1krx5FKUF2HdFzxgVZ8HlNN78OJS1ZOwTjYesPJFS1jZfsvhsOqENF/wgFleH/qd+CI2Lqa5jr+U3MKbkBarbvy4xOx9/JVkh5B1JaD1Q1CEGtJyrT5I+pR02B86bhJEaQ4l8NPSIcyjDGnYVQ/E2Vvczzk3BTtxOrPcSKoXisIGztdNmwNNCy3WN2qbAmU9b3ydoywomhGmUH4Qp3Js1UUTHXYRaL0IqL/Rf0+lSgQVhYR856AqBBbYNV99U8kJE/rma9UgQgFhs0mMUiHZZHtY1/awgObuYqwa18aym2gENlULj1qx1ES5GKfQ/IJBfE94IOJUuptoltG/VbbJhJCHwsrDRzkl2CirulqENLCCaIpgLLHsc9AEm3gXn8eYCPm0Qxzclt0FYVGzwz/YWKLRqTNscyhDSBQR8nG8MEQyJWj06vEz3kfs+EKCKCQpBRXcQAsh31rRIKm+kcygyqPKrbiMjJk4S1GJbWRDSYBFscFVCai3N8eobBp39fceWQR8pJrES9UM1I1xWVrOu74Bdmx0X0vQVpMqBTwD87hejq9VAxupdYexvFUvT9Uo2AqMX4W1GA68PTW8N9VkQzdl9eN+07DL50Zv9CqqjMo2bzpv4N3zojdeJR986p6fRuHNdmtAZ7zaUzrPS/vpobF8hYn+Yr5aDV/306R9RvI4fbwbLtcPi8n/6Vz+Q134D0DNwZmhsLGEAAAAAElFTkSuQmCC"}
                      alt="avatars"
                    />
                      <input
                    type="file"
                    name="cover_img"
                    onChange={(e) => setCoverImg(e.target.files)}
                    ref={coverImageRef}
                    hidden
                  />
                  </div>
                </div>
              </div>  
              <h6 className=" text-blueGray-400 text-sm mt-12 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Name
                    </label>
                    <input
                      value={userData?.name}
                      name="name"
                      onChange={handleEdit}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="Lucky"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      PhoneNo
                    </label>
                    <input
                      value={userData?.phoneNo}
                      onChange={handleEdit}
                      name="phoneNo"
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Username
                    </label>
                    <input
                      value={userData?.username}
                      onChange={handleEdit}
                      name="username"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      value={userData?.Address}
                      onChange={handleEdit}
                      type="text"
                      name="Address"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="Add you address"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      City
                    </label>
                    <input
                      value={userData?.city}
                      onChange={handleEdit}
                      type="email"
                      name="city"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="New York"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Country
                    </label>
                    <input
                      value={userData?.country}
                      onChange={handleEdit}
                      type="text"
                      name="country"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="United States"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Postal Code
                    </label>
                    <input
                      value={userData?.PostalCode}
                      onChange={handleEdit}
                      type="text"
                      name="PostalCode"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="Postal Code"
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      About me
                    </label>
                    <textarea
                      value={userData?.description}
                      onChange={handleEdit}
                      name="description"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="This is a description."
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </section > */}
    </>
  );
};

export default EditProfile;

// <div className=" p-5 max-sm:ml-20  max-md:ml-20  max-lg:ml-20  mt-10">
//         <div className="flex">
//           <h1 className="font-bold text-2xl">Profile photo</h1>
//           <button
//             onClick={() => imageRef.current.click()}
//             className="text-lg text-blue-600 ml-auto"
//           >
//             edit
//           </button>
//           <input
//             type="file"
//             name="Profile_img"
//             onChange={(e) => setProImg(e.target.files)}
//             ref={imageRef}
//             hidden
//           />
//           <input
//             type="file"
//             name="cover_img"
//             // onChange={handleFile}
//             // ref={imageRef}
//             hidden
//           />
//         </div>

//         <div class="flex flex-wrap justify-center">
//           <div class="relative w-4/12 h-20 sm:w-4/12 px-4">
//             <img
//               src={proImg? URL.createObjectURL(proImg[0]):"https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" }
//               // src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
//               alt="..."
//               class="absolute shadow rounded-full w-28 align-middle border-none"
//             />
//           </div>
//         </div>

//         <div className="mt-5">
//           <div className="flex">
//             <h1 className="font-bold text-2xl">Cover photo</h1>
//             <button
//               onClick={() => imageRef.current.click()}
//               className="text-lg text-blue-600 ml-auto"
//             >
//               edit
//             </button>
//             <input
//               // onChange={handleCover}
//               name="cover_img"
//               // ref={imageRefCov}
//               hidden
//               type="file"
//             />
//           </div>
//           <div className="h-36 overflow-hidden flex justify-center mt-4 items-center">
//             <img
//               // src={cover ? URL.createObjectURL(cover) : data?.cover}
//               src="https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg"
//               alt="cover"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className={style.col - 25}>
//             <label className={style.EditLabel}>Name</label>
//           </div>
//           <div className={style.col - 75}>
//             <input
//               value={userData?.name}
//               onChange={handleEdit}
//               className={style.inputText}
//               type="text"
//               placeholder="Your name.."
//             />
//           </div>
//         </div>
//         {/* <div className="row">
//           <div className={style.col - 25}>
//             <label className={style.EditLabel}>date of birth</label>
//           </div>
//           <div className={style.col - 75}>
//             <input
//               className={style.inputText}
//               value={userData?.dob}
//               type="date"
//               placeholder="date of birth"
//             />
//           </div>
//         </div> */}
//         <div className="row">
//           <div className={style.col - 25}>
//             <label className={style.EditLabel}>country</label>
//           </div>
//           <div className={style.col - 75}>
//             <input
//               name="country"
//               onChange={handleEdit}
//               value={userData?.country}
//               className={style.inputText}
//               type="text"
//               placeholder="Your country.."
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className={style.col - 25}>
//             <label className={style.EditLabel}>place</label>
//           </div>
//           <div className={style.col - 75}>
//             <input
//               onChange={handleEdit}
//               value={userData?.place}
//               name="place"
//               className={style.inputText}
//               type="text"
//               placeholder="Your place.."
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className={style.col - 25}>
//             <label className={style.EditLabel} for="subject">
//               description
//             </label>
//           </div>
//           <div className={style.col - 75}>
//             <textarea
//               onChange={handleEdit}
//               className={style.inputText}
//               value={userData?.description}
//               id="subject"
//               name="subject"
//               placeholder="Write something.."
//               style={{ height: "200px" }}
//             ></textarea>
//           </div>
//         </div>
//         <div className="row">
//           <input
//             className={`${style.inputText} bg-slate-500 hover:bg-slate-800`}
//             type="button"
//             value="Submit"
//           />
//         </div>
//       </div>
