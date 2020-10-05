import { useContext } from "react";
import { StoreContext, StoreDispatcher } from "../context";
import axios from "axios";
import { APIKEY, CONTEXTKEY } from "../help/config";

export const useStore = () => useContext(StoreContext);
export const useStoreDispatcher = () => {
    const dispatch = useContext(StoreDispatcher);
    const useGoogleSearch = async(text, startIndex = 0) => {
        dispatch({ type: 'LOADING' });
        const options = {
            headers: {
                "Origin": "http://localhost:3000"
            }
        };
        try {
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${APIKEY}&cx=${CONTEXTKEY}&q=${text}&num=10&start=${startIndex}`, options);
            dispatch({ type: 'SEARCH_DATA', payload: response.data, index: startIndex });
            dispatch({ type: 'TEXT_SEARCH_CHANGE', payload: text });
            dispatch({ type: 'END_LOADING' });
        } catch (e) {
            dispatch({ type: 'SEARCH_DATA', payload: [] });
            dispatch({ type: 'ERROR' });
        }
    };
    return { useGoogleSearch };
};