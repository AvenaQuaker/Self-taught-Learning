import { validateFood, validatePartialFood } from "../Schemas/FoodSchema.js";

export class FoodController {
    constructor({ foodModel }) {
        this.foodModel = foodModel;
    }

    Home = async (req, res) => {
        res.status(200).json({ Message: "Pagina Principal" });
    };

    GetAll = async (req, res) => {
        const dishes = await this.foodModel.getFoods();
        res.status(200).json(dishes);
    };

    GetFood = async (req, res) => {
        const { key } = req.params;
        const dish = await this.foodModel.getFood(key);
        res.status(200).json(dish);
    };

    CreateFood = async (req, res) => {
        let Resultado = validateFood(req.body);

        if (Resultado.error) {
            res.status(400).json(Resultado.error);
            return;
        } else {
            const dish = await this.foodModel.createFood({ food: req.body });
            res.status(201).json(dish);
        }
    };

    UpdateFood = async (req, res) => {
        try {
            const dish = await this.foodModel.updateFood({ food: req.body });
            res.status(200).json(dish);
        } catch (err) {
            res.status(500).json(err);
        }
    };

    DeleteFood = async (req, res) => {
        const { key } = req.params;
        const dish = await this.foodModel.deleteFood(key);
        res.status(200).json(dish);
    };
}
