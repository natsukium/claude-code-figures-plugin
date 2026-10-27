import { expect, test } from 'vitest'

import { resolveCss } from '../../hooks/svg/css.ts'

const svg = (body: string, style = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"${style ? ` style="${style}"` : ''}>${body}</svg>`

test('a var() in an attribute takes the custom property an ancestor declared', () => {
  expect(resolveCss(svg('<g><rect fill="var(--a)"/></g>', '--a:#123456'))).toBe(svg('<g><rect fill="#123456"/></g>'))
})

test('a var() naming no property takes its fallback, itself resolved, commas and all', () => {
  expect(resolveCss(svg('<rect fill="var(--none, var(--b, rgb(1, 2, 3)))"/>'))).toContain('fill="rgb(1, 2, 3)"')
})

test("a custom property referring to another on the same element reads that element's value", () => {
  expect(resolveCss(svg('<rect fill="var(--a)" style="--b:red;--a:var(--b)"/>'))).toContain('fill="red"')
})

test('a nearer declaration overrides the inherited one', () => {
  expect(resolveCss(svg('<g style="--a:blue"><rect fill="var(--a)"/></g>', '--a:red'))).toContain('fill="blue"')
})

test('the style attribute keeps its other declarations, resolved, and loses the custom properties', () => {
  expect(resolveCss(svg('', '--c:blue;stroke:var(--c);color:red'))).toBe(
    `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" style="stroke:blue;color:red"/>`,
  )
})

test('a geometry property in a style becomes its attribute, overriding one already there', () => {
  expect(resolveCss(svg('<rect rx="1" style="--r:4px;rx:var(--r);fill:red"/>'))).toContain(
    '<rect rx="4px" style="fill:red"/>',
  )
})

test('a semicolon inside parentheses or quotes does not end a declaration', () => {
  const style = 'fill:url(data:image/png;base64,AAAA);font-family:"a;b";stroke:red'
  expect(resolveCss(svg(`<rect style='${style}'/>`))).toContain(`style="${style.replaceAll('"', '&quot;')}"`)
})

test('color-mix in srgb mixes by the given share, the other color taking the rest', () => {
  expect(resolveCss(svg('<rect fill="color-mix(in srgb, #ff0000 25%, #0000ff)"/>'))).toContain(
    'fill="rgba(64,0,191,1)"',
  )
  expect(resolveCss(svg('<rect fill="color-mix(in srgb,var(--a) 50%,white)"/>', '--a:black'))).toContain(
    'fill="rgba(128,128,128,1)"',
  )
})

test('a property that refers to itself, or a var() with nothing to fall back on, is an error', () => {
  expect(() => resolveCss(svg('<rect fill="var(--a)"/>', '--a:var(--a)'))).toThrow(/refers to itself/)
  expect(() => resolveCss(svg('<rect fill="var(--a)"/>'))).toThrow(/no value/)
})

test('text and attribute values come out escaped as they went in', () => {
  const body = '<text title="a &quot;b&quot; &lt; c">x &amp; y &lt; z</text>'
  expect(resolveCss(svg(body))).toBe(svg(body))
})
