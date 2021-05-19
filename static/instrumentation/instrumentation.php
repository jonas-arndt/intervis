<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// functions
function handleRequest($request) {
  $content = validateRequest($request);

  if ($content) {
    $logDir = './log/v1';
    $logFilePath = $logDir . '/log_' . $content['id'] . '.log';

    createLogDir($logDir);

    $fh = fopen($logFilePath, 'a');
    processRequestContent($fh, $content);
    fclose($fh);
  }
}

function validateRequest($request) {
  $content = [];
  $requiredRequestKeys = ['id', 'num', 'type', 'data'];
  foreach ($requiredRequestKeys as $key) {
    if (array_key_exists($key, $request)) {
      $content[$key] = $request[$key];
    } else {
      return false;
    }
  }
  return $content;
}

function createLogDir($dir) {
  if (!is_dir($dir)) {
    mkdir($dir, 0777, true);
  }
}

function processRequestContent($fh, $content) {
  switch ($content['type']) {

    // init
    case 10: {
      processInitReqestContent($fh, $content);
      break;
    }

    // stack
    case 20: {
      processStackReqestContent($fh, $content);
      break;
    }
  }
}

function processInitReqestContent($fh, $content) {
  $values = [
    'INIT',
    $content['id'],
    json_encode($content['data'])
  ];

  $message = implode(', ', $values);
  fwrite($fh, $message . "\n");
}

function processStackReqestContent($fh, $content) {
  $eventTypes = [
    10 => 'MOUSE',
    20 => 'RESIZE',
    30 => 'STEP',
    40 => 'PROGRESS',
    50 => 'SCROLL',
    60 => 'STATE',
    70 => 'LOCALE'
  ];

  foreach ($content['data'] as $event) {
    $values = [
      $event['timeOffset'],
      $eventTypes[$event['type']],
      json_encode($event['data'])
    ];

    $message = implode(', ', $values);
    fwrite($fh, $message . "\n");
  }

  $message = 'stack' . "\n";

  ob_start();
  var_dump($content);
  $message .= ob_get_clean();


}

// script
handleRequest(json_decode(file_get_contents("php://input"),true));
