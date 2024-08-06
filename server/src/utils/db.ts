import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'
import dotenv from "dotenv";
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

// export const supabase = createClient<Database>(
//   supabaseUrl,
//   supabaseKey,
//   {
//     auth: {
//       autoRefreshToken: false,
//       persistSession: false,
//       detectSessionInUrl: false
//     },
//   }
// )

export default function supabaseClient(token: string) {
  return createClient<Database>(
    supabaseUrl,
    supabaseKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      },
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  )
}