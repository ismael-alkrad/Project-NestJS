import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { CatService } from "src/cat/cat.service";
import { CatModule } from "src/cat/cat.module";

@Module({
    imports:[CatModule],
    controllers:[UserController],
    providers:[UserService],
})

export class UserModule{}
