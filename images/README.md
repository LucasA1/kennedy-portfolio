# Image placement convention

Images referenced from `src/data/*.ts` currently follow two conventions:

## Project detail images

```
/images/projects/<subfolder>/<file-name>.png   (src/data/projects.ts, miscGallery.ts)
```

For example, `/images/projects/email/email-one.png` lives at
`public/images/projects/email/email-one.png`.

## Home-page and category-thumbnail images

```
/images/home/<file-name>.png
```

`src/data/home.ts` uses these for the hero, about section, and the
portfolio-preview grid. `src/data/categories.ts` reuses the same files as
thumbnails for the Portfolio page's category grid, so a given category's
image is identical across the Home page preview, the Portfolio page, and (via
`CategoryTile`'s `image` prop override) any other place it's rendered.

All of the above are real files and already in place. If a path referenced
from `src/data/*.ts` doesn't have a matching file, `PlaceholderImage`
(`src/components/decorative/PlaceholderImage.tsx`) automatically renders a
labeled color-block placeholder in the correct aspect ratio instead, so the
site keeps working. Drop a real file in at the exact path referenced in the
data files and it will appear automatically; no data or component changes are
needed.
