// Feature flags. Flip a value here, or override at build time:
//   REACT_APP_SHOW_PROJECTS=true npm run build
const flag = (envName, fallback) => {
    const v = process.env[envName];
    return v === undefined ? fallback : v === 'true';
};

export default {
    // The "Recent Projects" page (nav link + route). Hidden for now.
    showProjects: flag('REACT_APP_SHOW_PROJECTS', false),
    // The "Download Résumé" button on the Credentials page.
    showResumeDownload: flag('REACT_APP_SHOW_RESUME_DOWNLOAD', false)
};
