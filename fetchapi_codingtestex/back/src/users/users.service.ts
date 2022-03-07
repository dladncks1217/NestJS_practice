import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async getUserName(id: string) {
    let user = await this.usersRepository.findOne({
      where: { id },
    });
    return user.name;
  }

  async Join(email: string, name: string, age: number, password: string) {
    Logger.log(email, name, age, password);
    const newuser = await this.usersRepository.findOne({ where: { email } });
    if (newuser) {
      throw new UnauthorizedException('이미 존재하는 사용자입니다.');
      return;
    } else {
      const hashedpassword = await bcrypt.hash(password, 12);
      await this.usersRepository.save({
        email,
        name,
        age,
        password: hashedpassword,
      });
      return JSON.stringify({
        email,
        name,
        age,
        code: 201,
      });
    }
  }
}
