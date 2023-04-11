import { ClothingItem } from "./clothingItem.model";

export interface Order {
    id:String,
    customer:String,
    products:ClothingItem[],
    state:String
}