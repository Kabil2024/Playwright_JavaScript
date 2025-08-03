import {test, expect} from '@playwright/test';
test.skip('alertHandling', async ({page})=>{
    await page.setViewportSize({width: 1920, height: 1080})
await page.goto('https://testautomationpractice.blogspot.com/')
//enabling alert handling
page.on('dialog', async (dialog)=>{
expect(dialog.message()).toContain('I am an alert ')
console.log(await dialog.message())
console.log(await dialog.type())
await dialog.accept()
})


//await page.click('//button[text()="Prompt Alert"]')
await page.waitForTimeout(3000)

})
test('AlertDismiss',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
page.on('dialog',async (dialog)=>{
expect(dialog.message()).toContain('Please enter your name')
console.log(dialog.type())
console.log(await dialog.defaultValue())
expect(dialog.defaultValue()).toContain('Harry')
await dialog.accept('kabil')

})
await page.click('//button[text()="Prompt Alert"]')

})
