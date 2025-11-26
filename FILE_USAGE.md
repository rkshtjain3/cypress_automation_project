# File Usage Explanation

## ✅ Essential Files (KEEP)

### merge-reports.js
**Status**: ACTIVELY USED  
**Purpose**: Merges test reports and generates HTML output  
**Usage**: Automatically called by `npm test` via the `test:merge` script

**How it works**:
1. Collects all individual test JSON reports from `cypress/reports/*.json`
2. Merges them into a single `merged.json` file
3. Generates a beautiful HTML report at `cypress/reports/html/merged.html`

**Code workflow**:
```bash
npm test
  ↓
  runs: npx cypress run
  ↓
  runs: npm run test:merge
  ↓
  executes: merge-reports.js
  ↓
  creates: merged.html report
```

## ❌ Debug Files (REMOVED)

These were temporary debugging files created during development:
- `run_log.txt` - Captured test output for debugging
- `navigation_log.txt` - Debug logs for navigation tests
- `contact_debug.txt` - Debug logs for contact tests
- `home_debug.txt` - Debug logs for home tests

**Status**: DELETED ✅  
**Reason**: Only needed during development, not required for production

## Updated .gitignore

Added patterns to prevent future debug files:
```
*_debug.txt
*_log.txt
```

## Current Repository Status

✅ Clean, professional codebase  
✅ Only essential files committed  
✅ Debug artifacts excluded  
✅ Ready for portfolio presentation
