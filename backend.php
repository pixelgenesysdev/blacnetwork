<?php

$api_key = 'GWxyXqZQD4pd99o1EjW2JG0QQgDWbr80hNQAC9U62q6mcTYPg4kiPVU96zl4MxZS';

// Determine the action based on the query parameter
$action = isset($_GET['action']) ? $_GET['action'] : null;

// Fetch products from Printful
if ($action === 'get_products') {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.printful.com/store/products');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer ' . $api_key
    ));
    $response = curl_exec($ch);
    curl_close($ch);

    header('Content-Type: application/json');
    echo $response;
    exit;
}

// Place an order with Printful
if ($action === 'place_order' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $product_id = $_POST['product_id'];
    $customer_name = $_POST['customer_name'];
    $customer_address = $_POST['customer_address'];

    // Order data formatted for Printful
    $orderData = array(
        "recipient" => array(
            "name" => $customer_name,
            "address1" => $customer_address
        ),
        "items" => array(
            array(
                "variant_id" => $product_id,
                "quantity" => 1
            )
        )
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.printful.com/orders');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($orderData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer ' . $api_key,
        'Content-Type: application/json'
    ));
    $response = curl_exec($ch);
    curl_close($ch);

    header('Content-Type: application/json');
    echo $response;
    exit;
}
