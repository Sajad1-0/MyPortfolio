import { FiDownload } from 'react-icons/fi';
import { downloadPublicFile } from '../../utils/downloadFile';
import './CvDownload.scss';

interface CvOption {
  id: 'en' | 'sv';
  label: string;
  fileName: string;
  downloadName: string;
}

const CV_OPTIONS: CvOption[] = [
  {
    id: 'en',
    label: 'Download CV (English)',
    fileName: 'SajjadCV-En.pdf',
    downloadName: 'Sajjad-Ghaderi-CV-English.pdf',
  },
  {
    id: 'sv',
    label: 'Download CV (Swedish)',
    fileName: 'SajjadCV.pdf',
    downloadName: 'Sajjad-Ghaderi-CV-Svenska.pdf',
  },
];

const CvDownload = () => {
  return (
    <div className="cv-download" role="group" aria-label="Download CV">
      {CV_OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          className="cv-download__btn"
          onClick={() => downloadPublicFile(option.fileName, option.downloadName)}
        >
          <FiDownload aria-hidden="true" />
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CvDownload;
