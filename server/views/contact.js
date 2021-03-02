<% include partials/header.ejs %>
<% include partials/main_nav.ejs %>

//Main Content
<main class="container">
    <form action="/contact" method="POST">
        <label for="fname">Name:</label>
        <input type="text" id="fname" name="fname">
        <input type="submit" value="Submit">
            
        </input>
        </input>
    </form>
</main>
<% include partials/footer.ejs %>


