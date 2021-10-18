import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUserInformation(id: number) {
    let user = await this.userRepository.findOne({
      where: { id },
    });
    return user;
  }

  async Join(email: string, name: string, age: number, password: string) {
    const newuser = await this.userRepository.findOne({ where: { email } });
    if (newuser) {
      throw new UnauthorizedException('user exist');
      return;
    } else {
      const hashedpassword = await bcrypt.hash(password, 10);
      await this.userRepository.save({
        email,
        name,
        age,
        password: hashedpassword,
      });
    }
  }
}
