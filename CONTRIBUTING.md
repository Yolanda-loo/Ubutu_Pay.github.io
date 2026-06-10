# Contributing to UbuntuPay

Thank you for your interest in contributing to UbuntuPay! This guide will help you get started.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

Be respectful and inclusive. We're committed to providing a welcoming environment for all contributors.

## Getting Started

### Prerequisites
- Git
- A modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Node.js for running tests and build tools
- (Optional) Visual Studio Code with Live Server extension

### Setup

1. **Fork the repository**
   ```bash
   Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Ubutu_Pay.github.io.git
   cd Ubutu_Pay.github.io
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/Yolanda-loo/Ubutu_Pay.github.io.git
   ```

4. **Run locally**
   - Using Live Server: Right-click `index.html` → "Open with Live Server"
   - Or use: `npx http-server -p 8080`
   - Then visit `http://localhost:8080`

## Development Workflow

### Creating a Feature Branch

Always create a new branch for your work:

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/bug-description
```

### Branch Naming Conventions

- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `refactor/refactor-name` - Code refactoring
- `docs/documentation-name` - Documentation updates
- `test/test-name` - Test additions

## Coding Standards

### JavaScript

1. **Use meaningful variable names**
   ```javascript
   // ✅ Good
   const userProfile = { firstName: 'John', lastName: 'Doe' };
   
   // ❌ Bad
   const up = { fn: 'John', ln: 'Doe' };
   ```

2. **Add JSDoc comments**
   ```javascript
   /**
    * Validate email format
    * @param {string} email - Email to validate
    * @returns {boolean} - True if valid
    */
   function validateEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   }
   ```

3. **Use const by default, let when needed, avoid var**
   ```javascript
   const MAX_ATTEMPTS = 3;  // Constant
   let counter = 0;         // Will change
   ```

4. **Write pure functions when possible**
   ```javascript
   // ✅ Good - Pure function
   function calculateTotal(items) {
     return items.reduce((sum, item) => sum + item.price, 0);
   }
   
   // ❌ Bad - Side effects
   let total = 0;
   function addToTotal(item) {
     total += item.price;  // Modifies external state
   }
   ```

5. **Error handling**
   ```javascript
   try {
     // Your code
   } catch (error) {
     console.error('Error description:', error);
     showNotification('User-friendly error message', 'error');
   }
   ```

### HTML

1. **Use semantic HTML**
   ```html
   <!-- ✅ Good -->
   <button id="send-money-btn">Send Money</button>
   <section id="dashboard-view">
     <h1>Dashboard</h1>
   </section>
   
   <!-- ❌ Bad -->
   <div onclick="sendMoney()">Send Money</div>
   <div class="dashboard">
   ```

2. **Use data attributes for element selection**
   ```html
   <!-- ✅ Good -->
   <button data-action="send-money">Send Money</button>
   
   <!-- ❌ Bad -->
   <button class="btn action-send-money">Send Money</button>
   ```

### CSS

1. **Use CSS variables for theming**
   ```css
   /* In style.css */
   :root {
     --primary: #3B82F6;
     --primary-dark: #2563EB;
   }
   
   .button { color: var(--primary); }
   ```

2. **Keep styles organized**
   ```css
   /* Group related styles */
   .button { /* button base styles */ }
   .button:hover { /* hover state */ }
   .button:active { /* active state */ }
   .button:disabled { /* disabled state */ }
   ```

3. **Use consistent naming**
   ```css
   /* ✅ Good - BEM-like naming */
   .card { }
   .card__header { }
   .card__body { }
   
   /* ❌ Bad - Unclear naming */
   .mycard { }
   .card-header-top { }
   ```

## Commit Messages

Write clear, descriptive commit messages:

```bash
# Format
git commit -m "type: Brief description (50 chars max)"

# Types:
# feat:     New feature
# fix:      Bug fix
# refactor: Code refactoring
# docs:     Documentation
# test:     Test additions
# style:    Style fixes (no logic change)
# perf:     Performance improvements

# Examples:
git commit -m "feat: Add transaction export to CSV"
git commit -m "fix: Resolve payment validation error"
git commit -m "docs: Update API documentation"
```

## Pull Request Process

### Before Creating a PR

1. **Make sure your code works**
   ```bash
   # Test in multiple browsers
   # Verify all features still work
   # Check console for errors
   ```

2. **Keep commits clean**
   ```bash
   # Squash small fixes into logical commits
   git rebase -i HEAD~3  # Last 3 commits
   ```

3. **Update documentation**
   - Update README.md if needed
   - Add JSDoc comments
   - Document any new functions

### Creating a PR

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub**
   - Go to your fork
   - Click "New Pull Request"
   - Set base to `main` branch
   - Describe your changes clearly

3. **PR Description Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] New feature
   - [ ] Bug fix
   - [ ] Documentation update
   
   ## How to Test
   Steps to test your changes
   
   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Changes tested in multiple browsers
   - [ ] Documentation updated
   - [ ] No console errors
   ```

### After Submitting

- Respond to review comments
- Make requested changes
- Push updates (no need to close/reopen PR)
- Wait for approval and merge

## Testing

### Manual Testing Checklist

Before submitting a PR, test:

- [ ] All existing features still work
- [ ] New feature works as intended
- [ ] No console errors or warnings
- [ ] Works on mobile (375px width)
- [ ] Works on tablet (768px width)
- [ ] Works on desktop (1024px+ width)
- [ ] Offline functionality (if applicable)
- [ ] Keyboard navigation works

### Browser Testing

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Documentation

### Adding Documentation

1. **Update README.md** for user-facing changes
2. **Add JSDoc comments** for all functions
3. **Update REFACTORING_GUIDE.md** for architecture changes

### JSDoc Template

```javascript
/**
 * Brief description of what the function does
 * 
 * Longer description if needed. Explain the purpose,
 * any important behaviors, or side effects.
 * 
 * @param {type} paramName - Description of parameter
 * @param {type} anotherParam - Description
 * @returns {type} - Description of return value
 * 
 * @throws {ErrorType} - Description of error
 * 
 * @example
 * const result = myFunction(arg1, arg2);
 * console.log(result); // Expected output
 */
function myFunction(paramName, anotherParam) {
  // Implementation
}
```

## Code Review Guidelines

When your PR is under review:

1. **Be open to feedback** - Reviewers help improve code quality
2. **Explain your choices** - If asked, clarify why you made decisions
3. **Ask questions** - If feedback is unclear, ask for clarification
4. **Iterate** - Make requested changes promptly
5. **Thank reviewers** - Acknowledge their time and effort

### Reviewing Others' Code

1. **Be constructive** - Suggest improvements, don't just criticize
2. **Approve when satisfied** - Use GitHub's "Approve" feature
3. **Request changes for blockers** - Use "Request changes" only for issues
4. **Suggest improvements** - Use comments for optional enhancements

## Common Issues & Solutions

### Issue: Service Worker not updating

**Solution:** Clear browser cache and re-register
```javascript
// In console
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(reg => reg.unregister());
});
```

### Issue: Changes not appearing locally

**Solution:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Form not submitting

**Solution:** Check browser console for JavaScript errors

## Getting Help

- 📚 Check [REFACTORING_GUIDE.md](./REFACTORING_GUIDE.md)
- 📖 Read comments in code
- 🐛 Search existing issues
- 💬 Ask in pull request comments
- 📧 Contact maintainer: londie970918@gmail.com

## Recognition

Contributors will be:
- Added to README.md
- Mentioned in commit messages
- Credited in releases

---

**Thank you for contributing to UbuntuPay! 🎉**
