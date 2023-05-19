---
title: 'Clean code, maintenance, optimising for change'
description: 'What is clean code, and is less code better? What should we be optimising for when we write code?'
pubDate: 'April 29 2023'
heroImage: '/placeholder-hero.jpg'
---

In my experience, understanding code, editing code, and writing new code in new components or functions is where most of my time is spent in a codebase. Understanding code is probably where the the largest amount of time is spent by a large margin. Around 50% if I were to guess. With editing code making up maybe 30% and editing code 20% if not less.

<span class="font-bold text-yellow-500">
It begs the question, why has this been the case, and how can it be improved.
</span>

## Keeping It DRY

Don’t Repeat Yourself, or DRY, is something I’ve heard a lot, and it’s a statement that’s usually combined with, less code is better. These are two things which I’ve adhered to for some time.

Now i’ve had time to reflect on this for some time, and I think they are a good starting point but shouldn’t be the rule.

Adhering to these as rules seems to exclude what is one of the most important aspects of writing code, which is making it understandable to your peers. <span class="font-bold text-teal-500">Less code doesn’t mean readable code.</span> Just as less words in a sentence doesn’t mean a more coherent sentence. I do understand there is a balance to be struck.

I think I should be more mindful to keep code readable and if that means there is a few more variables with long names, or an extra couple of functions extracted that’s totally fine.

## Premature Optimisation

This Don’t Repeat Yourself rule also leads to another maintenance burden which is premature optimisation. Often when trying to keep things dry, I abstract repeated code into a new function, and the problem with this isn’t always apparent straight away. I can see there is less code, leading to less code to maintain, and it might even be more readable. The problem comes six months down the line when that function has been edited to add additional functionality several times. And what started as just adding another argument here, and another if statement there, has led to a function that is no longer readable, is complicated and is now a maintenance burden.

I think a better approach given time is to either refactor this function into two or more separate functions when it becomes too unwieldy, or to try to avoid some of the problem earlier on by waiting before abstracting the code as soon as there is duplication.

There is also the WET method, write everything twice, which I also think is a good guideline. But I think again this should remain a guideline. Some things will be obvious when we need to abstract the code away into a new function and DRY it up, other times it wont be as obvious and thats when <span class="font-bold text-blue-500">I should be a little more mindful before making a decision to abstract.</span>

## Less Code Less Problems

Does less code mean less problems. Not necessarily. I guess it depends on how we’re defining problems. Ok, so let’s say a problem is anything that get’s in the way of completing a task when interacting with the code. If we take that as the definition then, reading the code, understanding the code, modifying the code without breaking anything, explaining the code to another, willingness to work with this piece of code are all problems. I’m sure there are more, but we can see that just reducing the code wont solve all these problems. Maybe some, but not all.

I like to think, how quickly <span class="font-bold text-green-500">can someone not familiar with this codebase understand what is happening here.</span> A bug in poorer but readable code can be fixed quickly. A bug in better but unreadable code can be a nightmare.

It’s also important i think to consider these problems not just in the context of a single function or small piece of code. But also the wider codebase. A part of the codebase which is different to the rest of the codebase adds to the cognitive load when trying to work out why this piece of code is different, and does it actually do what I thought it did? Consistency I think is key here. Given two similar options, go with the one that keeps things consistent.

## Optimise For Change

The code we write today, will probably need changing in the future. This is one of the few things we can be certain of, and is a constant. So does it not make sense to optimise for change. Whether that is a feature being updated, or a framework being swapped out for something newer. This is always going to happen. <span class="font-bold text-yellow-500">New things will become legacy.</span> If we write code with this in mind, technical debt becomes easier to maintain.

Optimising for change i think means asking the question of how easily will this be to replace in 5 years time. We also need to consider, that it may not be us that has to replace it. Of course optimising for change doesn’t mean other things are disregarded. As always it is a balance. But let's lean towards optimising for change.

## Testing

What makes everything we’ve talked about easier. Testing. Having a well thought out full suite of tests will help with with migrations, optimisations, understanding code, acting as live documentation, and give you confidence in working software. I think <span class="font-bold text-orange-500">testing should be a key component in writing code,</span> in fact I would go as far as to say that testing should be implied when writing code.
