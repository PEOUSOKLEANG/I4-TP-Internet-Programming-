<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Decision Making (If - Elseif - Else Statement)</title>
</head>
<body>
    <?php
        $date = date("m-d");

        if($date == "07-10") {
            echo "Wishing you a very Happy Birthday";
        }
        else if($date == "08-15") {
            echo "Happy Independence Day";
        }
        else {
            echo "Sorry";
        }
    ?>
</body>
</html>