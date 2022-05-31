import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { DoctorsService } from 'src/doctors/doctors.service';
import { PatientsService } from 'src/patients/patients.service';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private repo: Repository<User>, private doctorService: DoctorsService, private patientService: PatientsService) { }



  create(createUserDto: CreateUserDto) {

    let user = this.repo.create(createUserDto)
    return this.repo.save(user)
  }




  async signup(createUserDto: CreateUserDto) {
    if ((await this.repo.findOne({ email: createUserDto.email }))) {
      throw new ConflictException('User already exist');
    }
    let salt = await bcrypt.genSalt();
    let hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    // console.log(hashedPassword);

    createUserDto.password = hashedPassword
    // console.log(createUserDto);

    let user = await this.repo.create(createUserDto)
    let savedUser = await this.repo.save(user)
    if (user) {
      // console.log(user);

      let { id } = await this.findOne(user.email)
      if (user.userType) {
        this.doctorService.create({ userId: id })

      } else {
        this.patientService.create({ userId: id })

      }

    }
    return savedUser

  }

  findAll() {
    return this.repo.find()
  }

  async findOne(email: any) {
    // console.log(email);

    let user = await this.repo.findOne({ email })
    // console.log(user);
    if (!user) throw new NotFoundException('not Found user')
    return user
  }

  async findById(id: number) {
    let user = this.repo.findOne(id)
    if (!user) throw new NotFoundException('not found user')

    return user

  }

  async signin(email: string, password: string) {
    let user = await this.repo.findOne({ email })
    if (!user) {
      throw new NotFoundException('not Found user')
    }
    // console.log(user);
    let isMatch = await bcrypt.compare(password, user.password);
    // console.log(user.password);
    // console.log(password);
    // console.log(isMatch);



    if (!isMatch) {
      throw new UnauthorizedException(' invalid password')
    }


    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repo.save({ ...updateUserDto, id })
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
