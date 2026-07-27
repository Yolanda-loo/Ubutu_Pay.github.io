/**
 * Displays a floating modern toast notification.
 * @param {string} message - The text to display.
 * @param {string} type - 'success', 'error', or 'info'.
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    // Create the toast element
    const toast = document.createElement('div');
    
    // Assign color themes based on notification type
    let bgColors = 'bg-emerald-600 text-white'; // Success (Green)
    if (type === 'error') {
        bgColors = 'bg-rose-600 text-white';     // Error (Red)
    } else if (type === 'info') {
        bgColors = 'bg-sky-600 text-white';      // Info (Blue)
    }

    toast.className = `px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 text-sm font-medium transform translate-y-2 opacity-0 transition-all duration-300 ${bgColors}`;
    toast.textContent = message;

    // Append to container
    container.appendChild(toast);

    // Trigger smooth slide-in / fade-in animation
    setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    // Automatically dismiss after 3 seconds
    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => {
            toast.remove();
        }, 300); // Wait for transition to finish
    }, 3000);
}

// --- Example Implementation in your transaction/auth flow ---
// Replace standard alerts in your app like this:
// 
// if (transferSuccessful) {
//     showToast("Payment of R500.00 sent successfully!", "success");
// } else {
//     showToast("Insufficient balance or network error.", "error");
// }
