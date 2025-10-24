import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace these with your actual Supabase project URL and anon key.
// You can find these in your Supabase project settings under "API".
const supabaseUrlFromConfig = 'https://lmwcvulazahaweyikkjq.supabase.co';
const supabaseAnonKeyFromConfig = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtd2N2dWxhemFoYXdleWlra2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjU1MTcsImV4cCI6MjA3NjkwMTUxN30.Jcz4hlmETfTKO-9JjxEfax7OVNcxeGlCJ6v-FLaToTE';

export const isSupabaseConfigured =
  supabaseUrlFromConfig !== 'https://lmwcvulazahaweyikkjq.supabase.co' &&
  supabaseAnonKeyFromConfig !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtd2N2dWxhemFoYXdleWlra2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjU1MTcsImV4cCI6MjA3NjkwMTUxN30.Jcz4hlmETfTKO-9JjxEfax7OVNcxeGlCJ6v-FLaToTE';

let supabaseUrl: string;
let supabaseAnonKey: string;

if (isSupabaseConfigured) {
  supabaseUrl = supabaseUrlFromConfig;
  supabaseAnonKey = supabaseAnonKeyFromConfig;
} else {
  console.warn(
    "Supabase is not configured. Please add your SUPABASE_URL and SUPABASE_ANON_KEY to lib/supabase.ts to enable authentication."
  );
  // Use valid-looking but non-functional credentials to prevent the client from crashing on initialization.
  // The `isSupabaseConfigured` flag will ensure the app shows the config message instead of trying to use this dummy client.
  supabaseUrl = 'http://127.0.0.1:54321';
  supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';
}

// The app will now initialize without crashing.
// Authentication and database calls will only be attempted if `isSupabaseConfigured` is true.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
