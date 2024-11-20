import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';


export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 4000;
export const supabaseUrl = DEVELOPMENT ? process.env.LOCAL_SUPABASE_URL as string : process.env.SUPABASE_URL as string;
export const supabaseAnonKey = DEVELOPMENT ? process.env.LOCAL_SUPABASE_ANON_KEY as string : process.env.SUPABASE_ANON_KEY as string;
export const supabaseServiceRoleKey = DEVELOPMENT ? process.env.LOCAL_SUPBASE_SERVICE_ROLE_KEY as string : process.env.SUPABASE_SERVICE_ROLE_KEY as string;
export const isProduction = process.env.NODE_ENV === 'production';
export const authTokenName = process.env.AUTH_TOKEN_NAME as string;
export const origin = DEVELOPMENT ? `http://localhost:3000` : `https://${process.env.ORIGIN_HOSTNAME}`;
export const supabase = {
    supabaseUrl,
    supabaseAnonKey,
    supabaseServiceRoleKey
};

export const server = {
    SERVER_HOSTNAME,
    SERVER_PORT
};

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;