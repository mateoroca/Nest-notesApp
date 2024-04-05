import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private Prisma;
    private jwt;
    private config;
    constructor(Prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: AuthDto): Promise<{
        userid: number;
        token: {
            access_token: string;
        };
    }>;
    login(dto: AuthDto): Promise<{
        userid: number;
        token: {
            access_token: string;
        };
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
