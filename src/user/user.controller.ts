import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { user } from "./entities";

import { CreateUserDto, UpdateUserDto, UpdateUserRoleDto } from "./dto";
import { Roll } from "../common/enums/roll.enum";
import { Roles } from "../common/decorators/roles.decoradors";
import { Auth } from "../common/decorators/auth.decorador";

@UsePipes(new ValidationPipe())
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create_user(@Body() user: CreateUserDto) {
    return this.userService.create_user(user);
  }

  @Get()
  get_users(): Promise<user[]> {
    return this.userService.get_users();
  }

  @Get(":id")
  get_user(@Param("id") id: string): Promise<user> {
    return this.userService.get_user(id);
  }

  @Get("email/:email")
  findOneByEmail(@Param("email") email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Patch(":email")
  updateUser(
    @Param("email") email: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.update_user(email, updateUserDto);
  }

  @Auth(Roll.Jefe)
  @Patch("roll/:id")
  update_user_role(
    @Param("id") id: string,
    @Body() updateUserRoleDto: UpdateUserRoleDto
  ) {
    return this.userService.update_user_roll(id, updateUserRoleDto);
  }

  @Delete(":email")
  delete_user(@Param("email") email: string): Promise<void> {
    return this.userService.delete_user(email);
  }
}