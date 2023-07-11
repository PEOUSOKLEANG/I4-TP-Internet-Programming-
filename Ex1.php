<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Constant Definition in PHP</title>
</head>
<body>
    <?php
        define("EMAIL", "PeouSokleang@gmail.com<br>");
        echo EMAIL;

        define("myCon", true);
        if(myCon) {
            echo "True<br>";
        }

        define("ONECONSTANT", "some value<br>");

        define("CONSTANT", "Hello world.<br>");
        echo CONSTANT;
    ?>
</body>
</html>