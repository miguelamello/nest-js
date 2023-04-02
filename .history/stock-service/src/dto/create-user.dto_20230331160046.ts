import { IsEmail } from 'class-validator';
export default class CreateUserDto {

  @IsEmail()
  "email"?: string;
  "password"?: string;
  "role"?: string;

}

