import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './entities';
import { Roll } from '../roll/entities';


@Module({
  imports: [TypeOrmModule.forFeature([user,Roll])],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}