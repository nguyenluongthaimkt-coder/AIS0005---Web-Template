import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace these with your actual Supabase project URL and anon key.
// You can find these in your Supabase project settings under "API".
const supabaseUrl = 'https://lmwcvulazahaweyikkjq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtd2N2dWxhemFoYXdleWlra2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjU1MTcsImV4cCI6MjA3NjkwMTUxN30.Jcz4hlmETfTKO-9JjxEfax7OVNcxeGlCJ6v-FLaToTE';

export const isSupabaseConfigured =
  supabaseUrl !== 'https://lmwcvulazahaweyikkjq.supabase.co' &&
  supabaseAnonKey !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtd2N2dWxhemFoYXdleWlra2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjU1MTcsImV4cCI6MjA3NjkwMTUxN30.Jcz4hlmETfTKO-9JjxEfax7OVNcxeGlCJ6v-FLaToTE';

if (!isSupabaseConfigured) {
  console.warn(
    "Supabase is not configured. Please add your SUPABASE_URL and SUPABASE_ANON_KEY to lib/supabase.ts to enable authentication."
  );
}

// The app will now initialize with placeholder values, preventing a crash.
// Authentication and database calls will fail until valid credentials are provided.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);