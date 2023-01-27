import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto);
  }

  findAll(filter = {}) {
    return this.categoryModel.find(filter);
  }

  findOne(filter) {
    return this.categoryModel.findOne(filter);
  }

  update(filter, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findOneAndUpdate(filter, updateCategoryDto);
  }

  remove(filter) {
    return this.categoryModel.findOneAndDelete(filter);
  }
}
