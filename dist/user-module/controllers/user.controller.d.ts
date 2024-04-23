import { UserLoginDto, UserSignUpDto } from "src/dto/user.dto";
import { UserService } from "../services/user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    signUser(body: UserSignUpDto): Promise<{
        userId: string;
        email: string;
        accessToken: string;
    }>;
    loginUser(body: UserLoginDto): Promise<{
        userId: string;
        username: string;
        accessToken: string;
    }>;
}
