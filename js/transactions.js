/**
 * Transactions Module
 * Handles all payment, deposit, and withdrawal operations
 */

/**
 * Handle payment success
 * Updates balance and transaction history
 */
function handlePaymentSuccess() {
  APP_STATE.balance -= APP_STATE.currentTransactionAmount;
  
  const newTx = {
    date: formatCurrentDate(),
    desc: `Payment to ${document.getElementById('recipient')?.value || 'Unknown'}`,
    amount: -APP_STATE.currentTransactionAmount,
    status: 'Completed'
  };
  
  APP_STATE.transactions.unshift(newTx);
  addTransactionRow(newTx, true);
  updateDashboard();

  showPaymentSuccessModal(
    `Your payment of ${CONFIG.CURRENCY} ${APP_STATE.currentTransactionAmount.toFixed(2)} has been sent.`
  );
}

/**
 * Handle withdrawal success
 * Updates balance and transaction history
 */
function handleWithdrawalSuccess() {
  APP_STATE.balance -= APP_STATE.currentTransactionAmount;
  
  const newTx = {
    date: formatCurrentDate(),
    desc: 'Withdrawal',
    amount: -APP_STATE.currentTransactionAmount,
    status: 'Completed'
  };
  
  APP_STATE.transactions.unshift(newTx);
  addTransactionRow(newTx, true);
  updateDashboard();

  showPaymentSuccessModal(
    `Your withdrawal of ${CONFIG.CURRENCY} ${APP_STATE.currentTransactionAmount.toFixed(2)} was successful.`
  );
}

/**
 * Handle deposit transaction
 * @returns {boolean} - True if successful
 */
function handleDeposit() {
  const amount = parseFloat(document.getElementById('deposit-amount')?.value);
  
  const validation = validateAmount(amount);
  if (!validation.isValid) {
    showNotification(validation.message, 'error');
    return false;
  }

  APP_STATE.balance += amount;
  
  const newTx = {
    date: formatCurrentDate(),
    desc: 'Deposit',
    amount: amount,
    status: 'Completed'
  };
  
  APP_STATE.transactions.unshift(newTx);
  addTransactionRow(newTx, true);
  updateUserUI();

  showNotification(`Successfully deposited ${CONFIG.CURRENCY} ${amount.toFixed(2)}.`, 'success');
  
  // Reset form and return to dashboard
  document.getElementById('deposit-form')?.reset();
  showView('dashboard');
  
  return true;
}

/**
 * Handle withdrawal transaction
 * @returns {boolean} - True if successful
 */
function handleWithdrawal() {
  const amount = parseFloat(document.getElementById('withdraw-amount')?.value);
  
  const validation = validateAmount(amount);
  if (!validation.isValid) {
    showNotification(validation.message, 'error');
    return false;
  }

  APP_STATE.currentTransactionAmount = amount;
  document.getElementById('withdraw-auth-step-title').textContent = 
    `Confirm Withdrawal of ${CONFIG.CURRENCY} ${amount.toFixed(2)}`;
  
  document.getElementById('withdraw-amount-step').classList.add('hidden');
  document.getElementById('withdraw-auth-step').classList.remove('hidden');
  
  return true;
}

/**
 * Handle send money transaction
 * @returns {boolean} - True if successful
 */
function handleSendMoney() {
  const recipient = document.getElementById('recipient')?.value;
  const amount = parseFloat(document.getElementById('amount')?.value);
  
  if (!recipient || !recipient.trim()) {
    showNotification('Please enter a recipient.', 'error');
    return false;
  }

  const validation = validateAmount(amount);
  if (!validation.isValid) {
    showNotification(validation.message, 'error');
    return false;
  }

  APP_STATE.currentTransactionAmount = amount;
  document.getElementById('auth-step-title').textContent = 
    `Confirm Payment of ${CONFIG.CURRENCY} ${amount.toFixed(2)}`;
  
  document.getElementById('amount-entry-step').classList.add('hidden');
  document.getElementById('auth-step').classList.remove('hidden');
  
  return true;
}

/**
 * Update user profile settings
 * @param {string} field - Field name
 * @param {string} value - New value
 */
function updateProfileSetting(field, value) {
  const fieldMap = {
    firstname: 'firstName',
    lastname: 'lastName',
    cell: 'cell',
    secretcode: 'secretCode',
    email: 'email'
  };

  if (APP_STATE.userProfile && fieldMap[field]) {
    APP_STATE.userProfile[fieldMap[field]] = value;
    updateUserUI();
  }
}

/**
 * Reset all transaction forms
 */
function resetTransactionForms() {
  document.getElementById('send-money-form')?.reset();
  document.getElementById('deposit-form')?.reset();
  document.getElementById('withdraw-form')?.reset();
  
  document.getElementById('auth-step').classList.add('hidden');
  document.getElementById('amount-entry-step').classList.remove('hidden');
  document.getElementById('withdraw-auth-step').classList.add('hidden');
  document.getElementById('withdraw-amount-step').classList.remove('hidden');
}
