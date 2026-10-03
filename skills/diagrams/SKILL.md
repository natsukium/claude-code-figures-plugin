---
name: diagrams
description: How to write diagram code blocks and display math that the figures plugin draws as pictures in the terminal (mermaid, dot/graphviz, d2, svg, LaTeX math). Load before putting a diagram or a formula in a reply, or when asked to draw, chart, or visualize a flow, architecture, state machine, dependency graph, or sequence.
---

# Diagrams and math that render inline

A fenced block tagged `mermaid`, `dot` (or `graphviz`), `d2`, or `svg` in a reply is drawn as a
picture under the reply, and the code stays visible above it. Where the terminal cannot show
images, or the block's renderer is not installed, only the code is shown, so the source should
still read sensibly as text.

If a block fails, the first line of the renderer's error is shown in red under the reply. Fix the
source and send the corrected block, rather than explaining the error.

## Choosing a language

- `mermaid` for flowcharts, sequence diagrams, state machines, class and ER diagrams.
- `dot` for graphs with many nodes or edges, such as dependency or call graphs; Graphviz lays them
  out more cleanly than mermaid does.
- `d2` for architecture diagrams with nested containers.
- `svg` only for a figure none of the above can express.

## Math

Display math, `$$ … $$`, `\[ … \]`, or a `math` block, is typeset with MathJax and drawn under the
reply. Inline `$…$` stays plain text, so put a formula that matters on its own as display math.

- amsmath environments such as `aligned` and `cases`, and `mathtools`, `cancel`, `color`, `braket`,
  and `\boldsymbol`, work.
- Each formula becomes its own picture, so keep a derivation in one `aligned` block instead of many
  separate ones.
- A `latex` block containing `\documentclass` is treated as a document and left as code.

## Writing mermaid for mmdr

Mermaid blocks are rendered by mmdr, a reimplementation of mermaid.js that does not accept every
construct mermaid.js does. mmdc, if installed, takes over only when mmdr reports an error, and mmdr
misparses some blocks without one, so write for mmdr:

- Write one edge per line. A chained edge with a label, such as `A --> B -->|ok| C`, is misparsed;
  write `A --> B` and `B -->|ok| C` instead.
- Keep labels short and quote any label containing punctuation: `A["parse (stage 1)"]`.

## Size

A picture is at most 120 cells wide and 30 rows tall by default. One that would shrink to under 60%
is grown up to the terminal's height, and if it is still small the user sees a note pointing to
`/figures`. A long chain laid out top to bottom still ends up tiny; prefer `flowchart LR` for long
chains, and split a diagram of more than about 20 nodes into several.
