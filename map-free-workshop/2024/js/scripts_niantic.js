function copyLinkToClipboard(link_name) {
    let parts = window.location.href.split('#');
    let url = (1 < parts.length)
        ? parts[parts.length - 2] + '#' + link_name
        : window.location.href + '#' + link_name;
    navigator.clipboard.writeText(url);
    window.location.href = url;
}

function updateCountdown(elementId, countDownDate) {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (86400000)); // 1000 * 60 * 60 * 24
    const hours = Math.floor((distance % (86400000)) / (3600000)); // 1000 * 60 * 60
    const minutes = Math.floor((distance % (3600000)) / (60000)); // 1000 * 60
    const seconds = Math.floor((distance % (60000)) / 1000);

    const element = document.getElementById(elementId);
    if (element) {
        if (distance < 0) {
            element.innerHTML = "";
            return false; // Indicate that the countdown has finished
        } else {
            element.innerHTML = `(${days}d ${hours}h ${minutes}m ${seconds}s)`;
            return true; // Indicate that the countdown should continue
        }
    }
    return false; // If element not found, stop the countdown
}

function addCountdown(elementId, targetDateString) {
    const countDownDate = new Date(targetDateString).getTime();

    // Initial call to set the countdown immediately
    updateCountdown(elementId, countDownDate);

    // Set interval to update every second
    const intervalId = setInterval(function () {
        const shouldContinue = updateCountdown(elementId, countDownDate);
        if (!shouldContinue) {
            clearInterval(intervalId);
        }
    }, 1000);

    return intervalId;
}

function setSubmissionTypePill(clsName, pillColor, linkName) {
    document.querySelectorAll(clsName).forEach(el => {
        el.classList.add('badge', 'rounded-pill', pillColor);

        // Create a new anchor element
        const link = document.createElement('a');

        // Set the href attribute
        link.href = linkName;

        // Wrap the original element with the new link
        el.parentNode.insertBefore(link, el);
        link.appendChild(el);

        // Add text-decoration-none to the link
        link.classList.add('text-decoration-none');
    });
}

function setPrizeLocales() {
    let locale = (Intl.NumberFormat()).resolvedOptions().locale;
    // Define the options object
    let options = {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    };

    for (let [number, elementId] of [
        [2000., 'figcaption-first-place'],
        [1600., 'figcaption-second-place'],
        [1400., 'figcaption-third-place'],
        [1000., 'figcaption-fourth-place']]) {
        let formattedCurrency = number.toLocaleString(locale, options);

        document.getElementById(elementId).innerHTML = "<h6>" + formattedCurrency + "</h6>";
    }
}