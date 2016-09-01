<?php
	header('application/x-www-form-urlencoded');
	$addr=$_REQUEST['addr'];
	echo "$addr";
	$conn=mysqli_connect('127.0.0.1','root',"",'nhwc',3306);
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