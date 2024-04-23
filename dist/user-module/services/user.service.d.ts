import { JwtService } from '@nestjs/jwt';
import { UserLoginInterface, UserSignUpInterface } from 'src/interface/user.interface';
import { Utility } from '../../utils/utility';
import { UserRepository } from '../repositories/user.repository';
export declare class UserService {
    private readonly userRepository;
    private readonly utility;
    private readonly jwtService;
    constructor(userRepository: UserRepository, utility: Utility, jwtService: JwtService);
    saveUser(body: UserSignUpInterface): Promise<{
        userId: string;
        email: string;
        accessToken: string;
    }>;
    loginUser(body: UserLoginInterface): Promise<{
        userId: string;
        email: string;
        accessToken: string;
    }>;
}
