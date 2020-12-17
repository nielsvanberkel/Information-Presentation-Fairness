<?php
// $json_str = file_get_contents('php://input');
$json = json_decode($_POST['data']); 

$fp = fopen('participantdata/answers.csv', 'a');

foreach ($_POST as $fields) {
    fputcsv($fp, $fields);
}

fclose($fp);
?>