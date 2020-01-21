# Andy Guerin Engineering Test app

This simple node.js app returns a JSON payload comprising service information when a request is made to the /info endpoint

The logging level and running port can be configured through the use of Environment variables. The default values are

* LOG_LEVEL=info
* PORT=8080

## Requirements

* Node 10
* Git

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/anz-ecp/andy-guerin.git
cd andy-guerin
```

```bash
npm install
```

To start the application run the following

```bash
npm start
```

Open [http://localhost:8080/info](http://localhost:8080/info) to view the JSON payload.

Request information will be logged to stdout using the pino logging library. Pino pretty can be used to format this output for easier consumption by starting the application using the following

```bash
npm start | ./node_modules/.bin/pino-pretty
```

## Build and Deploy Using Docker

You can run this app as a Docker container:

Step 1: Clone the repo

```bash
git clone https://github.com/anz-ecp/andy-guerin.git
```

Step 2: Build the Docker image

```bash
docker build -t andy-guerin-nodejs-test-app .
```

Step 3: Run the Docker container locally:

```bash
docker run -p 8080:8080 -d andy-guerin-nodejs-test-app
```

Open [http://localhost:8080/info](http://localhost:8080/info) to view the JSON payload.

## Deploy on Container Orchestration Platforms

The resulting docker image can be deployed to various orchestration platforms such as OpenShift, GKE etc.
Refer to respective platform online documentation for guidance

## Key Design Decisions

* Pino logging framework used as simple to configure and provides structured output
* Dockerfile authored to ensure application will not run as root user
* Automated unit tests included to test the /info route functionality
* KISS principle applied. Simple application functionality does not call for more than one file at this time
* Linting configuration provided to aid future developers to maintain standards

## Risks

* The application does not implment any form of security. For example the Express server runs over HTTP and not HTTPS and there is authentication or authorisation
