export type LoadRange = (range: string) => Promise<unknown[] | undefined>
export function tex2svg(source: string, loader: LoadRange): Promise<string>
