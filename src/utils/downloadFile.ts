export const downloadPublicFile = (fileName: string, downloadName?: string): void => {
  const publicUrl = process.env.PUBLIC_URL ?? '';
  const href = `${publicUrl}/${fileName.replace(/^\/+/, '')}`;

  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.download = downloadName ?? fileName;
  anchor.rel = 'noopener';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
