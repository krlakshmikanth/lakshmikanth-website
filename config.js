// Analytics Configuration
const config = {
    clarityId: process.env.CLARITY_ID || '',
    gaMeasurementId: process.env.GA_MEASUREMENT_ID || ''
};

// Replace placeholders in HTML
document.addEventListener('DOMContentLoaded', () => {
    // Replace Microsoft Clarity ID
    const clarityScript = document.querySelector('script[src*="clarity.ms"]');
    if (clarityScript && config.clarityId) {
        clarityScript.src = clarityScript.src.replace('CLARITY_ID', config.clarityId);
    }

    // Replace Google Analytics ID
    const gaScript = document.querySelector('script[src*="googletagmanager.com"]');
    if (gaScript && config.gaMeasurementId) {
        gaScript.src = gaScript.src.replace('GA_MEASUREMENT_ID', config.gaMeasurementId);
    }

    const gaConfig = document.querySelector('script:not([src])');
    if (gaConfig && config.gaMeasurementId) {
        gaConfig.textContent = gaConfig.textContent.replace(/GA_MEASUREMENT_ID/g, config.gaMeasurementId);
    }
}); 