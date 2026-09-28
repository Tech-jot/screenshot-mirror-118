<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project decisions

- The website is implemented as a static, frontend-only buyer experience; forms show local success feedback and do not send data, because the supplied brief explicitly excludes backend functionality.
- Shareable sections use TanStack file-based routes with route-specific head metadata, because the brief asks for a multi-page SEO-ready site.
- Industrial photography is bundled as generated project assets and reused across pages, because the brief requires realistic replaceable imagery without inventing company claims.
