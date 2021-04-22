window.onload = function(){
    document.querySelector('#bouton').addEventListener("click", AjaxExample);
}


function AjaxExample(){
    // first step is to instantiate an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // next we set the onreadystatechange property of the object
    // this property holds a function that is executed every time the readyState property of our object changes
    // there are 5 ready state values
    // 0 is not initialized
    // 1 is set up
    // 2 is sent
    // 3 is in process
    // 4 is completed
    xhr.onreadystatechange = function(){
        // check for a completed (readyState == 4) and successful (status == 200) request
        //
        // Lets talk briefly about status.
        // Status refers to the http response code being sent from the endpoint. These can be
        // seen throughout the wen and you are likely to have run into them in the past, such
        // as 404 page not found, or 403 forbidden.
        //
        // There are 5 sets od status codes starting at 100, and going up potentially to 599.
        // 100-199 - Informational
        // 200-299 - Successful response
        // 300-399 - Redirects
        // 400-499 - Client-side error
        // 500-599 - Server-side error
        if(this.readyState == 4 && this.status == 200) {
            // parse the JSON response
            let vader = JSON.parse(this.response);
            // update the innerHTML of an element
            document.querySelector("#fullname").innerHTML = vader.name;
        }
    }
    
    /* open the request, specify the HTTP method, url, and asynchronicity
    //
    // Lets talk about that HTTP method, and HTTP methods in general.
    // When we make a HTTP request we need to specify the type we are making.
    // There are 9 in total, but we are going to focus just on four.
    //
    // GET - We want to retrieve some data.
    // POST - Creates a new resource.
    // PUT - Replaces or creates the target resource.
    // DELETE - We want to remove a resource.
    //
    // GET, PUT, and DELETE are what is referred to as idempotent. Whereas
    // - POST is not. This can be important to note, as idempotency indicates
    // whether if multiple identical requests will change the state of the 
    // server. In the case of POST it will add a new resource everytime,
    // causing the  state of the server to change as a result.
    // - GET simply retrieves information, so no matter how often it is called
    // the state of the server will not change.
    // - PUT will create or replace, so multiple calls will not cause any 
    // change to the state of the server
    // - DELETE will likewise not cause any additional changes. You can not 
    // delete something more. With the small caveat that it will change the
    // response.  
    */
    xhr.open("GET", "https://swapi.dev/api/people/4/", true);
    // send the request
    xhr.send();
}
