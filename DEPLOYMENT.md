# Deployment

This site is deployed manually through DreamHost File Manager.

## Build The Site

From the project folder, run:

```bash
npm run build
```

This creates the static site in:

```text
dist/
```

Upload the contents of `dist/`, not the `dist` folder itself. The server root should receive files and folders such as:

```text
index.html
_astro/
bio/
contact/
work/
```

## Upload In DreamHost File Manager

To upload new or updated content in DreamHost File Manager:

1. On the Manage Websites page, find the domain and click Manage.
2. Click the Content tab at the top of the dashboard, then click File Manager.
3. A separate tab will open showing the server folders. Double-click the folder named exactly after the domain name.
4. Delete any default placeholder files DreamHost dropped in there. This is usually only needed on the first upload. For later updates, replace the existing site files with the new build output.
5. Click Upload, or zip up the build output on your computer and use Upload Zip.
6. Upload `index.html`, CSS, bundled JavaScript assets, and the generated folders directly into that root directory. You can also drag and drop the contents of the `dist/` folder.

After upload, visit the site in a browser and refresh to confirm the new content is live.
