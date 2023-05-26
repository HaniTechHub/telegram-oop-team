export interface LoginRequestBody {
    username: string;
    password: string;
}

export interface RegisterRequestBody extends LoginRequestBody {}