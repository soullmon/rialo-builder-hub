export default function handler(req, res){
  // Redirect to Discord OAuth2 authorize URL
  const clientId = process.env.DISCORD_CLIENT_ID;
  const redirect = encodeURIComponent(process.env.DISCORD_REDIRECT_URI || '');
  const scope = encodeURIComponent('identify email');
  if(!clientId || !redirect) return res.status(500).send('DISCORD_CLIENT_ID or REDIRECT not set in env');
  const url = `https://discord.com/api/oauth2/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirect}`;
  res.writeHead(302, { Location: url });
  res.end();
}
