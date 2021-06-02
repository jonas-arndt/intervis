<?php

// config
$logDir = 'log/v1';


// functions
function getResults($logDir) {
  $results = [];

  $files = scandir($logDir);
  foreach ($files as $filename) {
    $matches = null;
    $returnValue = preg_match('/log_([0-9]+)\\.log/', $filename, $matches);

    if ($matches) {
      $results[] = $matches[1];
    }
  }

  return $results;
}

function getDetails($filepath) {
  $details = [];
  $details['log'] = [];

  $handle = @fopen($filepath, "r");
  if ($handle) {
    while (($buffer = fgets($handle, 4096)) !== false) {
      $data = explode(', ', $buffer);

      if ($data[0] === 'INIT') {

        // If previous init event exists
        if (isset($details['timestamp'])) {
          return [];
        }

        $details['timestamp'] = $data[1];
        $details['initial_settings'] = json_decode($data[2]);        

      } else {
        $entry = [];
        $entry['t_offset'] = $data[0];
        $entry['type'] = $data[1];
        $entry['value'] = json_decode($data[2]);

        $details['log'][] = $entry;
      }
    }
    fclose($handle);
  }

  return $details;
}

function handleRequest($args, $logDir) {
  if (isset($args['id'])) {
    $filename = 'log_' . $args['id'] . '.log';
    return getDetails("$logDir/$filename");
  }

  return getResults($logDir);
}

// script
print(json_encode(handleRequest($_REQUEST, 'log/v1')));
