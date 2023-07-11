<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Composer</title>
</head>
<body>
    <?php 
        require "vendor/autoload.php"; 
        use Intervention\Image\ImageManagerStatic as Image;
        $Image = Image::make("upload/image.png")->resize(200, 200)->save("img/thumbnail.png", 100);
    ?>
</body>
</html>