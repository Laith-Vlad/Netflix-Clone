# Netflix-Clone


You should have Six main components in your project.

    Home
    Navbar(next lab)
    MovieList
    Movie
    ModalMovie
    FavList (next lab)

Home component:

    Fetch data using the endpoint (‘/trending’) that you created in Lab12.

    Render MovieList component.

MovieList component:

    Map the data that you have from the API.
    It returns and renders a Movie component.

Movie component:

    It includes the card that represents the movie
    Each movie should have a button to add to the favorite list.
    It includes a ModalMovie component.

ModalMovie component:

    It appears once the user clicks add to favorite button and shows movie details {name, img} also the user can add a comment on the card before adding it to the favorite list.

    When you click add to the favorite button you should store the data that you have from the Modal in your Database, using this endpoint(‘/addMovie’) from Lab13.

234