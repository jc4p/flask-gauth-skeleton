$(document).ready(function() {
    $("#login-button").on("click", function(e) {
        var loginParams = {
            'callback': loginCallback,
            'clientid': 'YOUR_CLIENT_ID',
            'scope': 'profile',
            'cookiepolicy': 'single_host_origin'
        };

        gapi.auth.signIn(loginParams);
    });

    $("#logout-button").on("click", function(e) {
        $.post("/logout", {}, function() {
            window.location.reload();
        })
    });
});

var loginUsingName = function() {
    var request = gapi.client.plus.people.get({'userId': 'me'});
    request.execute(function(res) {
        $.post("/login", { 'name': res.displayName }, function() {
            window.location.reload();
        });
    });
}

var loginCallback = function(auth) {
    if (auth['status']['signed_in'] && auth['status']['method'] != 'AUTO') {
        // Ok, the user is successfuly logged in.
        // For now, we're just going to save their name in the session using 
        // encrypted cookies, replace this with whatever makes sense for you.
        gapi.client.load("plus", "v1", loginUsingName).then(loginUsingName());
    }
};