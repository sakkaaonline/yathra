<html>
<style>
body {
	font-family: Arial, Helvetica, sans-serif;
}
.fullsize {
	width: 100%;
}
.border {
	border: 1px solid #000;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
}
.header {
	border-bottom: 1px solid #000;
}
.btn {
	font-size: 11px;
    color: #000;
}
.btn.selected {
	font-weight: bold;
	color: #ff9800;
}
</style>
<body>
<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

$textFileContents="";
$filenames = '';

function readFiles() {
	$GLOBALS['textFileContents'] = '';
	$filename = "./json/gallery.json";
	$fd = fopen($filename,"r");
	$GLOBALS['textFileContents'] = fread($fd,filesize($filename));
	fclose($fd);
}

if (isset($_POST['frmSub'])) {
	$writedata = $_POST['newdata'];
	$fd=fopen("./json/gallery.json","w");
	fwrite($fd, $writedata);
	fclose($fd);
	readFiles();
}
readFiles();

function fetchFiles() {
	$GLOBALS['filenames'] = '';
	$fileList = glob('images/gallery/*');
	foreach($fileList as $filename){
		if(is_file($filename)){
			 $GLOBALS['filenames'] .= $filename.'<br>';
		}
	}
}
fetchFiles();
if(isset($_POST['Submit1'])){
	$target_dir = "images/gallery/";
	$extension = pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION);
	$name = $_POST["filename"];
	if(!empty($name)) {
		move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir.$name.".".$extension);
		echo "Image Uploaded Successfully"."<br/>";
		echo "Old Image Name = ". $_FILES["file"]["name"]."<br/>";
		echo "New Image Name = " . $name.".".$extension;
		fetchFiles();
	} else {
		echo "Filename is empty";
	}
	
}
?>
<a href="add.php" class="btn">EVENT UPLOAD</a>
<a href="gallery.php" class="btn selected">GALLERY UPLOAD</a>

<div class="border">
<h3 class="header">UPLOAD GALLERY IMAGE</h3>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data" method="post">
Enter image name :<input type="text" name="filename"><br/><br/>
Select image :
<input type="file" name="file"><br/><br/>
<input type="submit" value="Upload" name="Submit1">
</div>
<div class="border">
<h3 class="header">LIST OF GALLERY IMAGES</h3>
<?php echo $filenames; ?>
</div>
<div class="border">
<h3 class="header">EDIT GALLERY JSON</h3>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" >
<textarea name="newdata" class="fullsize" rows="30" cols="40">
<?php
echo stripslashes($textFileContents);
?>
</textarea>

<input type="submit" name="frmSub" value="PUBLISH">
</form>
</div>
</body>
</html>