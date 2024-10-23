import { Injectable } from '@nestjs/common';
import { CatService } from 'src/cat/cat.service';

@Injectable()
export class UserService {
    constructor(private readonly catService: CatService) {}
    findAll(){
        return this.catService.getHello();
    }
}