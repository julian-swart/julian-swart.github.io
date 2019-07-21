---
title: "Analysis: The Big Rock blue marlin fishing tournament"
date: 2019-07-20
toc: true
toc_min_header: 2
toc_sticky: true
toc_label: "Table of Contents"
header:
  image: "images/big_rock_photo.jpg"
excerpt: "This post is an exploratory data analysis on the 2019 Big Rock blue marlin fishing tournament. I used Python to scrape the data from the website and used R for data manipulation and visualization."

---

## Overview

This is an exploratory data analysis of the 61st annual Big Rock blue marlin fishing tournament that ran from June 10th - June 15th, 2019.

The Big Rock is one of the largest competitive sport fishing tournaments in the world. It is held annually in the beginning of June and is based out of a small coastal town named Morehead City, North Carolina, which is about an hour from where I grew up. The ultimate goal of this tournament is to catch and weigh the heaviest Atlantic blue marlin, resulting in a large monetary prize of nearly 1 million dollars.

I chose to analyze this tournament because I'm intrigued by it, I love to fish, and was curious to see if any interesting patterns and/or relationships existed.

184 sport fishing boats entered this year (ranging from 26-97 feet long) and the prize purse was a record $2.86 million!

Here is a link to [The Big Rock](https://www.thebigrock.com/) website and a link to the [Participants](https://www.thebigrock.com/tournament/participants/).

These boats fish 40-120 miles offshore and have to radio-in any activity. For instance, when they are hooked-up to a fish, lose a fish, release a fish, or boat a fish, it must be reported asap. This creates a lot of activity data, which is what I analyzed. Using this data that I was able to collect through web scraping, I uncovered some fascinating insights that I go into more detail about below.

If you need some context about the tournament and its rules, please refer to the **Tournament Details** section below. There's also a **Terminology** section to help explain jargon.

For the person interested in how I obtained the data and and did the analysis, please read the **Technical Notes** section. This was my first web scraping project and I go through some of my struggles and what I learned.  


## Introduction

As you can imagine, there are varying beliefs of what works best to attract and catch billfish, especially blue marlin. Different contributing factors include, but are not limited to: the type of lure, brand of lure, color of lure, bait type, water depth, water temperature, wind direction, current direction, geographical area, time of year, moon phase, sunny/cloudy skies, calm/choppy/rough seas, boat length, local knowledge, time of day, and even engine type (yes, some people believe that certain diesel engines are better than others at attracting blue marlin due to a unique *hum* or *vibration* that they disburse in the water).

Using the data available on the Big Rock website, I can provide awareness into some of these variables with data visualizations of descriptive statistics and relationships. If I had access to more data (like longitude and latitude of hook-ups, the lure that the fish ate, etc.), then I could complete a more advanced analysis (using methods such as supervised machine learning to predict a winner, or unsupervised machine learning to uncover valuable patterns). Sadly, fisherman keep data points like this very secret with hopes of having a competitive advantage.

I explored:

  1. Participants:
      * a) Distribution of the lengths of all boats that entered.  
      * b) Maps of all of the cities the boats are from.

  2. Time:
      * a) Frequency distribution of hook-ups by hour overall and by species
      * b) Frequency distribution of hook-ups by 15 minute intervals overall and by species
      * c) Distribution and summary statistics for time fighting a fish overall and by species

  3. Relationships:
      * a) The relationship of boat size and amount of billfish caught.
      * b) The relationship of boat brand and amount of billfish caught.
      * c) The relationship of the boat's port city/state and amount of billfish caught.
      * d) Do the above relationships differ if the fish was released or boated?
      * e) Do the above relationships differ by the species of billfish?
      * f) How many boats did not catch anything? What is different about them?

  4. Owners:
      *  a) The businesses/job titles of the owners of the boats. I think it would be interesting to see how these people make a living.


## Analysis

### 1. Participants:

#### a)

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/image1.jpg)

* Most boats entered are 50-64 feet long. This distribution is right-skewed to bigger boats because they are more expensive.
* 60 and 61 foot boats are tied for the most participants at 14 each.


#### b)

![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/map1.jpg)

* Each red dot is a city of a participant. Multiple participants can come from one point on the map.
* Boats that participated in the tournament are spread out as far as Texas, South Dakota, and Michigan. It makes sense that most of them are clustered near the North Carolina coast.
* One boat was from Majuro, Marshall Islands, which is an incredibly tiny island between Hawaii and Australia.


![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/map2.jpg)

* Participants from NC are spread out all over the state.  


![alt]({{ site.url }}{{ site.baseurl }}/images/big_rock/map3.jpg)

* This map clusters nearby cities together and counts how many are from each.


<img src="{{ site.url }}{{ site.baseurl }}images/big_rock/map4.jpg height="100">

* Zooming in on the East Coast, we can see the clusters more clearly. Participants from NC are split between the middle of the state and the coast.


### 2. Time

#### a)

#### b)

#### c)

### 3. Relationships

#### a)

#### b)

#### c)

#### d)

#### e)

#### f)

### 4. Owners

#### a)


## Tournament Details

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

The term *billfish* refers to the characteristic of a long spear-like nose/upper-jaw (a bill) that these fish have. They are fast, powerful, difficult to catch, fight extremely hard, and jump a lot when caught. These challenging and exciting characteristics, along with the size and beauty of these fish, are just a few reasons for the allure. Not to mention the enjoyment of being on the open ocean with the comforts of a deluxe sport fishing yacht.

The term *meat fish* refers to the fish having edible and delicious meat. These fish have no bills and are typically smaller, more abundant, and easier to catch. However, they are still big and beautiful fish (normally 10-100 pounds). Billfish are generally not thought of as good to eat (although some people do smoke them).

The term *releasing* or *released* means the fish was let go instead of brought to land because it was too small, or because it wasn't a blue marlin.

The term *hooked-up* means a boat is actively fighting a fish that just ate one of the baits in the water.

The term *lost* means that the boat was fighting a fish, but the fish got off (it became un-hooked).

The term *wrong species* means the hooked-up fish that was caught or lost was not a qualifying species.

The term *boating*, *boated*, *land*, or *landed* means the crew of a boat was able to catch and bring aboard a blue marlin that they intend to weigh on land. The fish will only be boated if the crew believes it meets the 400 lb qualification (they make this decision by measuring its length and girth to calculate its approximate weight).


## Technical Notes


Python code block
```python
    import numpy as np

    def test_fuction(x, y):
      z = np.sum(x,y)
      return z
```

R code block:
```r
library(tidyverse)

df <- read_csv("some_file.csv")
head(df)
```

Here's some inline code `x+y`

Here's an image
<img src="{{ site.url }}{{ site.baseurl }}/images/filename.jpg" alt="description"

Here's another image using Kramdown:
![alt]({{ site.url }}{{ site.baseurl }}/path/file_name.jpg)
