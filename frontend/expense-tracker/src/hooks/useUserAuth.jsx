// // import{useContext} from "react";
// import { useEffect, useState, useContext } from "react";

// import { UserContext } from "../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../utils/axiosInstance";
// import { API_PATHS } from "../utils/apiPaths";


// export const useUserAuth = () => {
//   const { user, updateUser, clearUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) return;

//     let isMounted = true;

//     const fetchUserInfo = async () => {
//       try {
//         const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);

//         if (isMounted && response.data) {
//           updateUser(response.data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch user info:", error);
//         if (isMounted) {
//           clearUser();
//           navigate("/login");
//         }
//       }
//     };
//     fetchUserInfo();
//     return ()=>{
//         isMounted=false;

//     };
// },[updateUser,clearUser,navigate]);
// };
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already loaded, don't fetch again
    if (user) return;

    // Check if token exists before making API call
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);

        if (isMounted && response.data) {
          updateUser(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        if (isMounted) {
          clearUser(); // This will now work correctly
          navigate("/login");
        }
      }
    };

    fetchUserInfo();

    return () => {
      isMounted = false;
    };
  }, [user, updateUser, clearUser, navigate]); // Added 'user' to dependency array
};