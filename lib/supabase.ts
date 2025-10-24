import { createClient } from '@supabase/supabase-js';

// IMPORTANT: These credentials connect to the sample Supabase project.
// For a production app, replace them with your own project's URL and anon key.
// FIX: Explicitly typing the constants as `string` prevents TypeScript from inferring them as
// literal types, which caused errors in the comparisons on lines 11 and 12.
const supabaseUrl: string = 'https://lmwcvulazahaweyikkjq.supabase.co';
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtd2N2dWxhemFoYXdleWlra2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjU1MTcsImV4cCI6MjA3NjkwMTUxN30.Jcz4hlmETfTKO-9JjxEfax7OVNcxeGlCJ6v-FLaToTE';

// FIX: The original check used the actual credentials as placeholder values, preventing the app from running.
// This now checks against generic placeholder text, allowing the app to proceed with the credentials above.
export const isSupabaseConfigured =
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  supabaseAnonKey !== 'your-anon-key';

if (!isSupabaseConfigured) {
  console.warn(
    "Supabase is not configured. Please add your SUPABASE_URL and SUPABASE_ANON_KEY to lib/supabase.ts to enable authentication."
  );
}

// Initialize the Supabase client.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
