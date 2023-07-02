---
title: 'Beggings in Rust'
description: 'My initail thoughts on learning Rust as my second language.'
pubDate: 'July 2 2023'
---

## Exploring Beyond JavaScript and TypeScript

After a few years of JavaScript and TypeScript, I feel I have a good grasp of the basics and a few of the more advanced concepts of these languages, such as generics. A few questions I have been thinking about are what the strengths of these languages are, and subsequently, their weaknesses. What could I use to solve problems that these languages would not be a good fit for? I came to realise that I couldn’t answer these questions without learning other languages.

## Choosing Rust as the Next Challenge

So, to help me answer these questions, I decided to learn a new language. Golang and Rust were on my radar, and after some deliberation, I decided to go with Rust. It is much more different from what I was used to in JavaScript and TypeScript, even more so than Golang. Rust has concepts which I had never come across, which I thought would be interesting. As a bonus, it also seemed the more difficult of the two.

## Rustlings with Rust

I found the official Rustlings course a good place to start. It’s a GitHub repository which you clone and run. Rustlings guides you through exercises via tests and the compiler. The Rust compiler is like a helpful quality control assistant. It ensures your code is up to scratch but also points out suggestions that might solve the problems the compiler itself finds. This is quite different from a Node environment where the errors can be quite cryptic.

## Thinking about Memory and Safety in Rust

Memory and safety had never entered my mind with TypeScript. With Rust, it has, and not in a bad way. I’m kind of forced to think about memory in order to understand why Rust wants me to do things in a certain way. Like why strings are represented in multiple ways: a string slice, a string literal, or a ‘String’.

## Stop looking for shortcuts 

I’m beginning to understand Rust more now that I realise that the code I write will not be as concise as it is in TypeScript, and that I should stop looking for these ‘shortcuts’. These shortcuts that I kept looking for were just ways of me trying to bypass the type-safety that the Rust compiler is trying to enforce. A mindset shift had to be made. I have to handle all cases. If I get an item from an array, I better handle if the index I provide is invalid.

## Delving into Rust's Option and Result Types

The Option type and Result types were things I needed to wrap my head around initially. In TypeScript, many methods you can call and you would get the result right away which you can use. In Rust, many times you get one of the Option or Result types. There’s an extra safety layer when handling data to make sure the data is what you expect.

## The Ongoing Journey: Borrow Checker and Ownership

The Borrow checker and ownership are concepts which are still difficult to grasp. This is where Rust's memory management and security promises are largely handled. But that will be a story for when I have more understanding.
