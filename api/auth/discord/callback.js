import fetch from 'node-fetch';
export default async function handler(req, res){
  const code = req.query.code || req.url && new URL(req.url, 'http://localhost').searchParams.get('code');
  if(!code) return res.status(400).send('No code');
  // NOTE: In production, exchange code server-side securely.
  // This placeholder returns code for debugging.
  res.json({ ok:true, code });
}
