import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user-module/repositories/user.repository';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly appRepository;
    private readonly jwtService;
    constructor(appRepository: UserRepository, jwtService: JwtService);
    validate(payload: any): Promise<any>;
    validateUser(payload: any): Promise<{
        id: any;
        userId: string;
        username: string;
    }>;
}
export {};
