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
  async create(createRecipeDto: CreateRecipeDto) {
    return await (
      await this.recipeModel.create(createRecipeDto)
    ).populate('category user');
  }

  findAll(filter = {}) {
    return this.recipeModel.find(filter).populate('category user');
  }

  findOne(filter) {
    return this.recipeModel.findOne(filter).populate('category user');
  }

  update(filter, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeModel
      .findOneAndUpdate(filter, updateRecipeDto)
      .populate('category user');
  }

  remove(filter) {
    return this.recipeModel.findOneAndDelete(filter);
  }

  like(id, user) {
    return this.recipeModel
      .findOneAndUpdate({ _id: id }, { $push: { likes: user._id } })
      .populate('category user');
  }

  unlike(id, user) {
    return this.recipeModel
      .findOneAndUpdate({ _id: id }, { $pull: { likes: user._id } })
      .populate('category user');
  }
}
