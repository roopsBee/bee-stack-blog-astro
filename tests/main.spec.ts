import { test, expect } from '@playwright/test';

test('Main test', async ({ page }) => {
	await page.goto('http://localhost:4321/');
	await expect(page.getByRole('heading')).toContainText('Bee Stack');
	await page.getByRole('link', { name: 'Blog' }).click();
	await expect(page.getByRole('list')).toContainText('My First Year In Web Development');
	await page.getByRole('link', { name: 'My First Year In Web' }).click();
	await expect(page.getByRole('article')).toContainText('My First Year In Web Development');
	await expect(page.getByRole('article')).toContainText(
		'A year in web development has flown by. So what have I learned?'
	);
	await page.getByRole('link', { name: 'About' }).click();
	await expect(page.getByRole('article')).toContainText('About Me');
	await expect(page.getByRole('article')).toContainText(
		'Meet me, Roopesh Patel, aka Roopsbee, aka Roops, a curious individual on a quest to explore the world of software development and beyond.'
	);
	const page1Promise = page.waitForEvent('popup');
	await page.getByRole('link').nth(3).click();
	const page1 = await page1Promise;
	await expect(page1.getByRole('main')).toContainText('roopsBee');
	const page2Promise = page.waitForEvent('popup');
	await page.getByRole('link').nth(4).click();
	const page2 = await page2Promise;
	await expect(page2.locator('#public_profile_contextual-sign-in-modal-header')).toContainText(
		'Sign in to view Roopesh’s full profile'
	);
	await page.getByRole('link', { name: 'Bee Stack' }).click();
	await expect(page.getByRole('main')).toContainText(
		'Welcome to the Bee Stack blog. Where I share my thoughts and learnings as I journey through software development.'
	);
});
