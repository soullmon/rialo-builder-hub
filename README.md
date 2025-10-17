# rialo-builder-hub
Static frontend + Vercel serverless API placeholders for Builder Space (Discord + X multi-login)

## What this ZIP contains
- `public/` : static frontend (index, dashboard, profile, leaderboard)
- `api/` : Vercel serverless endpoints (placeholders for OAuth start/callback and simple APIs)
- `vercel.json` : Vercel routes & builds
- `.env.example` : environment variables to set in Vercel Project settings

## Quick deploy steps (Vercel)
1. Create a new repository on GitHub and push the contents of this project.
2. On Vercel, import the repository.
3. In Vercel Project Settings -> Environment Variables, set the keys from `.env.example`.
4. Deploy the project. Visit `https://<your-vercel-domain>/`

## Notes about OAuth
- The `api/auth/*` endpoints are minimal placeholders. For a production-ready OAuth integration,
  you must implement secure server-side token exchange, state validation, and session creation.
- Discord does not have a built-in Firebase provider; this scaffold provides a callback endpoint
  where you can exchange the `code` for an access token and then create an application session.

## Theme color
Primary color is set to `#a9ddd3` per your request and used in CSS variables.

## Need help?
Tell me if you want me to:
- push this repo to your GitHub (you'll need to provide repo URL or grant access), or
- deploy it to your Vercel account (I can provide step-by-step instructions).
