# Image placement convention

Every image referenced from `src/data/*.ts` points at a path under this
folder following the pattern:

```
/images/<category-slug>/<file-name>.jpg
```

For example, `/images/email-marketing/email-refresh-01.jpg` should live at
`public/images/email-marketing/email-refresh-01.jpg`.

Until a real file exists at a given path, `PlaceholderImage`
(`src/components/decorative/PlaceholderImage.tsx`) automatically renders a
labeled color-block placeholder in the correct aspect ratio instead — so the
site works fully today. Drop a real file in at the exact path referenced in
the data files and it will appear automatically; no data or component changes
are needed.
