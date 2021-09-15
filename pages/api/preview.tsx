import { NextApiResponse } from "next";

// API route that sets a cookie that tells our pages that the incoming request is a preview request.

export default (req, res: NextApiResponse) => {
  res.setPreviewData({});
  res.redirect(req.query.route);
};
