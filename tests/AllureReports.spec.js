import { test, expect } from '@playwright/test'
test.describe.skip('group1', async () => {
    test('test1', async ({ page }) => {
        console.log('test1.....')
    })
    test('test2', async ({ page }) => {
        console.log('test2....')
    })
})
test.describe('Group2', async () => {
    test('test3', async () => {
        console.log('test3.....')
    })
    test('test4', async () => {
        console.log('test4....')
    })

})
test.beforeAll('beforeAll', async () => {
    console.log('BeforeAll....')
})
test.afterAll('Afterall', async () => {
    console.log('Afterall....')
})
test.beforeEach('beforeEach', async () => {
    console.log('beforeEach....')
})
test.afterEach('Aftereach', async () => {
    console.log('aftereach....')
})

/* first download the allure dependency : >npm i -d @playwright/test allure-playwright  from command prompt
      secondly install allure : npm install -g allure-commandline (or) npm install -g allure-commandline --save-dev
thirdly you have to set output folder on package.json file in reporter
Fourth run this: npx allure generate allure-results -o allure-report --clean
to open the allure report :    npx allure open allure-report*/
       
