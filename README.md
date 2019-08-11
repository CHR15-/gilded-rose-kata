# The Gilded Rose

## TL;DR

### Check the code

- Clone the repo
- Head to `/refactor`

### Check the tests (integration and unit)


[Unit tests](https://chr15-.github.io/gilded-rose-kata/refactor/SpecRunner.html)

[Integration tests](https://chr15-.github.io/gilded-rose-kata/refactor/TexttestFixture.html)

You can run these tests locally by loading `SpecRunner.html` or `TexttestFixture.html` in the browser.

### Introduction

This exercise is pretty interesting as many approaches can be taken. On seeing the code, we as engineers immediately want to rip everything out and form what we feel is the right implementation. However, there's a few things to note here:

- There's an expectation not to change certain aspects of the implementation
- We can't change the input of the application (much like having data in a database when porting systems)
- There are no unit tests (be it unit or integration)
- A goblin will 1 deag us

### Direction

First, I wanted to play by the rules. Essentially, we have a test framework given lacking implementation and a strict process ruleset to stick to. I've decided to take on the JS project given time constaints and wanting to refresh my knowledge of pre ES6 life. Remember this is a refactor, not a rewrite. We can always do that later when we've completed the task at hand. 

In my eyes, we're not touching any infrastructure or process running here, it should run exactly the same way it was given to us. As the problem seems highly suited to OOP, I wanted to follow the inheritance design patterns but ultimately wanted to take note of composition over inheritance. There were a few ways I could think of putting functionality through an interface but given the complexity of prototyping and interfacing in ES5, I stuck with classical inheritance. I see the benefits of OOP as eventually leading to better readbility, maintainability and ultimately structure of code.

Also, timebox it. You can work on a project like this forever, tweaking and finessing... adding coding standards, extracting logic away and enhancing tests... I wanted to keep it inside 4 hours.

### Plan of attack (Refactor)

- [x] Write tests to prove it currently works minus the missing spec item
- [x] Extend the tests to what I think is the right implementation (inheritance and OOP as above)
- [x] Write an integration test for the expected results on the given items in the TestFixture
- [x] Leave the Item class as it is to adhere to spec and to store our values for a given item 
- [x] implement a RegularItem class housing shared behaviour for all classes
- [x] Implement extra classes covering all of the items
- [x] Use function overriding on the quality for each item so it encapsulates an item's own quality logic
- [x] Add some constants for the project as we can see shared references and re-use like degradation and minimum quality
- [x] Write a wrapper class to 'migrate' the current items to our new world order
- [x] Wipe the update_quality content from the face of the earth, replacing it with simplicity
- [x] Run the unit tests and fix until they go green
- [x] Run the integration tests until they go green
- [x] Run the SpecRunner and see if the behaviour matches that of the integration test
- [x] Profit.

### For fun if we have time (Rewrite)

- [x] Port solution to ES6 classes 
- [ ] Fix tests to be more robust and descriptive
- [ ] Change the process runner and find a more suitable/fun test bed

## Lessons learnt

- Use TypeScript next time. Strongly typed languages are a godsend
- Use Go the time after that. It be an interesting challenge to solve in that language
- Don't get flustered by having no tests to start with. Just read the spec, write some tests and be happy you now have a trusted base to work out from
- I originally experimented with prototype functions but very quicky got into a dark hole I barely escaped from.

## Todo

- Write more descriptive test descriptions. There were a few times I got confused by my own test documentation.
- IIFE extract out our old school classes. It feels prehistoric but it's the right thing to do.
- Add some further coding standards (linting, private convention, etc)

