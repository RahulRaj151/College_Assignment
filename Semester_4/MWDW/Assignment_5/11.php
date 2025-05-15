<?php
// Display heading
echo "Multiplication Table (1 to 10)\n\n";

// Outer loop for rows (1 to 10)
for ($i = 1; $i <= 10; $i++) {
    
    // Inner loop for columns (1 to 10)
    for ($j = 1; $j <= 10; $j++) {
        $product = $i * $j;
        // Print the product with padding for alignment
        echo str_pad($product, 4, " ", STR_PAD_LEFT);
    }
    
    // Move to the next line after each row
    echo "\n";
}
?>
