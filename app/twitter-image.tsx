import OGImage, { alt as ogAlt, size as ogSize, contentType as ogContentType } from "./opengraph-image";

export const runtime = "edge";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

// Mirror the Open Graph image so X/Twitter cards render the
// "summary_large_image" layout instead of falling back to "summary".
export default OGImage;
