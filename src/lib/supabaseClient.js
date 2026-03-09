import { createClient } from '@supabase/supabase-js';

// Environment variables should be set in .env file
// Example .env file:
// VITE_SUPABASE_URL=https://your-project.supabase.co
// VITE_SUPABASE_ANON_KEY=your-anon-key

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate that required environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[Supabase] Missing environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
}

// Create Supabase client with safe fallbacks
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ error: { message: 'Supabase not configured' } }),
        select: async () => ({ error: { message: 'Supabase not configured' } }),
      }),
    };
