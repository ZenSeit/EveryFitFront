import { ClothingItem } from "./clothingItem.model";

export interface Order {
    id?:string,
    customer:string,
    products:ClothingItem[],
    state:string
}