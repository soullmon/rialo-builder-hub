export default function handler(req,res){
  // Mock leaderboard data. Replace with real DB or on-chain logic.
  const data = [
    { name: 'Carol', posts: 210 },
    { name: 'Alice', posts: 120 },
    { name: 'Bob', posts: 85 }
  ];
  res.json(data);
}
