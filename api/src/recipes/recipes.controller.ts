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
import { UsersService } from 'src/users/users.service';
import { IngredientsService } from 'src/ingredients/ingredients.service';

@Controller('recipes')
export class RecipesController {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly usersService: UsersService,
    private readonly ingredientsService: IngredientsService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto, @User() user) {
    return this.recipesService.create({ ...createRecipeDto, user: user._id });
  }

  @Get()
  findAll(@Query('category') category) {
    return this.recipesService.findAll(category ? { category } : {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne({ _id: id });
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return await this.recipesService.update({ _id: id }, updateRecipeDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.ingredientsService.removeAll({ recipe: id });
    return this.recipesService.remove({ _id: id });
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id/like')
  async like(@Param('id') id, @User() user) {
    await this.usersService.like(id, user);
    return this.recipesService.like(id, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id/unlike')
  async unlike(@Param('id') id, @User() user) {
    await this.usersService.unlike(id, user);
    return this.recipesService.unlike(id, user);
  }
}
