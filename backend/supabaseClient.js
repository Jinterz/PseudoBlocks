require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
); //entry point to Supabase functionality

async function createUser(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.log("Error creating an account: ", error);
    return { error };
  }

  const profileData = {
    id: uuid(),
    user_id: user.id,
    created_at: new Date().toISOString,
  };

  const { error: profileError } = await supabase
    .from("profiles")
    .insert([profileData]);

  if (profileError) {
    console.log("Error creating user profile: ", profileError);
    return { profileError };
  }

  return {user}; //Created user is returned 

}


