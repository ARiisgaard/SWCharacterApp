# SWCharacterApp
 A React Native App to look up information about your favorite Star Wars characters


 # How to run the Project

  - Clone the files, navigate to the folder and run npm install
  - run expo start to start the development server

 # Testing device
 All tests have been done using Expo on an Android device. The testing device was a Huawei P9lite.

 # The Challenge

 Building an application for displaying characters from the Star Wars API (https://swapi.dev/).

 The app can be built using either "Create React Native App" (scripts) or "Expo". Push your assignment to Github.

 The app must be able to do the following:

 * list all characters (people) sorted by name (FlatList vs SectionList vs ScrollView vs another [1])
 * show a spinner while data is being loaded
 * display "name" and actual name of "homeworld" for each character in list [2]
 * go to a character details screen when tapping a character
 * show "name" of character together with an avatar based on "gender", "hair_color", "eye_color" and "skin_color" [3]

 ### NOTES

 [1] Why did you choose this
 [2] You will need a combination of two API calls and I would like to see how you would optimize this to avoid excessive/unnecessary API calls
 [3] Use `react-native-avataaars` or a similar package to build the avatar

 ### PACKAGES (to be considered )

 * axios
 * react-native-avataaars
 * react-navigation

 # Design considerations

 ## Avatars

 ### Choice of library  
 I chose to use the library [Bigheads](https://github.com/felipecespedes/react-native-bigheads) for the avatars instead of the suggested react-native-avataaars. The reasoning behind this choice was that Bigheads is more up to date.
 The last patch for avataaars was 2 years ago, whereas no file in Bigheads is more than 4 months old and the most recent patch was a month ago. Loading Avataars resulted in the error message:
  > Webviewer has been removed from React Native

 While there would be workarounds for this particular error using an outdated library might have resulted in other errors later down the line. Bigheads also had better support for SW’s large number of robots.
 ### Inclusivity beyond the human race
 Creating avatars for Star Wars characters present some unique challenges, which libraries for human-avatars were not built for handling. Both libraries have limited options in regard to possible skins colors, which does not include colors like green, gold or blue. This means that a character like Yoda cannot be colored correctly.
 Fixing this issue would require tinkering with the Bigheads code. While I could have created the option for a custom colors and made a pull request on Bigheads’ github, this would be a niche feature, which never would be relevant with using Bighead-avatars for humans.
 Instead I chose the yellow color option as an indication of colors, which the library was unable to visualize. This color was chosen, since the database does not contain any characters with that color.



 ## Using the SWapi

 The SWapi is dividing their responses across multiple pages. This means that it is not possible to make a single request to get all data.
 ###Creating a planet dictionary
 When loading the data about characters the homeworld data is a url instead of a planet name. These urls need to be translated into names, so a dictionary was created. This dictionary could have been created in multiple ways:
 #### Looping through each planet page (chosen method)
 Each planet page contains a url-parameter “next”, which is a link to the next page or the value null, if there is no next page. This next parameter is used to loop through each page. Whenever a page-request is done, a new request is sent to the next-url. This continues until the next parameter is null.
 -	Advantage: Guaranteed to collect all data
 -	Disadvantage: Long processing time, since each fetch request needs to await the previous
 #### Parallel data fetching
 An alternative to collecting the data from each page one by one would be to make a fetch request to all of the pages at the same time. To be able to do this it would be necessary to know the total number of pages, which could be calculated based on the parameter “count”. This parameter is the total number of planets. Since there are 10 planets per page, the total number of pages can be calculated as pageNumber = “count”/10 rounded up. Requests to each of these pages could then be sent simultaneously.
 -	Advantage: Faster, since all requests would be made at the same time  
 -	Disadvantage: Breaks if SWapi changes the number of planets per page.
 #### Loading once and for all
 Instead of fetching the same data every time the app is started the data could be scraped once and be saved as a local json object.
 -	Advantage: Fast – no need to make any planet data request s at startup
 -	Disadvantage: Static – would not get updated if new planets got added to the database

 #### The chosen method
 I ended up choosing the first method, since it is guaranteed to work unless they make drastic changes to the api. SWapi’s frontpage mentions that they have data from 7 of the 9 films, which to me indicates that more content is going to be added to the api. Because of this the loading once option is not ideal.

 In a perfect world, where I had the option to tinker with the backend, I would fix this problem over there  instead, since that would be much easier. This would allow me to send all the necessary data using a single request instead of one for each page.

 ### Alphabetic order
 One of the requirements for the application was that the characters should be ordered alphabetically. This has only been done to some extent. The data on SWapi are not ordered alphabetically, so for instance Anakin is on page 2 and Darth Vader is on page 1. This means that to be able to correctly order all of the characters alphabetically one would need to download all of the data. To do so 9 separate fetch requests would have to be made – one for each page of data. This would slow down the performance of the app. To easily find the character, which one is looking a search bar  has been added instead. The search results are ordered alphabetically.

 ## The addition of a search bar
 In the challenge I was asked to reflect on my choice of list. This made me think about how I as a user would prefer to scroll through Star Wars‘s [7563](https://www.sciencealert.com/data-scientists-map-every-important-character-in-the-star-wars-universe) named characters. I concluded that no matter the scrolling option I would not like scroll through that many characters. So instead I added a search option to make it easier to find the character one is looking for.
