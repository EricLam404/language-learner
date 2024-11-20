export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const NEXT_PUBLIC_SUPABASE_URL = DEVELOPMENT ? process.env.NEXT_PUBLIC_LOCAL_SUPABASE_URL as string : process.env.NEXT_PUBLIC_SUPABASE_URL as string;
export const NEXT_PUBLIC_SUPABASE_ANON_KEY = DEVELOPMENT ? process.env.NEXT_PUBLIC_LOCAL_SUPABASE_ANON_KEY as string : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
export const URI = DEVELOPMENT ? process.env.NEXT_PUBLIC_LOCAL_URI as string : process.env.NEXT_PUBLIC_PROD_URI as string;
export const HOST_NAME = DEVELOPMENT ? process.env.LOCAL_HOST as string : process.env.PROD_HOST as string;
export const isProduction = process.env.NODE_ENV === 'production';
