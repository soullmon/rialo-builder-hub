export default function handler(req,res){
  const clientId = process.env.X_CLIENT_ID;
  const redirect = encodeURIComponent(process.env.X_REDIRECT_URI || '');
  if(!clientId || !redirect) return res.status(500).send('X_CLIENT_ID or REDIRECT not set in env');
  // Example authorize URL for OAuth 2.0 authorization code
  const url = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect}&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`;
  res.writeHead(302, { Location: url });
  res.end();
}
