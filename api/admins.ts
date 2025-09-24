import type { VercelRequest, VercelResponse } from '@vercel/node'

const API_KEY = "XmeASMeUEWmzEJemqWqZuwAKNMNEuDKM39320830263046595749475946394764__";

// Allowed User Agents
const ALLOWED_AGENTS = [
  "Roblox-Server",
];

const admins = {
  admins: [
    { name: "mrake4", userId: 953081984 },
    { name: "utkuxll07", userId: 3293205142 },
    { name: "UrLocalAnimat0r", userId: 9117452699 },
    { name: "YourLocalUIDesigner", userId: 3838058687 }
  ]
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { key } = req.query;
  const agent = req.headers["user-agent"] || "";

  if (key !== API_KEY) {
    return res.status(403).json({ error: "Access denied: ERROR 503." });
  }
  
  if (!ALLOWED_AGENTS.some(a => agent.includes(a))) {
    return res.status(403).json({ error: "Access denied: ERROR 503." });
  }

  res.status(200).json(admins);
}
