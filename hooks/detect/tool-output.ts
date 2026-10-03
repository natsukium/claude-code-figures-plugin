export type FoundImage = { base64: string; mime: string }

const IMAGE_MIME = /^image\/(png|jpeg|gif|webp)$/

// Tool results carry pictures in a few shapes: Read's `{ type: 'image', file:
// { base64, type } }`, MCP content blocks `{ type: 'image', data, mimeType }`,
// and API blocks `{ type: 'image', source: { data, media_type } }`.
export function imagesIn(output: unknown, limit = 4): FoundImage[] {
  const found: FoundImage[] = []
  const visit = (value: unknown, depth: number) => {
    if (found.length >= limit || depth > 6 || value === null || typeof value !== 'object') return
    if (Array.isArray(value)) {
      for (const item of value) visit(item, depth + 1)
      return
    }
    const record = value as Record<string, unknown>
    if (record.type === 'image') {
      const file = record.file as Record<string, unknown> | undefined
      const source = record.source as Record<string, unknown> | undefined
      const base64 = file?.base64 ?? record.data ?? source?.data
      const mime = file?.type ?? record.mimeType ?? source?.media_type
      if (typeof base64 === 'string' && typeof mime === 'string' && IMAGE_MIME.test(mime)) {
        found.push({ base64, mime })
        return
      }
    }
    for (const child of Object.values(record)) visit(child, depth + 1)
  }
  visit(output, 0)
  return found
}

export type SentImage = { path: string; mime: string }

const MIME_BY_EXTENSION: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  webp: 'image/webp',
}

// SendUserFile returns where its files are, `{ attachments: [{ path, isImage,
// media_type }] }`, not their bytes.
export function sentImagesIn(tool: string, output: unknown, limit = 4): SentImage[] {
  if (tool !== 'SendUserFile' || output === null || typeof output !== 'object') return []
  const attachments = (output as { attachments?: unknown }).attachments
  if (!Array.isArray(attachments)) return []
  const found: SentImage[] = []
  for (const attachment of attachments) {
    if (found.length >= limit) break
    if (attachment === null || typeof attachment !== 'object') continue
    const { path, isImage, media_type } = attachment as Record<string, unknown>
    if (typeof path !== 'string' || isImage !== true) continue
    const mime =
      typeof media_type === 'string' ? media_type : MIME_BY_EXTENSION[path.split('.').pop()?.toLowerCase() ?? '']
    if (mime !== undefined && IMAGE_MIME.test(mime)) found.push({ path, mime })
  }
  return found
}
