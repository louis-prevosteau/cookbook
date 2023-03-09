export interface IngredientModel {
    _id: string;
    recipe: string;
    name: string;
    quantity: number;
    unit: string;
};

export interface CreateIngredientModel {
    recipe: string;
    name: string;
    quantity: number;
    unit: string;
};

export interface UpdateIngredientModel {
    name: string;
    quantity: number;
    unit: string;
}