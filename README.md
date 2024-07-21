# NewsMag
#React And BOOTSTRAP
=>npm create vite@latest
Project name: news-mag
framework: React
variant: JavaScript
now install all the dependencies from package json => npm install => node_modules created 
to run this project => npm run dev 
src -> App.jsx clear and write rafc
clear many files default codes 
##BOOTSTRAP
Add CDN to the project to use bootstarp with React project.
Add link to bootstarp css and script file  
Goto BOOTSTRAP -> Component section 
make Components folder and make jsx files in it (Navbar , NewsBoard , NewsItem)
mount them to App.jsx
##News API 
store API key in environment variable from News API site -> .env file
from the site -> documentation -> top headlines copy the link 
add this to NewsBoard.jsx file 
add useState() variable for the articles 
fetch the articles from the url 
then display them in NewsItem component map them 
create news props in NewsBoard
then destructure the props in NewsItem and then use the props in it 
Add stylings 
Add categories to Navbar
