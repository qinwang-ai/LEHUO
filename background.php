<?php
header('Content-Type:text/html;charset=utf-8'); 

$json = file_get_contents("php://input");
$array = json_decode($json);
$base64 = $array->picture;
$img = base64_decode( $base64);
$a = file_put_contents('./test.jpg', $img);//返回的是字节数printr(a);


//echo exec("./lehuo");


$hash_val = exec("./lehuo_finger");
//echo $hash_val;
if( $hash_val<15){
    echo '{"status":"true"}';
    exec("echo 'has echo 1!'>>log");
}else{
    echo '{"status":"false"}';
}


?>

