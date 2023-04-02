import { IsEmail } from 'class-validator';

// Define ValidateEmailDto as a separate class
export class ValidateEmailDto {
  @IsEmail()
  email: string;
}