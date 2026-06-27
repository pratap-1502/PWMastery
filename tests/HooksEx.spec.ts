import {test,expect} from '@playwright/test'
import { beforeEach } from 'node:test'

test.beforeEach(async({page})=>{

    await page.goto()

})

