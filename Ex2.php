<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Concatenation in PHP</title>
</head>
<body>
    <?php
        $like = "I like php";
        $num = 7;
        echo $like . $num;

        echo "<p>";
        echo $like . " " . $num;
        echo "</p>";

        echo "My favorite php version is $num";
    ?>
</body>
</html>