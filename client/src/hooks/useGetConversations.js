import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
                    url: "users",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setConversations(data);
            } catch (error) {
                toast.error(error.response.data.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
};
export default useGetConversations;
