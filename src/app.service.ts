import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! - Rohith Reddy';
 
 }
 getAbout(): string {
  return 'Hello this is rohith';
}
}
