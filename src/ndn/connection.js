import { connectToRouter } from "@ndn/autoconfig";
import { H3Transport } from "@ndn/quic-transport";
const pref = "ws://namedata.tech:9696/ws";

export async function connection() {
  const face = await connectToRouter(pref, {
    H3Transport,
    testConnection: false,
  });
  console.log(face);
}
