# Cat Facts
This web application serves as a simple and engaging way to display random cat facts along with a cat image. Here's a breakdown of what the application does:

Key Features:


Displays a Random Cat Fact:
![catfacts1](https://github.com/user-attachments/assets/a4019dd0-3741-4d54-b072-3aab32bbfbfe)


The application fetches a collection of cat facts from an external API.
When the page is loaded, it randomly selects one of these facts and displays it prominently on the page.
If the fact is not available, a placeholder message, "Everyday a new cat fact! 🐈‍⬛", is shown instead.


Shows a Cat Image:
Along with the cat fact, the application displays a cat image fetched from another external API.
If for some reason the image is not available, an empty image tag is rendered, ensuring the layout remains intact.


Interactive Button:
The page includes a button labeled with cat emojis ("😼😺😸😾").
Clicking this button refreshes the page, fetching a new random cat fact and cat image, giving users new information each time.


Technical Details:


EJS (Embedded JavaScript):
The application uses EJS as a templating engine to dynamically generate HTML content based on data fetched from APIs.
The <% %> tags are used to insert dynamic content into the HTML structure, such as displaying the cat fact and image.


Bootstrap Integration:
The application utilizes Bootstrap for styling, ensuring a responsive and modern design.
Bootstrap's grid system is used to create a clean, centered layout, with the cat image and text content displayed side by side.


Error Handling:
The application includes basic error handling, ensuring that if data is not fetched properly, the page still renders with default placeholder content.


User Experience:
When a user visits the page, they are greeted with a fun, randomly selected cat fact and an accompanying cat image. If they want to see more, they can click the button, and the content will update with a new fact and image, providing a simple yet enjoyable experience for cat enthusiasts.
