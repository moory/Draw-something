<?php
	header('application/x-www-form-urlencoded');
	$conn=mysqli_connect('127.0.0.1','root',"",'nhwc',3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT * FROM paints";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	echo $row['paint'];
?>