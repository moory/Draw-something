<?php
	header('application/x-www-form-urlencoded');
	$addr=$_REQUEST['addr'];
	echo "$addr";
	//$conn=mysqli_connect('127.0.0.1','root',"",'nhwc',3306);
	$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="delete from paints";
	mysqli_query($conn,$sql);
	$sql="INSERT INTO paints VALUES('$addr')";
	$result=mysqli_query($conn,$sql);
	if($result){
		echo '执行成功,被影响行数为：'.mysqli_affected_rows($conn);
	}else{
		echo "$sql";
	}
?>