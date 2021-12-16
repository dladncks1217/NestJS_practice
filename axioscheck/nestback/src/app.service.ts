import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { Axios, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getAxiosReturn(): Promise<any> {
    const result = await this.httpService
      .get('http://localhost:8000')
      .toPromise();
    return result.data;
  }
}
