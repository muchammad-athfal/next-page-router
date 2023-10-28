// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ revalidated: false });
  }

  if (req.query.data === "product") {
    try {
      await res.revalidate("/products/static");
      return res.json({ revalidated: true });
    } catch (error) {
      res.status(500).json({ revalidated: false });
    }
  }

  return res.json({
    revalidated: false,
    message: "Pilih data mana yang mau direvalidated",
  });
}
