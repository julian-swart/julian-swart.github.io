---
title: "Analysis: The Big Rock blue marlin fishing tournament"
date: 2019-07-20
toc: true
toc_min_header: 2
toc_sticky: true
toc_label: "Table of Contents"
header:
  image: "images/big_rock_photo.jpg"
excerpt: "This post is an exploratory data analysis on the 2019 Big Rock blue marlin fishing tournament. I used Python to obtain the data and R for analysis."

---
### Setting the stage

The Big Rock is one of the largest competitive sport fishing tournaments in the world. This years' prize purse was a record $2.86 million! It is held annually in the beginning of June and is based out of a small coastal town named Morehead City, North Carolina, which is about an hour from where I grew up. The ultimate goal of this tournament is to catch and weigh the heaviest Atlantic blue marlin and win nearly 1 million dollars. Top prize this year received $793,000 for catching and weighing a 914 pound blue marlin! Participants can win big in other categories as well. For more info on this please see the **Tournament Details** section below. This is a 6 day tournament where boats choose only 4 of those days to fish. This year, 184 boats entered with sizes ranging from 26-97 feet. There were 70 unique boat brands, 86 cities, and 10 states represented.

Participants have to radio-in any activity since they are far from shore and people want to know what is happening. For instance, when they are hooked-up to a fish, it must be reported. This creates a lot of activity data. I pulled this data from the website and did a small analysis on it.

### Why I'm doing this

I chose to analyze this tournament because I'm intrigued by it, I love to fish, and was curious to see if any interesting patterns and/or relationships existed. I also wanted to do this and show it to some friends and family that follow it every year.

#### Main questions

* What sizes, brands, and cities are most popular?
* Do certain boat sizes catch more billfish?
* Do certain boat brands catch more billfish?
* Do certain hometown cities catch more billfish?
* What time of day was the best?
<br/>

#### 4 main takeaways

* 60 and 61 foot boats are most popular with 14 of each that entered
* 60 foot boats caught the most billfish with 25, but 61 foot boats weighed more blue marlin with 4
* A Buddy Cannady brand won the biggest blue marlin category and a Guthrie won the Billfish Release division. (both 60 foot boats)
* 10:00 AM - 10:15 AM was the best 15 minute interval for hook-ups with 14
<br/> <br/>


## Overview

Here is a link to [The Big Rock](https://www.thebigrock.com/) website and a link to the [Participants](https://www.thebigrock.com/tournament/participants/).

I recommend skimming the the **Tournament Details** and **Terminology** sections below for some general knowledge and context of the tournament.

To see how I obtained the data, please read the **Technical Notes** section. This was my first web scraping project and I go through some of my struggles and what I learned.  


## Introduction

There are varying beliefs for what works best to attract and catch billfish, especially blue marlin. Different contributing factors include, but are not limited to:
* type of lure
* brand of lure
* color of lure
* size of lure
* bait type (artificial, dead)
* water depth
* water temperature
* wind direction
* trolling direction
* geographical area
* time of year
* moon phase
* sunny/cloudy skies
* calm/choppy/rough seas
* boat length
* boat brand
* local knowledge
* time of day
* engine type (some people believe that certain diesel engines are better than others at attracting blue marlin due to a unique *hum* or *vibration* that they disburse through the water)

Using the data available on the Big Rock website, I can provide awareness into some of these variables with statistics and visualizations. If I had access to more data (like longitude and latitude of hook-ups, the lure that the fish ate, etc.), then I could complete a more advanced analysis. Unfortunately, fisherman keep data points like this a secret with hopes of having a competitive advantage.

I explored:

  1. Participants:
      * Lengths of all boats
      * Where the boats are from
      * Boat brands

  2. Time:
      * Hook-ups by hour
      * Hook-ups by 15 minute intervals
      * Time spent fighting a fish

  3. Relationships:
      * Boat size vs number of billfish caught
      * Boat brand vs number of billfish caught
      * Hometown city vs number of billfish caught
      * What size boats catch the biggest fish?
      * What size boats catch certain species?
      * How many boats did not catch anything? What is different about them?

<br/><br/><br/>

## Analysis

### 1. Participants
<br/>

Figure 1

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/image1.jpg)
* Most boats that entered are 50-64 feet long. Boats in this size range are better equipped for handling bigger seas, traveling long distances, and the demands required for this type of fishing.
* There are not as many boats over 64 feet long, mainly because the bigger the boat the more expensive it is.
* Smaller boats typically don't do as well in this tournament.
<br/><br/><br/>

