// Analytics Configuration
const config = {
    clarityId: '__CLARITY_ID__',  // Will be replaced by GitHub Actions
    gaMeasurementId: '__GA_ID__'  // Will be replaced by GitHub Actions
};

// Initialize Analytics
function initializeAnalytics() {
    // Initialize Microsoft Clarity
    if (config.clarityId && config.clarityId !== '__CLARITY_ID__') {
        // Create and load Clarity script
        const clarityScript = document.createElement('script');
        clarityScript.type = 'text/javascript';
        clarityScript.innerHTML = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${config.clarityId}");
        `;
        document.head.appendChild(clarityScript);
        console.log('Clarity initialized with ID:', config.clarityId);
    } else {
        console.warn('Microsoft Clarity ID not configured');
    }

    // Initialize Google Analytics
    if (config.gaMeasurementId && config.gaMeasurementId !== '__GA_ID__') {
        // Load Google Analytics script
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaMeasurementId}`;
        document.head.appendChild(gaScript);

        // Initialize dataLayer and gtag function
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag; // Make gtag globally available

        // Configure Google Analytics
        gaScript.onload = () => {
            gtag('js', new Date());
            gtag('config', config.gaMeasurementId, {
                page_path: window.location.pathname,
                debug_mode: true // Enable debug mode temporarily
            });
            console.log('Google Analytics initialized with ID:', config.gaMeasurementId);
        };
    } else {
        console.warn('Google Analytics Measurement ID not configured');
    }
}

// Initialize analytics when the document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnalytics);
} else {
    initializeAnalytics();
}

// Track page views when the URL changes (for single-page applications)
window.addEventListener('popstate', function() {
    if (window.gtag) {
        gtag('config', config.gaMeasurementId, {
            page_path: window.location.pathname
        });
    }
}); 