import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient, IngredientDocument } from './entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredient.name)
    private readonly ingredientModel: Model<IngredientDocument>,
  ) {}
  create(createIngredientDto: CreateIngredientDto) {
    return this.ingredientModel.create(createIngredientDto);
  }

  findAll(filter = {}) {
    return this.ingredientModel.find(filter);
  }

  findOne(filter) {
    return this.ingredientModel.findOne(filter);
  }

  update(filter, updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientModel.findOneAndUpdate(filter, updateIngredientDto);
  }

  remove(filter) {
    return this.ingredientModel.findOneAndDelete(filter);
  }
}
