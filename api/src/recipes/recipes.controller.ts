import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.decorator';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto, @User() user) {
    return (
      await this.recipesService.create({ ...createRecipeDto, user: user._id })
    ).populate('category user');
  }

  @Get()
  findAll(@Query('category') category) {
    return this.recipesService
      .findAll(category ? { category } : {})
      .populate('category user');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne({ _id: id }).populate('category user');
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return await this.recipesService
      .update({ _id: id }, updateRecipeDto)
      .populate('category user');
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.remove({ _id: id });
  }
}
