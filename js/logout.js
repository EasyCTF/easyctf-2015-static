// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    return api_call("POST", "/api/user/logout", {}).done(function(result) {
      return location.href = "/";
    });
  });

}).call(this);
