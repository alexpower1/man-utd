import React from "react";

function About() {
  return (
    <div className="About">
      <h1>Manchester United Project</h1>

      <p>
        The objective of this project is to develop skills working with React,
        JavaScript, JSON and REST APIs. This is an ongoing project.
      </p>

      <p>
        The external API used in this project is https://www.football-data.org.
      </p>

      <h1>About Me</h1>

      <p>
        I'm a web developer from Manchester. I primarily work with HTML, CSS,
        JavaScript and PHP, along with a range of frameworks and libraries.
      </p>

      <p>
        I've developed this project in order to learn more about the
        technologies used, but also to include as part of my personal portfolio.
        The GitHub repository for this application can be found{" "}
        <a
          href="https://github.com/alexpower1/man-utd"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>
        .
      </p>

      <h1>Application Features</h1>

      <h3>Fixtures - RESTful API</h3>

      <p>
        The 'Standings' feature shows fixtures and results for the current
        Premier League season. Data is received via an axios GET request to
        https://www.football-data.org.
      </p>

      <p>
        The data for each match is converted and formatted so that it can
        displayed in a user-friendly manner.
      </p>

      <p>
        The data for each match is stored in an object and passed into a
        component as props.
      </p>
      <h3>Standings - RESTful API</h3>

      <p>
        The 'Standings' feature shows the current Premier League table. Data is
        received via axios from a RESTful API (https://www.football-data.org/)
        as an array of objects. This is subsequently converted into an HTML
        table using the Map function.
      </p>

      <p>
        For responsive design purposes, I also make use of the Window's resize
        event on componentWillUnmount, in order to conditionally display or hide
        certain table elements.
      </p>

      <p>
        At a later stage I intend to extend the functionality of this feature to
        allow users to select and view tables by season.
      </p>

      <h3>Players - RESTful API and Local Data File</h3>

      <p>
        As before, data is pulled from the API and passed to components as
        props.
      </p>

      <p>
        I wanted to include player pictures, but as this is not supported by the
        API, I created a local data source. The local data source is compared
        with the data received from the API, and displays the correct image
        accordingly, if available.
      </p>

      <p>The same pagination component is reused, too.</p>

      <h3>Old Trafford - Geolocation</h3>

      <p>
        The 'Old Trafford' feature requests the user's location and determines
        the user's distance from Manchester United's stadium, Old Trafford.
      </p>

      <p>
        The distance is determined via a JavaScript function making use of the
        Haversine formula (calculates the great-circle distance between two
        points on a sphere given their longitudes and latitudes).
      </p>

      <h3>Pagination</h3>

      <p>
        Pagination is applied to both the Fixtures and Players components.
        Number of pages is calculated with selected number per page and number
        of results received from the API.
      </p>

      <p>Button is either disabled or enabled depending on the current page.</p>
    </div>
  );
}

export default About;
