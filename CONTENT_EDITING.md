# Content Editing

Most editable site content lives in Markdown files under:

```text
src/content/
```

Main pages live in:

```text
src/content/pages/
```

Work pages live in:

```text
src/content/work/
```

Images live in:

```text
public/img/
```

## Editing Text

Each Markdown file starts with a metadata block between `---` lines:

```md
---
title: Drawing
thumbnail: /img/charcoal2.jpg
description: "Short description for search engines and previews"
---
```

The content below the second `---` is the visible page content. Edit regular paragraphs there.

## Adding Images

Put the image file in:

```text
public/img/
```

Then add it to a Markdown page like this:

```md
![Short image description](/img/file-name.jpg)
```

Use simple file names with no spaces when possible, such as:

```text
fish-heads-ceramic.jpg
```

## Image Captions

For work pages, put the caption on the line after the image with a blank line between them:

```md
![Charcoal drawing](/img/charcoal1.jpg)

Roadkill figure; 39" by 77", charcoal, paper, tape
```

## Top Work Image Caption

The large top image on a work page comes from `thumbnail`.

To add a caption directly below that top image, add `thumbnailDescription` in the metadata block:

```md
---
title: Drawing
thumbnail: /img/charcoal2.jpg
thumbnailDescription: "Deer; 49\" by 30\", charcoal, paper, tape"
---
```

## Metadata Description

The `description` field is for page metadata only. It is not shown as page content on work pages.

```md
description: "Romy Jervis: Drawing"
```

If there is no description, remove the line entirely instead of leaving it blank.
