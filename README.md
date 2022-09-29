This is an Angular application, showcasing a potential bug with Cypress' component tester for transitive dependencies.

Run

```bash
npm ci
npx cypress run --component
```

It should fail. The component test is located at `src/app/component.cy.ts`.