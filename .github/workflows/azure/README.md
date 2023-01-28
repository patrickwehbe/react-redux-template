## Prerequisites

-   A GitHub repository for your application
-   An Azure subscription
-   An Azure Web App for your production and staging environments
-   An Azure service connection in your GitHub repository settings
-   A Node.js environment
-   A package manager like npm or yarn

## Configuration

1. Create two secrets in your GitHub repository settings named AZURE_PROD_PUBLISH_PROFILE and AZURE_STAGING_PUBLISH_PROFILE containing the respective credentials for the production and staging environments.
2. In your package.json, add a new script named build that runs the commands necessary to build your React app, such as react-scripts build.

3. In your azure-deploy.yml file, replace my-prod-app and my-staging-app with the names of your Azure Web Apps.

4. Commit and push your changes to your GitHub repository. The workflow will automatically trigger and deploy your React app to your production and staging environments on Azure.

### Note

This is a basic example and you may need to adjust the workflow file according to your specific needs.
