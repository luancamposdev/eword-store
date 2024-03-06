import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepo: Repository<Users>) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepo.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (user)
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

    const newUser = this.usersRepo.create(createUserDto);
    return this.usersRepo.save(newUser);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepo.update({ id }, updateUserDto);
  }

  remove(id: string) {
    return this.usersRepo.delete({ id });
  }
}
