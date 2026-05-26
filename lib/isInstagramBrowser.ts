export function isInstagramBrowser(userAgent?: string) {
  let ua = userAgent;

  if (!ua) {
    if (typeof navigator === "undefined") return false;
    ua = navigator.userAgent;
  }

  ua = ua.toLowerCase();

  return ua.includes("instagram") || ua.includes("threads");
}
