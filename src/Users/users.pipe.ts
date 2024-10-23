import { ArgumentMetadata, Injectable, PipeTransform, ParseIntPipe, HttpException } from '@nestjs/common';

@Injectable()
export class UsersPipe extends ParseIntPipe {
  async transform(value: any, metadata: ArgumentMetadata) {
    try{
      return await super.transform(value, metadata);
    }catch(error){
      throw new HttpException({path: 'users', message: 'Invalid data'}, 400);
    }
  }
}
