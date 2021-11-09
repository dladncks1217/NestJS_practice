import { Injectable, UnauthorizedException } from '@nestjs/common';
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

  loginCheck() {}

  async join(email: string, name: string, age: number, password: string) {
    const newUser = await this.usersRepository.findOne({ where: { email } });
    if (newUser) {
      throw new UnauthorizedException('exist user');
      return;
    } else {
      const hashedPasword = await bcrypt.hash(password, 12);
      await this.usersRepository.save({
        email,
        name,
        age,
        password: hashedPasword,
      });
    }
  }
}
