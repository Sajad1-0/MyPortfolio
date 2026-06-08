/**
 * Download a static asset from /public. Uses fetch + blob so the browser
 * saves the file instead of opening the PDF inline (common on GitHub Pages).
 */
export const downloadPublicFile = async (
  fileName: string,
  downloadName?: string
): Promise<void> => {
  const publicUrl = process.env.PUBLIC_URL ?? '';
  const href = `${publicUrl}/${fileName.replace(/^\/+/, '')}`;

  try {
    const response = await fetch(href);

    if (!response.ok) {
      throw new Error(`File not found (${response.status})`);
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = objectUrl;
    anchor.download = downloadName ?? fileName;
    anchor.rel = 'noopener';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(objectUrl);
  } catch {
    // Fallback: open the file so the user can save it manually.
    window.open(href, '_blank', 'noopener,noreferrer');
  }
};
