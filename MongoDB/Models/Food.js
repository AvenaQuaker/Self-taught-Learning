import { randomInt } from "crypto";
import Dish from "../Models/Dishes.js";

export class FoodModel {
    static async getFoods() {
        try {
            const dishes = await Dish.find();
            return dishes;
        } catch (err) {
            return { message: err.message };
        }
    }

    static async getFood(Key) {
        try {
            const dish = await Dish.find({ Key: Key });
            return dish;
        } catch (err) {
            return { message: err.message };
        }
    }

    static async createFood({ food }) {
        const dishes = await Dish.find();
        const KeyINT = dishes.length + 1;

        const dish = {
            Key: KeyINT,
            Nombre: food.Nombre,
            Origen: food.Origen,
            Ingredientes: food.Ingredientes,
            Imagen: food.Imagen,
        };

        const result = await Dish.insertMany(dish);
        return result;
    }

    static async updateFood({ food }) {
        const dish = {
            Nombre: food.Nombre,
            Origen: food.Origen,
            Ingredientes: food.Ingredientes,
            Imagen: food.Imagen,
        };

        const result = await Dish.updateOne({ Key: food.Key }, { $set: dish });
        return result;
    }

    static async deleteFood(Key) {
        const result = await Dish.deleteOne({ Key: Key });
        return result;
    }
}
