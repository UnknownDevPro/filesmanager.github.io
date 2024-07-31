<?php
// Define the directory containing the website files
$siteDir = 'C:\Users\SICAR\Documents\GitHub\UnknownDevPro.github.io/'; // Adjust to the correct directory path

// Create a ZIP archive name with a timestamp
$timestamp = date('Ymd_His');
$zipFileName = 'backup_' . $timestamp . '.zip';
$zipFilePath = sys_get_temp_dir() . '/' . $zipFileName; // Use a temporary directory for the ZIP file

// Initialize ZIP archive
$zip = new ZipArchive();
if ($zip->open($zipFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== TRUE) {
    exit('Cannot open ' . $zipFilePath);
}

// Add files to the ZIP archive
$files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($siteDir));
foreach ($files as $file) {
    // Skip directories
    if (!$file->isDir()) {
        $filePath = $file->getRealPath();
        $relativePath = substr($filePath, strlen($siteDir));
        $zip->addFile($filePath, $relativePath);
    }
}

// Close the ZIP archive
$zip->close();

// Send the ZIP file to the browser for download
header('Content-Type: application/zip');
header('Content-Disposition: attachment; filename="' . $zipFileName . '"');
header('Content-Length: ' . filesize($zipFilePath));
readfile($zipFilePath);

// Optionally, delete the temporary file after sending
unlink($zipFilePath);
?>