Figure 2

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/top25.jpg)
* As expected, a local heavy tournament.
<br/><br/><br/>

Figure 3

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/brands.jpg)
* Viking is the overwhelming favorite with 32 boats (~18 %) entered in the tournament.
* It makes sense that Jarret Bay and Hatteras are in the top 10 since they are local brands.
* Grady White was tied for 3rd. This is interesting because they are a "smaller" boat, normally between 26-36 feet long. I wonder how their performance compared with bigger boats?
* 41 of the 184 boats (59%) are loners, meaning their boat brand is the only one that entered the tournament. It's fascinating how many manufacturers there are and how much variation there is in the brands.
<br/><br/><br/>

Figure 4

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/map1.jpg)
* Each red dot is the city of a participant. Multiple participants can come from one point on the map.
* Boats that participated in the tournament are spread out as far as Texas, South Dakota, Florida, and Michigan. This is good news. It means the tournament is gaining popularity in other regions. Also, owners sometimes put their hometown as the port city of the boat. Their boat isn't physically stationed in the middle of the state.
* Most boats are from North Carolina, but I was surprised to see so many non-coastal cities.
* Interesting note: One boat was from Majuro, Marshall Islands, which is a tiny island in the middle of the Pacific Ocean between Hawaii and Australia.
<br/><br/><br/>

Figure 5

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/map2.jpg)
* Participants from NC are spread out all over the state.  
<br/><br/>

Figure 6

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/map3.jpg)
* This map clusters nearby cities together and counts the number of participants in that region. The red dot is a cluster of 1.
* This tells me there is a lot of opportunity to try and add participants from Virginia, South Carolina, Georgia, and Florida.
<br/><br/><br/>

Figure 7

<img src="{{ site.url }}{{ site.baseurl }}/images/big_rock/map4.jpg" height="400" width="400">{: .align-center}
* Zooming in on the East Coast, we can see the clusters more clearly. Participants from NC are split between the middle of the state and the coast. The red dot is a cluster of 1.
* Does where the boat is from even matter? We'll see.
<br/><br/>

### 2. Time
<br/>

Figure 8

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/time1.jpg)
* 11-12 PM and 12-1 PM tied for the best time to expect a billfish hook-up.
* I find this interesting because I thought the morning hours were better.
* 8-9 AM doesn't have as much data because only one day of the week starts at 8 AM.
* The "bite" definitely tapers off after 2 PM.
* Note: This is only billfish hook-ups. Meat fish were filtered out.
<br/><br/><br/>

Figure 9

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/time2.jpg)
* In the previous plot, 11-1 PM was the best time block overall. However, after I divided it further into 15-minute intervals, 10:00-10:15 AM had the most hook-ups. This was followed by a sharp decline. 10:15-10:30 AM was tied for the worst 15-minute interval all together.
* This graph indicates what times have higher probabilities for a billfish bite. Although, there appears to be pretty steady activity throughout the day. Better stay alert! (especially from 10-10:15 AM)
<br/><br/><br/>


### 3. Relationships
<br/>

Figure 10

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/r1.jpg)
* Looks very similar to the distribution of participants in Figure 1! 60 and 61 foot boats look to have outperformed everyone else.
* It's intuitive that the distribution looks this way because the more boats there are of a certain length, the more opportunities they have to catch fish.
* I

<br/><br/><br/>

Figure 11

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/r2.jpg)

<br/><br/><br/>

Figure 12

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/r3.jpg)

<br/><br/><br/>

Figure 13

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/r4.jpg)

<br/><br/><br/>

Figure 14

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/r5.jpg)

<br/><br/><br/>


## Tournament Details

* The Big Rock is named after a structure on the continental shelf below Gulf Stream waters. "The Big Rock – which is not a rock at all – is a series of ledges, peaks and plateaus that covers an area about 8-10 miles long by 1 mile in width. It’s a haven for small reef fish – the type of fish that attract the larger fish that blue marlin feast on. It’s a microcosm of the oceanic food chain just a short distance from the Morehead City waterfront."

* Here is a map to help visualize where it is off the coast of North Carolina. It's the small, kidney bean shaped thing in the middle of the big black circle.

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/grease_chart.jpg)
<br/><br/>

