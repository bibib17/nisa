<?php
// Always serve the latest compiled SPA index.html
if (file_exists(__DIR__ . '/index.html')) {
    include __DIR__ . '/index.html';
} elseif (file_exists(__DIR__ . '/dist/index.html')) {
    include __DIR__ . '/dist/index.html';
} else {
    echo "Web app is ready. Please refresh.";
}
?>
