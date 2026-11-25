import { createLeadRouteHandler } from "@wealthreach/site-kit/next/leads";
import { getWealthReachConfig } from "@/lib/config";

export const POST = createLeadRouteHandler(getWealthReachConfig);
