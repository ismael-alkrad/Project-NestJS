import { Body, Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UsersPipe } from "./users.pipe";

@Controller("users")
export class UserController{
    constructor(private readonly userService: UserService) {}
    @Get()
    logUser(){
        return this.userService.findAll();
    }

    // @Get()
    // signInUser(@Body() user: any){
    //     console.log(user);
    //     return `This action returns a user`;
    // }

    @Get(':id')
    getUser(@Param('id', UsersPipe) id: string){
        return `This action returns a #${id} user`;
    }

    @Get(':id/posts')
    getPosts(@Query() id: string){
        console.log(id);
        return `This action returns posts of a user`;
    }
}