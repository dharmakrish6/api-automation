# Healthapp-automation

- Install the dependencies using

```bash
npm install
```

- Install Cypress using

```bash
npm install cypress
```
- Open Cypress for first time to configure cypress

  ```bash
npx cypress open
```

- Run our tests with below command

```bash
npx cypress run --reporter mochawesome

//Merge all reports
npx mochawesome-merge ./mochawesome-report/*.json -o output.json

//generate final html report
npx marge output.json
```

- Report can be found in the `mochawesome-report`
  ![Alt text](sample-report.png?raw=true "Sample Report")
- Videos can be found in `cypress/videos`
