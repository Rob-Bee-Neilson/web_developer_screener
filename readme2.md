# Answers

1.(answered in interview)
2.
<!-- What's the most interesting technical article you've read recently? What did you like about it and why should we take a look at it? -->
Recently I read this piece on sustainable Web design...
https://www.creativebloq.com/inspiration/save-planet-through-sustainable-web-design-8126147

I found it fascinating as, though I support sustainability as a whole, I have never deeply considered the larger environmental impact of web based technology (e.g. server farms) and have viewed any transition toward 'paperless' dematerialisation as a sustainable movement. It was surprising to realise this view is something of a fallacy.
I would suggest anyone should take a look at this article, or similar, to help better guage the environmental imapct of their tech footprint. Storypark's kaupapa is strongly tied to children, families and communities - my belief is that these are all intertwined/connected to our environment and future. To consider the imapct Storypark's tech has on the environment would align with valuing the future of our tamariki/people.

3.
<!-- Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4]. -->
Forethoughts:
Typically I would start out googling for a pre-made solution for something like this and taylor it for my situation but for this test I will try building from scratch.
Looking at this it first appears an easy concept but rapidly seems more complicated as I think through how it might work. I suspect I will need some form of recursion, in the past I've generally tried to avoid recursion as I have heard so many horror stories. I will see if I can build a loop that will do the trick. I'm not sure which approach would be more efficient if given an array with incredibly deep nesting...

Considerations:
- what if the parent array includes a data type other than a number or child array? e.g. a string?
- what happens if the array has incredibly deep nesting?
- what if the array contains 'Nan' or 'undefined'?
- what if the array contains empty arrays?

Afterthoughts:
I have managed to write some code that will successfully flatten nested arrays that contain integers, I managed to shorten the code considerably with careful application of the array meathod concat() and flatten(). I wrote some basic tests for some of the considerations above. However, I ran out of time to find solution to all those tests.

4. 
<!-- Given a file (`staff_list.json` in this directory), containing a JSON encoded list of Staff, create an program to read and parse this file to display all staff, ordered by name, who live within 2km of our office, which is located at 175 Victoria Street, Wellington (lat: -41.2920728, long: 174.7748162). -->
This I understand conceptually - I'm assuming I will need to short list the staff by location first (I'm sure there are npm packages to help with this) before alphabetising. I will explore this as I go.