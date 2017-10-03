angular
    .module("hrApp")
    .service("userService", function ($http, $state) {

        var _users = [];

        var _currentUser = null;

        this.getCurrentUser = function () {
            return _currentUser;
        }

        this.setCurrentUser = function (user) {
            _currentUser = user;
        }

        this.logout = function () {
            _currentUser = null;
            $state.transitionTo("app.home", null, { reload: true });
        }

        this.getUsers = function () {
            return $http.get("http://localhost:60069/api/users");
        }

        this.getUserUserPass = function (user, pass, cb) {
            $http.get("http://localhost:60069/api/users").then(function (response) {
                var _users = response.data;
                var setUser = null;
                for (var i = 0; i < _users.length; i++) {
                    if (user == _users[i].userName && pass == _users[i].passWord) {
                        setUser = _users[i];
                        cb(_users[i]);

                    }
                }
                if(setUser == null) {
                    alert("User name and password are incorrect! Please try again!");
                }
            }, function (error) {
                console.log(error);
            })
        }

        this.getUserById = function (id, cb) {
            $http.get("http://localhost:60069/api/users/" + id).then(function (response) {
                var user = response.data;
                cb(user);
            })
        }

        this.addUser = function (user) {
            $http.post("http://localhost:60069/api/users", user);
        }

        this.updateUser = function (user) {
            $http.put("http://localhost:60069/api/users/" + user.id, user).then(function () {
                for (var i = 0; i < _users.length; i++) {
                    if (_users[i].id == user.id) {
                        _users.splice(i, 1, user);

                    }
                }
                console.log(_users);
            }, function (error) {
                console.log(error)
            })
        }


        this.deleteUser = function (user) {
            $http.delete("http://localhost:60069/api/users/" + user.id).then(function () {
                $state.transitionTo("app.manage", { reload: true });

            }, function (error) {
                console.log(error);
            })
        }
    })