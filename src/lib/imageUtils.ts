export function generateBlurDataURL(
  width: number = 10,
  height: number = 10
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e5e7eb"/>
    </svg>
  `

  if (typeof window === "undefined") {
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`
  } else {
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }
}
