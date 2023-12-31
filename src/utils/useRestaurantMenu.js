import { useEffect } from "react";
import { useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resid) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resid)
        const json = await data.json()

        console.log(json.data)
        console.log("hello");
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;