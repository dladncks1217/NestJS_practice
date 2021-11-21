import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async getAxiosReturn() {
    const result = await axios.get('http://localhost:8000');
    return result;
  }
}
