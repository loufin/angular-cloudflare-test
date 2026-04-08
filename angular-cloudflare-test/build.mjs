import { execSync } from 'child_process';

const branch = process.env.WORKERS_CI_BRANCH || '';

let config = 'development';

if (branch === 'main') {
  config = 'production';
} else if (branch === 'staging' || branch === 'develop') {
  config = 'staging';
}

console.log(`Building for branch "${branch}" with configuration "${config}"`);

execSync(`npx ng build --configuration ${config}`, { stdio: 'inherit' });