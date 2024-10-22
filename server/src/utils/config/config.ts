import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 4000;
export const supabaseUrl = process.env.SUPABASE_URL as string;
export const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;
export const supabaseServiceRoleKey = process.env.SUPBASE_SERVICE_ROLE_KEY as string;
export const isProduction = process.env.NODE_ENV === 'production';

export const supabase = {
    supabaseUrl,
    supabaseAnonKey,
    supabaseServiceRoleKey
};

export const server = {
    SERVER_HOSTNAME,
    SERVER_PORT
};
