Set-Variable NODE_ENV=production 
npm run build
aws s3 sync ./dist s3://ephsmediacenter.com