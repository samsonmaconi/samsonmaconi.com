#!/usr/bin/env bash
# Run from the repo root on a machine with internet access.
# Downloads brand icons from the Simple Icons CDN into public/img/skills/.
# Skills with no icon (or that fail) fall back to the bundled inline icons.
set -u
D=public/img/skills; mkdir -p "$D"
get() { # file-name slug
  if curl -fsSL "https://cdn.simpleicons.org/$2" -o "$D/$1.svg" && [ -s "$D/$1.svg" ]; then echo "ok   $1"; else rm -f "$D/$1.svg"; echo "MISS $1 (will use fallback)"; fi
}
get react react
get typescript typescript
get graphql graphql
get next-js nextdotjs
get react-native react
get nodejs nodedotjs
get jest jest
get playwright playwright
get claude-code claude
get copilot githubcopilot
get cursor cursor
get mcp modelcontextprotocol
get git git
get azure microsoftazure
get databricks databricks
get npm npm
get javascript javascript
get html html5
get css css3
get python python
