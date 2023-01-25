## For Docker image:

You have to initialize a new repo in DockerHub where the image would be pushed to. I created a repo called “shopping-app-react”
Go to ” settings/secrets/actions” in GitHub to create a secret for each of the parameters:
REACTUSERNAME : A user name for the docker image; “use any name”
DOCKERHUB_TOKEN: Token is obtained from DockerHub, go to “account setting/security”, you would have to create one if you don’t have it.

## For Vercel:

Deploy your project to Vercel from your local machine using the Vercel Cli on https://vercel.com/docs/cli?ref=faun.
Learn here: https://dev.to/davidkou/how-to-deploy-a-react-app-to-vercel-host-for-free-4c9p?ref=faun
The deployment creates a `.vercel` folder in your project with a `project.json` containing the `projectID` and `orgID`.
Create a secret token in GitHub for each of the parameters: VERCEL_TOKEN: create a token on Vercel with the name,
VERCEL_ORG_ID and PROJECT_ID: `orgID` and `projectID`
Your repo on GitHub must be on the main branch.
If all is rightly done, you should have your workflow on GitHub running and complet
