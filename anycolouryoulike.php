<?php
if (isset($_POST['data'])) {
    $data = $_POST['data'];
    $filename = "amendments/amendment_" . time() . ".txt";

    if (!file_exists('amendments')) {
        mkdir('amendments', 0777, true);
    }

    file_put_contents($filename, $data);
    echo "Data saved as $filename";
} else {
    echo "No data received.";
}
?>