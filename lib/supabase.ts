import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace these with your actual Supabase project URL and anon key.
// You can find these in your Supabase project settings under "API".
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const isSupabaseConfigured =
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  supabaseAnonKey !== 'your-anon-key';

if (!isSupabaseConfigured) {
  console.warn(
    "Supabase is not configured. Please add your SUPABASE_URL and SUPABASE_ANON_KEY to lib/supabase.ts to enable authentication."
  );
}

// The app will now initialize with placeholder values, preventing a crash.
// Authentication and database calls will fail until valid credentials are provided.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);