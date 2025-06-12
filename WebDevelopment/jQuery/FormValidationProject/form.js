
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,})+$/;
            return regex.test(email);
        }

        function isValidPassword(password) {
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            return regex.test(password);
        }

        $("#togglePassword").click(function () {
            var type = $("#password").attr("type") === "password" ? "text" : "password";
            $("#password").attr("type", type);
            $("#confirmpassword").attr("type", type);
        });

        $("#submitbutton").click(function (e) {
            e.preventDefault();
            var errormessage = "";
            var missingfield = "";

            var email = $("#Email").val().trim();
            var phone = $("#phoneno").val().trim();
            var password = $("#password").val();
            var confirmPassword = $("#confirmpassword").val();

            $("#error").hide().html("");
            $("#success").hide().html("");

            // Required field checks
            if (email === "") missingfield += "• Email is required<br>";
            if (phone === "") missingfield += "• Phone number is required<br>";
            if (password === "") missingfield += "• Password is required<br>";
            if (confirmPassword === "") missingfield += "• Confirm password is required<br>";

            // Email format
            if (email !== "" && !isEmail(email)) {
                errormessage += "• Invalid email format<br>";
            }

            // Phone number
            if (phone !== "") {
                if (!$.isNumeric(phone)) {
                    errormessage += "• Phone number must be numeric<br>";
                } else if (phone.length !== 10) {
                    errormessage += "• Phone number must be 10 digits<br>";
                }
            }

            // Password format
            if (password !== "" && !isValidPassword(password)) {
                errormessage += "• Password must be 8+ characters with uppercase, lowercase, and number<br>";
            }

            // Password match
            if (password !== "" && confirmPassword !== "" && password !== confirmPassword) {
                errormessage += "• Passwords do not match<br>";
            }

            if (errormessage === "" && missingfield === "") {
                $("#success").html("✔ Form submitted successfully!").show();
            } else {
                $("#error").html(errormessage + missingfield).show();
            }
        });
    