* Besides the main "biggest blue marlin" category, participants can also compete in other categories, such as releasing the most billfish (blue marlin, white marlin, sailfish, and spearfish) or weighing in the heaviest meat fish (wahoo, tuna, mahi mahi). Please see the **Terminology** section for clarification of jargon.

* The tournament is mainly focused on blue marlin, which can grow to weigh well over 1,000 pounds and measure up to 16 feet. The other species of billfish are much smaller and have to be released.

* The entry fee this year was $25,000 to be entered into all categories (some boats don't enter into all categories).

* All categories include:

  * Fabulous Fisherman: first blue marlin to be weighed over 500 lbs (this year's winner received $531,250).
  * Daily/aggregate billfish release: points are earned based on species (this year's aggregate winner received $142,375).
  * Heaviest mahi mahi, wahoo and tuna (this year's winner for largest mahi mahi - also called a dolphin, not to be confused with Flipper - won $361,250).

* The tournament runs for 6 days. This year's dates were June 10th, 2019 (Monday) - June 15th, 2019 (Saturday). Boats choose 4 of the 6 days to fish, usually picking days when the ocean won't be rough, if possible.

* On Monday through Friday, boats are limited to fishing between 9AM and 3PM. On Saturday, boats are limited to fishing between 8AM and 2PM.

* The boats have to be within a certain boundary off of the North Carolina Coast. They typically fish 50 or more miles offshore around the Gulf Stream in hundreds to over a thousand feet of water.

* 184 sport fishing boats ranging from 26 to 97 feet long entered the tournament. At least 4 different states, 86 cities, and 70 different boat manufacturers were represented (57 boats did not have their port city or state listed on the website).

* Boats have to radio-in and report any activity, such as hooking-up to a fish, losing a fish, releasing a fish, or boating a fish.

* A blue marlin must weigh at least 400 pounds or be at least 110 inches long in order to qualify. If the fish is brought to land and does not meet either of these criteria, that boat is penalized 400 points in the release division and 400 lbs on the next fish they land (if they land another one). This makes it very difficult to win any prize money.

* The blue marlin must also be intact when weighed. This means if a shark were to take a bite of the fish as it is getting reeled in or if the propeller of the boat happened to cut the fish (both have happened), it would be disqualified.

* There are many other rules that we won't go into detail about here (including acceptable baits and supplies, every boat must leave from the same inlet, etc).

* The tournament is run on the honor system, and winners have to pass a polygraph test to ensure no rules were broken.

* The prize money purse this year was a record high at $2.86 million! (The economy is doing well in 2019 apparently)

* Unfortunately, qualifying blue marlin are killed in order to be weighed on land. I don't have access to old data, but would guess an average of 7 are weighed each year. All carcasses are donated to NC State University's Center for Marine Sciences and Technology for research.

* This tournament provides a major economic boost through increased tourism to an otherwise small, quiet beach town.


## Terminology

* The term *billfish* refers to the characteristic of a long spear-like nose/upper-jaw (a bill) that these fish have. They are fast, powerful, difficult to catch, fight extremely hard, and jump a lot when caught. These challenging and exciting characteristics, along with the size and beauty of these fish, are just a few reasons for the allure. Not to mention the enjoyment of being on the open ocean with the comforts of a deluxe sport fishing yacht.

* The term *meat fish* refers to the fish having edible and delicious meat. These fish have no bills and are typically smaller, more abundant, and easier to catch. However, they are still big and beautiful fish (normally 10-100 pounds). Billfish are generally not thought of as good to eat (although some people do smoke them).

* The term *releasing* or *released* means the fish was let go instead of brought to land because it was too small, or because it wasn't a blue marlin.

* The term *hooked-up* means a boat is actively fighting a fish that just ate one of the baits in the water.

* The term *lost* means that the boat was fighting a fish, but the fish got off (it became un-hooked).

* The term *wrong species* means the hooked-up fish that was caught or lost was not a qualifying species.

* The term *boating*, *boated*, *land*, or *landed* means the crew of a boat was able to catch and bring aboard a blue marlin that they intend to weigh on land. The fish will only be boated if the crew believes it meets the 400 lb qualification (they make this decision by measuring its length and girth to calculate its approximate weight).


## Technical Notes
