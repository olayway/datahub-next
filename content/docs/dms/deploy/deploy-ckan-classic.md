---
sidebar: auto
---

# Deploy To CKAN Cloud

## Creating CKAN Portal - Deploying for first time

In order to deploy CKAN portal on our Kubernetes cluster, you will need to first dockerize the CKAN application. For that you will need:

- `Dockerfile` to build an image.
- `.env` file to keep environment variables for an image.
- `.gitlab-ci.yml` to deploy an image to the container registry.

Later, Kubernetes will pull that image and build a portal using it.

We keep those file in private GitLab Repositories.

Create a new project in GitLab:

- Navigate to https://gitlab.com/viderum
- Click the "New Project" button on the right
- Let's name it `cloud-deploy-demo-exercise`
  - We use following name convention: `cloud-[project-id]`
- Click "Create Project"

You should have an empty repository on https://gitlab.com/viderum/cloud-deploy-demo-exercise. Let's now add the necessary files.

### Create Dockerfile

`Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image. Usually, all you need is to copy the `Dockerfile` from the existing project, and modify per your needs. In your GitLab repo:

- Click "Add File" button
- Copy everything from https://gitlab.com/viderum/cloud-deploy-demo/blob/master/Dockerfile and paste it in your new file
- Name the file `Dockerfile`
- Click "Commit Changes" button

### Create .env file

Some of the CKAN configuration options can be defined as Environment variables on the server operating system. We keep these variables in the `.env` file. In your GitLab repo:

- Click `+` and choose "Add File"
- Copy everything from https://gitlab.com/viderum/cloud-deploy-demo/blob/master/.env and paste it in the new file
- Name the file `.env`
- Click "Commit Changes" button

### Create .gitlab-ci.yml

`.gitlab-ci.yml` is responsible for running continuous deployments. It builds the newest image of the portal and pushes it to the Gitlab registry. To create it:

- Go to https://cc-p-jenkins.ckan.io/job/Initialize%20Gitlab/
- Click `Build with Parameters` button
- Change `viderum/cloud-instance-id` to `viderum/cloud-deploy-demo-exercise`
- Click `Build` button

![](https://i.imgur.com/9xGKXOd.png)

At this point, you should have all 3 files in your repository.

![](https://i.imgur.com/15leOnP.png)

Wait until the GitLab Build is successful.

![](https://i.imgur.com/cVopL51.png)

Green means the build was successful, and our image was deployed to the GitLab Container registry. That means we are ready to create a new instance on the K8 cluster. :rocket:

### Create Instance

Now we need to deploy the new image to CKAN Cloud

- Go to https://cc-p-jenkins.ckan.io/job/create%20new%20instance/
- Click `Build With Parameters` button
- Update `INSTANCE_ID` and `GITLAB_REPO` inputs per your needs
- Click `Build` button

![](https://i.imgur.com/0Dwzvct.png)

Wait until the build is successful. Once done, that's it! Our instance is deployed to the K8 cluster. Finally, let's create a route for it.

### Create route

In the last step, we need to create the route for your portal, so that it's publicly accessible.

- Go to https://cc-p-jenkins.ckan.io/job/create%20route
- Click `Build With Parameters` button
- Update `EXTRA_ARGS` with the following: `instances-default deploy-demo-exercise deploy-demo-exercise`
- Set `DRY_RUN` to `no`
- Click `Build` button

![](https://i.imgur.com/fpOCZV2.png)

### Check it is working

That's It! :fireworks: You should now be able to visit https://deploy-demo-exercise.ckan.io and see the live portal.

![](https://i.imgur.com/qk8j15Z.png)

## Next steps

[Redeploy To CKAN Cloud](/docs/dms/deploy/redeploy-ckan-classic)
