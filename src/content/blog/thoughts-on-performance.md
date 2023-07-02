---
title: 'Thoughts On Performance'
description: 'A few wandering thoughts on performance.'
pubDate: 'June 6 2023'
---

When I first started in web development, very little was mentioned about performance in tutorials and courses. It was only about six months into full-time development that I started becoming aware of it, largely because of visually noticing things that seemed slower than they should. I do wonder if performance should be mentioned more frequently in the many tutorials around web development for beginners.

There seems to be more mention of performance now in front-end development as newer frameworks have started to become a real alternative to React. Frameworks such as Solid, Quick, and Svelte have brought performance to the forefront of the web development world.

## Animations and the DOM

When I was developing my first portfolio site, I had this vision of animating hundreds of elements in unison, animating many different CSS properties including opacity, position, color, and scale. Of course, now alarm bells start ringing about the performance of these animations right away. But back then, I had no reason to think anything would be a problem. Why would it be?

During the development of that portfolio site, the performance seemed fine, at least on my machine. There were some missed animation frames, but I put this down to something on my end, other people would see perfectly smooth animations. It was only when I went to show a friend my site on my old mobile phone that it hit me. The site was slow, very slow.


## Javascript Bundle Size

The JS bundle size was one of the first things that came to light on my journey in performance awareness. It’s something that's easier to see. With plugins in editors to show the bundle size of imported packages to sites like Bundlephobia, and then seeing the size of bundles in Chrome developer tools.

I agree that a smaller bundle size is generally better, though, as always, it is still dependent on the use case. An admin-style app probably doesn’t need to worry too much about bundle size, whereas an e-commerce site likely needs to pay more attention to it. The general assumption here is that a large JS bundle will slow down the initial loading and interactivity of a site. So I think it is a case of the importance of that initial load performance. This leads to who the users are and their needs.

Generally, less is better. When deciding to add a dependency to a project, I want to make sure their bundle size is taken into account.

The amount of CSS we ship is another consideration in performance. This also needs to be fetched and loaded. As apps get bigger, managing CSS duplication can become difficult. I don't want to get to the point where I'm afraid to change some CSS because of the effect it might have throughout the app. Which is why I think it’s worth considering how we are producing and consuming our CSS.

## Monitoring Tools

Probably one reason for performance not being in a beginner's awareness is the complexity of tools, or rather the approachability of tools. Something like the performance tabs of Chrome developer tools look daunting. Tools are becoming easier to pick up though. The performance insights tab in Chrome developer tools gives you automatic suggestions with little effort for example.

Google has also simplified this a bit by giving measurable targets with their Web Vitals. I think this provides good targets in general, though again, it is entirely dependent on the use case. They may not always be relevant.

Console.time is something I have tried recently. Not only is it good for debugging, but it can give you performance indications if monitored regularly. Maybe monitoring particular JavaScript-intensive areas of the app and ensuring they stay within reasonable targets.

## How Important is Bundle Size, Really?

Image sizes usually make up a large part of all that is downloaded. So does it really matter about the size of the JavaScript which can be comparatively very small?

I think we need to consider progressive enhancement and the blocking time JavaScript can have. An ideally progressively enhanced app will work with zero javascript. This way there is a functioning app without any javascript downloaded. This would also largely eliminate the blocking time. Ideally.

Another consideration is that we need to think of the use case. Are we building a marketing or content site that needs excellent Web Vitals? Maybe we're building an app that's an account management dashboard. In that case, can't we put less weight on Web Vitals? I think so.

## Downloading on Bad Networks

Not everyone has super-fast internet connections. Though I'm not just talking about areas or countries without the infrastructure. This could mean someone with a fast connection at home, but as soon as they go on the tube, the connection is spotty, if not non-existent.

The point is, modeling your users as having good internet connections all the time might not be accurate. I would say every user has bad connections at some point. It’s about how much weight we give to that in our decisions.

## Performant Code

What about the code? What are the time complexities of the functions you are using? Does it matter?

When talking about JavaScript on the browser, browsers are pretty fast these days. My current take is to avoid premature optimization. Test on slower browsers and devices. Monitor performance. If it is too slow, optimize. This means deciding how performant the app should be in the first place. What are the benchmarks?

I'm not sure about the best approach right now, but it's something I will be exploring.
