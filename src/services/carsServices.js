import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const carsServices={
    getAll:()=>apiServices.get(urls.base),
    create:(car)=>apiServices.post(urls.base,car),
    updateById:(id,car)=>apiServices.put(urls.getById(id),car),
    deleteCar:(id)=>apiServices.delete(urls.getById(id))

}
export {
    carsServices
}