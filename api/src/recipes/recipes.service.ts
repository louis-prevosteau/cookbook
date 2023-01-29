import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe, RecipeDocument } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name)
    private readonly recipeModel: Model<RecipeDocument>,
  ) {}
  create(createRecipeDto: CreateRecipeDto) {
    return this.recipeModel.create(createRecipeDto);
  }

  findAll(filter = {}) {
    return this.recipeModel.find(filter);
  }

  findOne(filter) {
    return this.recipeModel.findOne(filter);
  }

  update(filter, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeModel.findOneAndUpdate(filter, updateRecipeDto);
  }

  remove(filter) {
    return this.recipeModel.findOneAndDelete(filter);
  }
}
