import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { Role } from 'src/roles/roles.decorator';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: [Role.User] })
  roles: Role[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Recipe.name }],
    default: [],
  })
  likes: Recipe[];
}

export const UserSchema = SchemaFactory.createForClass(User);
