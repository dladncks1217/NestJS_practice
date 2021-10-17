import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUserInformation() {}

  async Join(email: string, name: string, age: number, password: string) {}
}
