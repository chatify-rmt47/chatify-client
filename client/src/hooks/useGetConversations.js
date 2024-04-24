import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
import dataUser from "../db/userdata.json";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                //  const res = await fetch("/get-user");
                //  const { data } = await axios({
                //      method: "get",
                //      url: import.meta.env.VITE_API_URL + "/get-user",
                //      // url: `http://localhost:3000/heroes`,
                //      //   headers: {
                //      //       Authorization: `Bearer ${localStorage.getItem(
                //      //           "token"
                //      //       )}`,
                //      //   },
                //  });
                console.log(dataUser, "data user");
                //  data = await res.json();

                //  if (data.error) {
                //    //   throw new Error(data.error);
                // 	console.log(error);
                //  }
                setConversations(dataUser);
            } catch (error) {
                console.log(error);
                //  toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
};
export default useGetConversations;
