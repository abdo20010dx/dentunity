import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, UseGuards, Request, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, SigninDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }


  // @UseGuards(AuthGuard('jwt'))
  // @Get('hello')
  // hello(@Request() req) {
  //   console.log(req.headers);
  //   console.log(req.user);

  //   return 'hello'
  // }



  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   console.log(createUserDto);

  //   return this.usersService.create(createUserDto);
  // }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(+id);
  }

  // @UseInterceptors(ClassSerializerInterceptor)
  // @Post('/signin')
  // signin(@Body() signinDto: SigninDto) {
  //   console.log(signinDto);

  //   let { email, password } = signinDto
  //   return this.usersService.signin(email, password);
  // }


  @Patch()
  update(@Body() updateUserDto: UpdateUserDto, @Req() req: any) {
    delete updateUserDto.userType
    delete updateUserDto.password
    return this.usersService.update(+req.user.id, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
