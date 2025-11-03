import { NextRequest } from "next/server";

const setCorsHeaders = (res: Response) => {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Request-Method", "*");
  res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.headers.set("Access-Control-Allow-Headers", "*");
};

export const OPTIONS = () => {
  const response = new Response(null, {
    status: 204,
  });
  setCorsHeaders(response);
  return response;
};

// 临时禁用 tRPC 路由
const handler = async (req: NextRequest) => {
  return new Response("tRPC endpoint temporarily disabled", {
    status: 503,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

export { handler as GET, handler as POST };