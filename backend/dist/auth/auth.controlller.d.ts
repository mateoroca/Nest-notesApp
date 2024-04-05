import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: AuthDto): Promise<{
        userid: number;
        token: {
            access_token: string;
        };
    }>;
    signUp(dto: AuthDto): Promise<{
        userid: number;
        token: {
            access_token: string;
        };
    }>;
}
