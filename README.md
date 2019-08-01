# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser searches for the server, requests the data for the page we want to go to, receives the data from the server, and then renders it in the browser window.

## From start to finish, how does data reach you to be rendered in the browser?

The browser first reaches to a DNS to find the ip address for the website I'm trying to reach. The browser will then connect to that ip address to request the html file for the page. The server searches for the requested data, and then returns the page data to the browser. The browser then loads all code in the file, including linked style sheets and javascript. The browser then processes this data to display the requested page.

## What code is rendered in the browser?

The browser renders all html code as well as any linked css stylesheets or javascript.

## What is the server-side code’s main function?

Server-side code is meant to customize a page or load user-specific information in a secure way, rendering those changes to a site's code before it is sent to a user. This means the client isn't able to see what the actual code is which created the page. Server-side processing is more secure, and helps to create much more dynamic websites.

## What is the client-side code’s main function?

Client-side code is scripting that is embedded into the html of a page. This means the code runs in the user's browser rather than interacting with the server, cutting down on server load. Because it runs on the client's browser the data is less secure, and users can actually see all of the scripting used to create the page they see.

## What is runtime?

Runtime is the actual timeframe where a program is running or executing. The runtime system, however, is the environment in which the code runs, specific to the type of code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

There will be a new instance of client-side assets every  time you request something from the server. Because of this, there are constantly new instances being created.

## How many instances of the server-side code are available at any given time?

There is only one instance of server-side code available, though there may be other unavailable instances in development. When the server receives a request, it will process the server-side code to generate the client-side assets.

## How many instances of the databases connected to the server application are created?

From what I understand, it's possible to create multiple versions of a database, but generally there is only one instance of a database live for users to access.
