const apiKey = "37466d95f4264629941394e597f3942e"; // Get your API key and add it here
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`; // Website to fetch news

// JS event Listner
document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Variables declaration
      const articles = data.articles;
      const newsContainer = document.getElementById("news-container");

      // Check if the articles array is not empty
      if (articles.length > 0) {
        // Loop to show each data on website demostration
        articles.forEach((article) => {
          // Create element div and add class
          const articleElement = document.createElement("div");
          articleElement.classList.add("news-article");

          // Create The title for the headline
          const titleElement = document.createElement("h4");
          titleElement.textContent = article.title;
          articleElement.appendChild(titleElement);

          // Create a description for the headline
          const descriptionElement = document.createElement("p");
          descriptionElement.textContent = article.description;
          articleElement.appendChild(descriptionElement);

          // Create a "Read More" button and add link to go to the article
          const readMoreButton = document.createElement("a");
          readMoreButton.href = article.url; // change url
          readMoreButton.target = "_blank"; // Click to Open link in a new tab
          readMoreButton.classList.add("read-more");
          readMoreButton.textContent = "Read More";
          articleElement.appendChild(readMoreButton);

          // Append the article to the container
          newsContainer.appendChild(articleElement);
        });
      } else {
        newsContainer.textContent = "No articles found.";
      }
    })
    .catch((error) => console.error("Error fetching the news:", error));
});
