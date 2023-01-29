import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Recipe } from 'src/recipes/entities/recipe.entity';

export type IngredientDocument = HydratedDocument<Ingredient>;

@Schema()
export class Ingredient {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Recipe.name })
  recipe: Recipe;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  unit: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
