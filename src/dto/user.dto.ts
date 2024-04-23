import {
  IsEmail,
  IsNotEmpty,
  IsSemVer,
  IsString,
  IsStrongPassword,
} from 'class-validator';
//User request dtos for request validation
export class UserSignUpDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsStrongPassword()
  @IsNotEmpty()
  confirmPassword: string;
}

export class UserLoginDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
