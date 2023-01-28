#Deploying the React App to AWS
This repository contains a GitHub workflow that can be used to deploy a React app to AWS with complete CI/CD.

##Prerequisites
. AWS account
. A S3 bucket where you want to deploy your app
. A CloudFront distribution that is associated with the S3 bucket
. AWS access key ID and secret access key with permissions to interact with S3 and CloudFront
##Setting up the GitHub workflow
1- Add the main.yml file in the .github/workflows directory of your repository.
2- Go to the GitHub repository settings and navigate to the "Secrets" section.
3- Add the following secrets:
. AWS_ACCESS_KEY_ID: your AWS access key ID
. AWS_SECRET_ACCESS_KEY: your AWS secret access key
. AWS_REGION: the region where your S3 bucket and CloudFront distribution are located
. S3_BUCKET_NAME: the name of the S3 bucket where you want to deploy your app
. CLOUDFRONT_DISTRIBUTION_ID: the ID of the
