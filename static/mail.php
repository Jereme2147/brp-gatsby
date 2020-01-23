<?php
    $email = $_POST['email'];
    $first = $_POST['first'];
    $last = $_POST['last'];
    $business = $_POST['business'];
    $comments = $_POST['comments'];
    $phone = $_POST['phone'];
    $choose = $_POST['choose'];
    $heating = $_POST['heating'];
    $cooking = $_POST['cooking'];
    $water = $_POST['water'];
    $fireplace = $_POST['fireplace'];
    $clothes = $_POST['clothes'];
    $generator = $_POST['generator'];
    $message = 'You recieved an email from: ';
    $break = "\r\n";
    if ($first != '') {
        $message = $message . $break . $first . ' ' . $last . $break;
    } else {
        $message = $message . $break . $last .$break;
    }
    if ($business != '') {
        $message = $message . 'With ' . $business . $break;
    }
    $message = $message . $email . $break;
    if ($phone != '') {
        $message = $message . 'Phone Number: ' . $phone . $break;
    }
    if ($choose != '' && $choose != 'none') {
        $message = $message . 'And needs to: ' . $choose . $break;
    }
    if ($heating != '' || $cooking != '' || $water != '' || $fireplace != '' || $clothes != '' || $generator != ''){
        $needs = array($heating, $cooking, $water, $fireplace, $clothes, $generator);
        $message = $message . 'Customer currently use LP for ' . $break;
        foreach ($needs as $value) {
            if ($value != '') {
                $message = $message . '  ' . $value . $break;
            }
        }
    }
    if ($comments != '') {
        $message = $message . $comments . $break;
    }

    // echo "Email $email First $first Last $last Business $business Message $message";
    mail('jereme@jeremedaniels.com', 'Customer', $message);
    // header("Location: ../index.php");
    // header("Location: ./success.php");

?>