import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { user } from "./entities/user.entity";
import { Roll } from "../roll/entities";
import { CreateUserDto, UpdateUserDto, UpdateUserRollDto } from "./dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user) private readonly userRepository: Repository<user>,
    @InjectRepository(Roll) private readonly roleRepository: Repository<Roll>
  ) {}

  async create_user(createUserDto: CreateUserDto) {
    const foundRoll = await this.roleRepository.findOne({
      where: { roll: createUserDto.roll },
    });

    if (!foundRoll)
      throw new BadRequestException(`Rol '${createUserDto.roll}' not found`);

    const foundUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (foundUser)
      throw new BadRequestException(
        `User with email '${createUserDto.email}' already exists`
      );

    const newUser = new user();

    
    /*newUser.email = createUserDto.email;*/
    newUser.password = createUserDto.password;
    newUser.user_name = createUserDto.user_name;
    newUser.roll = foundRoll; 

    const createdUser = await this.userRepository.save(newUser);

    return createdUser;
  }

  async get_users(): Promise<user[]> {
    return await this.userRepository.find({ relations: ["role"] });
  }

  async get_user(id: string): Promise<user> {
    const foundUser = await this.userRepository.findOne({
      where: { id },
      relations: ["roll"],
    });
    if (!foundUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return foundUser;
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      relations: ["role"],
    });
}

async delete_user(email: string): Promise<void> {
  const userToDelete = await this.findOneByEmail(email)

  if (!userToDelete) {
    throw new NotFoundException(`User with email ${email} not found`);
  }

  await this.userRepository.remove(userToDelete);
}

async update_user(email:string,userUpdate: UpdateUserDto): Promise<user> {
  const userToUpdate = await this.findOneByEmail(email);

  if (!userToUpdate) {
    throw new NotFoundException(`User with id ${email} not found`);
  }

  if (userUpdate.password) {
    userToUpdate.password = userUpdate.password;
  }
  const updatedUser = await this.userRepository.save(userToUpdate);

  return updatedUser;
}
  
    async update_user_roll(
      id: string,
      userRollUpdate: UpdateUserRollDto
    ): Promise<user> {
      const userToUpdate = await this.userRepository.findOne({ where: { id } });
  
      if (!userToUpdate) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
  
      const foundRole = await this.roleRepository.findOne({
        where: { roll: userRollUpdate.roll },
      });
  
      if (!foundRole) {
        throw new BadRequestException(`Role '${userRollUpdate.roll}' not found`);
      }
  
      userToUpdate.roll = foundRole;
  
      const updatedUser = await this.userRepository.save(userToUpdate);
  
      return updatedUser;
    }
  }

