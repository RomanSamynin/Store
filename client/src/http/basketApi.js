import {$authHost} from "./index";

export const createBasket = async (Data) => {
    const {data} = await $authHost.post('api/basket', Data)
    return data
}



