const { execSync } = require('child_process');

try {
  console.log('Merging reports...');
  execSync('npx mochawesome-merge cypress/reports/*.json -o cypress/reports/merged.json', { stdio: 'inherit' });
  
  console.log('Generating HTML report...');
  execSync('npx marge cypress/reports/merged.json --reportDir cypress/reports/html --inline --reportTitle "TestPro AI - Test Report"', { stdio: 'inherit' });
  
  console.log('✅ HTML report generated: cypress/reports/html/merged.html');
} catch (error) {
  console.error('❌ Error generating report:', error.message);
}