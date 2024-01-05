import { test, expect } from '@playwright/test';

test.describe('Bee Stack Website Tests', () => {
	test.beforeEach(async ({ page }) => {
		// Common setup before each test
		await page.goto('http://localhost:4321/');
	});

	test('Should display the correct heading on the home page', async ({ page }) => {
		await expect(page.getByRole('heading')).toContainText('Bee Stack');
	});

	test('Should navigate to the Blog and display the correct list item', async ({ page }) => {
		await page.getByRole('link', { name: 'Blog' }).click();
		await expect(page.getByRole('list')).toContainText('My First Year In Web Development');
	});

	test('Should navigate to the specific blog post and display its contents', async ({ page }) => {
		await page.getByRole('link', { name: 'Blog' }).click();
		await page.getByRole('link', { name: 'My First Year In Web' }).click();
		await expect(page.getByRole('article')).toContainText('My First Year In Web Development');
		await expect(page.getByRole('article')).toContainText(
			'A year in web development has flown by. So what have I learned?'
		);
	});

	test('Should navigate to the About page and display its contents', async ({ page }) => {
		await page.getByRole('link', { name: 'About' }).click();
		await expect(page.getByRole('article')).toContainText('About Me');
		await expect(page.getByRole('article')).toContainText(
			'Meet me, Roopesh Patel, aka Roopsbee, aka Roops, a curious individual on a quest to explore the world of software development and beyond.'
		);
	});

	test('GitHub link should link to github profile', async ({ page }) => {
		const githubIcon = page.getByLabel("Roopesh's Github Home Page");
		await expect(githubIcon).toHaveAttribute('href', 'https://github.com/roopsbee');
	});

	test('Linkedin link should link to linked in profile', async ({ page }) => {
		const linkedInIcon = page.getByLabel("Roopesh's Linkedin home page");
		await expect(linkedInIcon).toHaveAttribute('href', 'https://linkedin.com/in/roopesh-patel-51a448145/');
	});

	test('Should verify the home page link and contents', async ({ page }) => {
		await page.getByRole('link', { name: 'About' }).click();
		await page.getByRole('link', { name: 'Bee Stack' }).click();
		await expect(page.getByRole('main')).toContainText(
			'Welcome to the Bee Stack blog. Where I share my thoughts and learnings as I journey through software development.'
		);
	});
});
