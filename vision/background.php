<?php

$json = file_get_contents("php://input");
$array = json_decode($json);
$base64 = $array->picture;
$img = base64_decode( $base64);
$a = file_put_contents('./test.jpg', $img);//返回的是字节数printr(a);



echo exec("./lehuo");

/*
$hash_val = exec("./lehuo_finger");
if( $hash_val<5){
    echo 1;
}else{
    echo 0;
}
*/

?>
