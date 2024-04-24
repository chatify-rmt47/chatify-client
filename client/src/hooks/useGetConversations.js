import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
import dataUser from "../db/userdata.json";
import instance from "../utils/axios";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                let token = JSON.parse(localStorage.getItem("chat-user"));
                token = token.access_token;

                const { data } = await instance({
                    method: "get",
                    url: "get-user",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(data, "data user from db");
                //  console.log(dataUser, "data user");
                //  data = await res.json();

                //  if (data.error) {
                //    //   throw new Error(data.error);
                // 	console.log(error);
                //  }
                setConversations(data);
                //  setConversations(dataUser);
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
