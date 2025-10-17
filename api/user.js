// Simple mock user endpoint — in production replace with session-backed user
export default function handler(req,res){
  // Attempt to read a cookie or header (for demo we return logged=false)
  // If you implement sessions, return real user data here.
  res.json({ logged:false });
}
