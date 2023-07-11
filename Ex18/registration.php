<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Forms</title>
</head>
<body>
    <?php
        if(isset($_POST['Submit'])) {
            $emp_name = trim($_POST["emp_name"]);
            $emp_number = trim($_POST["emp_number"]);
            $emp_email = trim($_POST["emp_email"]);

            if($emp_name == "") {
                $errorMsg = "error: Please enter number.";
                $code = "2";

                echo $errorMsg."<br>Error code: ".$code;
            }

            elseif (is_numeric(trim($emp_number)) == false) {
                $errorMsg = "error: Please enter numberic value.";
                $code = "2";

                echo $errorMsg."<br>Error code: ".$code;
            }

            elseif ($emp_email == "") {
                $errorMsg = "error : You did not enter an email.";
                $code =  "3";

                echo $errorMsg."<br>Error code: ".$code;
            }

            elseif (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $emp_email)) {
                $errorMsg = 'error : You did not enter a valid email.';
                $code = "3";

                echo $errorMsg."<br>Error code: ".$code;
            }

            else {
                echo "Success";
            }
        }
    ?>
</body>
</html>