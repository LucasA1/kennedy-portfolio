# Content To-Do

The source design PDF reuses two placeholder paragraphs verbatim across several
projects where they don't actually describe the work shown (almost certainly
leftover design-file placeholder text that was never replaced before the PDF
was exported). These were transcribed faithfully into `src/data/projects.ts`
rather than rewritten, and each affected entry is tagged internally with a
`contentNotice` field (not rendered on the site) so they're easy to find.

Replace the copy for these projects with real descriptions when you have them:

- **Executive Presentations** → "Executive Presentations" (reuses the
  "Employee Engagement Events" write-up)
- **Brand Stewardship** → "Roshek Skinner Financial" (reuses the events
  write-up)
- **Brand Stewardship** → "Bral | Neidert Advisors" (reuses the generic
  "wide range of internal communications... SendGrid and Workshop" write-up)
- **Marketing Campaigns** → "Alliance Environmental" (reuses the events
  write-up)
- **Marketing Campaigns** → "Behavior in Action" (reuses the generic
  communications write-up)
- **UI/UX Design** → "IT Explorer" (reuses the events write-up)
- **UI/UX Design** → "Profile Page" (reuses the events write-up)
- **UI/UX Design** → "Power BI Report Templates" (reuses the generic
  communications write-up)
- **UI/UX Design** → "App Icons" (reuses the generic communications write-up)

To find these in code, search `src/data/projects.ts` for `contentNotice`.

## Other known gaps

- All project images are placeholders (see `public/images/README.md` for the
  file-naming convention — drop real files in at the same paths and they'll
  appear automatically, no code changes needed).
- `public/resume/Kennedy-Papian-Resume.pdf` and the portfolio PDF referenced
  in `src/data/siteConfig.ts` (`contact.portfolioPdfUrl`) don't exist yet —
  the download links are wired up but will 404 until the real files are added.
- The resume's education date range (2015–2018) differs from the Home page's
  bio, which doesn't state dates — transcribed as-is from the source PDF,
  not reconciled.
