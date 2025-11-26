const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Test configuration
const config = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  browser: process.env.BROWSER || 'chrome',
  headless: process.env.HEADLESS !== 'false',
  record: process.env.RECORD === 'true',
  parallel: process.env.PARALLEL === 'true'
};

console.log('🚀 Starting TestPro AI Practice Lab Test Suite');
console.log('📋 Configuration:', config);

// Test suites to run
const testSuites = [
  {
    name: 'Practice Lab Core',
    specs: [
      'cypress/e2e/testpro/practice-lab.cy.js',
      'cypress/e2e/testpro/homepage-ui.cy.js',
      'cypress/e2e/testpro/navigation-updated.cy.js'
    ],
    tags: '@core'
  },
  {
    name: 'Practice Modules',
    specs: [
      'cypress/e2e/testpro/practice-modules.cy.js'
    ],
    tags: '@modules'
  },
  {
    name: 'Book Session Modal',
    specs: [
      'cypress/e2e/testpro/book-session-modal.cy.js'
    ],
    tags: '@modal'
  },
  {
    name: 'End-to-End Journeys',
    specs: [
      'cypress/e2e/testpro/end-to-end.cy.js'
    ],
    tags: '@e2e'
  }
];

// Function to run a test suite
function runTestSuite(suite) {
  console.log(`\n🧪 Running ${suite.name} tests...`);
  
  const specPattern = suite.specs.join(',');
  const command = [
    'npx cypress run',
    `--spec "${specPattern}"`,
    `--browser ${config.browser}`,
    config.headless ? '--headless' : '',
    config.record ? '--record' : '',
    config.parallel ? '--parallel' : '',
    `--env baseUrl=${config.baseUrl}`
  ].filter(Boolean).join(' ');

  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${suite.name} tests completed successfully`);
    return true;
  } catch (error) {
    console.log(`❌ ${suite.name} tests failed`);
    return false;
  }
}

// Function to generate test report
function generateReport(results) {
  const report = {
    timestamp: new Date().toISOString(),
    config: config,
    results: results,
    summary: {
      total: results.length,
      passed: results.filter(r => r.passed).length,
      failed: results.filter(r => r.passed === false).length
    }
  };

  const reportPath = path.join(__dirname, 'cypress/reports/practice-test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📊 Test report generated: ${reportPath}`);
  
  return report;
}

// Main execution
async function main() {
  const results = [];
  
  // Check if server is running
  console.log(`🔍 Checking if server is running at ${config.baseUrl}...`);
  try {
    execSync(`curl -f ${config.baseUrl} > /dev/null 2>&1`);
    console.log('✅ Server is running');
  } catch (error) {
    console.log('❌ Server is not running. Please start the development server first.');
    console.log('Run: npm run dev');
    process.exit(1);
  }

  // Run test suites
  for (const suite of testSuites) {
    const passed = runTestSuite(suite);
    results.push({
      name: suite.name,
      tags: suite.tags,
      passed: passed,
      specs: suite.specs
    });
  }

  // Generate report
  const report = generateReport(results);
  
  // Print summary
  console.log('\n📈 Test Execution Summary:');
  console.log(`Total Suites: ${report.summary.total}`);
  console.log(`Passed: ${report.summary.passed}`);
  console.log(`Failed: ${report.summary.failed}`);
  
  if (report.summary.failed > 0) {
    console.log('\n❌ Some tests failed. Check the detailed reports for more information.');
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed successfully!');
  }
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes('--help')) {
  console.log(`
Usage: node run-practice-tests.js [options]

Options:
  --help          Show this help message
  --suite <name>  Run specific test suite (core, modules, modal, e2e)
  --browser <name> Browser to use (chrome, firefox, edge)
  --headless      Run in headless mode
  --record        Record test results
  --parallel      Run tests in parallel

Environment Variables:
  BASE_URL        Base URL for testing (default: http://localhost:3000)
  BROWSER         Browser to use (default: chrome)
  HEADLESS        Run headless (default: true)
  RECORD          Record results (default: false)
  PARALLEL        Run parallel (default: false)

Examples:
  node run-practice-tests.js
  node run-practice-tests.js --suite core --browser firefox
  BASE_URL=https://staging.testproai.com node run-practice-tests.js
  `);
  process.exit(0);
}

// Handle specific suite execution
const suiteArg = args.find(arg => arg.startsWith('--suite'));
if (suiteArg) {
  const suiteName = args[args.indexOf(suiteArg) + 1];
  const suite = testSuites.find(s => s.tags.includes(`@${suiteName}`));
  
  if (suite) {
    console.log(`🎯 Running specific suite: ${suite.name}`);
    const passed = runTestSuite(suite);
    process.exit(passed ? 0 : 1);
  } else {
    console.log(`❌ Suite '${suiteName}' not found. Available: core, modules, modal, e2e`);
    process.exit(1);
  }
}

// Run main execution
main().catch(error => {
  console.error('💥 Test execution failed:', error);
  process.exit(1);
});