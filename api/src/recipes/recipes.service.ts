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
    const recipe = await this.recipeModel.create(createRecipeDto);
    return await recipe.populate('category user', '-password');
  }

  findAll(filter = {}) {
    return this.recipeModel
      .find(filter)
      .populate('category')
      .populate('user', '-password')
      .populate('likes', '-password');
  }

  findOne(filter) {
    return this.recipeModel
      .findOne(filter)
      .populate('category')
      .populate('user', '-password')
      .populate('likes', '-password');
  }

  update(filter, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeModel
      .findOneAndUpdate(filter, updateRecipeDto)
      .populate('category');
  }

  remove(filter) {
    return this.recipeModel.findOneAndDelete(filter);
  }

  like(id, user) {
    return this.recipeModel
      .findOneAndUpdate({ _id: id }, { $push: { likes: user._id } })
      .populate('category')
      .populate('user', '-password');
  }

  unlike(id, user) {
    return this.recipeModel
      .findOneAndUpdate({ _id: id }, { $pull: { likes: user._id } })
      .populate('category')
      .populate('user', '-password');
  }
}
