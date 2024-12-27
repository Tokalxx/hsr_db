<?php

$testunit = [
    [
        "id" => 1,
        "name" => "Kafka",
        "element" => "Lightning",
        "Path" => "Nihility"
    ],
    [
        "id" => 2,
        "name" => "Firefly",
        "element" => "Fire",
        "Path" => "Distruction"
    ],
];

header('Constent-Type: application/json');
echo json_encode($testunit);
