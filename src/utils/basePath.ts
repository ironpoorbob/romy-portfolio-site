const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path?: string) {
  if (!path) return path;
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('#') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  if (!basePath || !path.startsWith('/')) return path;
  return `${basePath}${path}`;
}
