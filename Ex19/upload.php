<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP File Upload</title>
</head>
<body>
    <?php
        if(isset($_POST["SubmitBtn"])) {
            $fileName = $_FILES["resume"]["name"];
            $fileSize = $_FILES["resume"]["size"] / 1024;
            $fileType = $_FILES["resume"]["type"];
            $fileTmpName = $_FILES["resume"]["tmp_name"];
            if($fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                $fileType = "docx file";
                if ($fileSize <= 2000) {
                    // $random = rand(1111, 9999);
                    // $newFileName = $random.$fileName;

                    // $uploadPath = "testUpload/".$newFileName;
                    $uploadPath = "testUpload/".$fileName;


                    if(move_uploaded_file($fileTmpName, $uploadPath)) {
                        echo "Successful<br>";
                        echo "File Name : " . $fileName."<br>";
                        echo "File Size : " . $fileSize . "kb<br>";
                        echo "File Type : " . $fileType . "<br>";
                    }
                }
                else {
                    echo "Maximum upload file size limit is 2000 kb";
                }
            }
            else {
                echo "You can only upload a Word doc file.";
            }
        }
    ?>
</body>
</html>