console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java 125 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.agent.WorkerManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.agent.WorkerManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#157"
 , "c1" : "WorkerManager"
 , "c2" : "WorkerManager(Platform;Scheduler)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00318"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#318"
 , "c1" : "KafkaFuture&lt;String&gt;"
 , "c2" : "createWorker(long;String;TaskSpec)"
 , "c3" : "8"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00527"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#527"
 , "c1" : "void"
 , "c2" : "stopWorker(long;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00616"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#616"
 , "c1" : "TreeMap&lt;Long,WorkerState&gt;"
 , "c2" : "workerStates()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00633"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#633"
 , "c1" : "void"
 , "c2" : "beginShutdown()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00639"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#639"
 , "c1" : "void"
 , "c2" : "waitForShutdown()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "17"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "96"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#121"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00121] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.Reference.close@POLYN246023 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.Reference.close@POLYN246023 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.Reference.close@POLYN246023 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#131"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00131] Lock statement on synchronized method takeReference"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.takeReference@POLYN246469 the MagicNumber/String  'WorkerManager is shut down.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#139"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00139] Lock statement on synchronized method shutdown"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.shutdown@POLYN246736 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.shutdown@POLYN246736 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.shutdown@POLYN246736 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.shutdown@POLYN246736 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#150"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00150] Lock statement on synchronized method waitForQuiescence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.agent.WorkerManager.ShutdownManager.waitForQuiescence@POLYN247085 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument platform is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument scheduler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN247334 the MagicNumber/String  'WorkerManagerStateThread' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN247334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN247334 the MagicNumber/String  'WorkerCleanupThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN247334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN247334 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN247334 the MagicNumber/String  'WorkerManagerShutdownThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.trogdor.agent.WorkerManager.WorkerManager@POLYN247334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#250"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00250] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.state@POLYN250792 the MagicNumber/String  'unreachable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToRunning@POLYN251736 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToRunning@POLYN251736 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToStopping@POLYN252187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToStopping@POLYN252187 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToStopping@POLYN252187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToDone@POLYN252602 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.transitionToDone@POLYN252602 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN253056 the MagicNumber/String  '%s_%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#318"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00318] For method createWorker arguments long  workerId|String  taskId|TaskSpec  spec"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#318"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00318] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  '{}: Ignoring request to create worker {}, because there is already ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  'a worker with that id.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  '{}: Will not run worker {} as it has expired.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  'worker expired' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  '{}: Worker {} is halting.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  '{}: Worker {} is halting with error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  '{}: Worker {} start() exception' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  'worker.start() exception: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00359"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  '{}: request conflict while creating worker {} for task {} with spec {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String  '{}: Error creating worker {} for task {} with spec {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN257409 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN257409 the MagicNumber/String  'There is already a worker ID ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN257409 the MagicNumber/String  ' with a different task ID.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN257409 the MagicNumber/String  'There is already a worker ID ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN257409 the MagicNumber/String  ' with a different task spec.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN257409 the MagicNumber/String  '{}: Created worker {} with spec {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.trogdor.agent.WorkerManager.CreateWorker.call@POLYN257409 the MagicNumber/String  '{}: unable to create worker {} for task {}, with spec {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00426"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.trogdor.agent.WorkerManager.FinishCreatingWorker.call@POLYN259179 the MagicNumber/String  '{}: Worker {} was cancelled while it was starting up.  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.trogdor.agent.WorkerManager.FinishCreatingWorker.call@POLYN259179 the MagicNumber/String  'Transitioning to STOPPING.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.trogdor.agent.WorkerManager.FinishCreatingWorker.call@POLYN259179 the MagicNumber/String  '{}: Worker {} is now RUNNING.  Scheduled to stop in {} ms.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00438"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.trogdor.agent.WorkerManager.FinishCreatingWorker.call@POLYN259179 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00461"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  'halting' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00462"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  'halting with error [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00462"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00466"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  '{}: Worker {} {} during startup.  Transitioning to DONE.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  '{}: Worker {} {} during startup.  Transitioning to CANCELLING.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00476"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  '{}: Cancelling worker {} {}.  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00480"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  '{}: Running worker {} {}.  Transitioning to STOPPING.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00485"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  '{}: Stopping worker {} {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00488"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  '{}: Can't halt worker {} because it is already DONE.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.trogdor.agent.WorkerManager.HandleWorkerHalting.call@POLYN260440 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.trogdor.agent.WorkerManager.CompleteWorker.call@POLYN262763 the MagicNumber/String  '{}: destroying worker {} with error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00520"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#520"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00520] In method org.apache.kafka.trogdor.agent.WorkerManager.CompleteWorker.call@POLYN262763 the MagicNumber/String  '{}: completed worker {} with error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00523"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00523] In method org.apache.kafka.trogdor.agent.WorkerManager.CompleteWorker.call@POLYN262763 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00527"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#527"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00527] For method stopWorker arguments long  workerId|boolean  mustDestroy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00550"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#550"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00550] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00551"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#551"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00551] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  '{}: Can't stop worker {} because there is no worker with that ID.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00553"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00556"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00560"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  '{}: Cancelling worker {} during its startup process.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00565"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  '{}: Can't stop worker {}, because it is already being ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00566"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  'cancelled.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00569"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00569] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  '{}: Stopping running worker {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00573"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#573"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00573] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  '{}: Can't stop worker {}, because it is already ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00574"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  'stopping.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00578"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00578] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  '{}: destroying worker {} with error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00582"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  '{}: Can't stop worker {}, because it is already done.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00587"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.trogdor.agent.WorkerManager.StopWorker.call@POLYN264446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00604"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method org.apache.kafka.trogdor.agent.WorkerManager.HaltWorker.call@POLYN266667 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00608"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00608] In method org.apache.kafka.trogdor.agent.WorkerManager.HaltWorker.call@POLYN266667 the MagicNumber/String  '{}: worker.stop() exception' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00612"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00612] In method org.apache.kafka.trogdor.agent.WorkerManager.HaltWorker.call@POLYN266667 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00641"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.trogdor.agent.WorkerManager.waitForShutdown@POLYN268427 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00648"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  '{}: Shutting down WorkerManager.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00651"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  '{}: Waiting for shutdownManager quiescence...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00655"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  '{}: Waiting for workerCleanupExecutor to terminate...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00656"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00657"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#657"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00657] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  '{}: Waiting for stateChangeExecutor to terminate...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00658"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#658"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00658] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00659"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#659"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00659] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  '{}: Shutting down shutdownExecutor.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00662"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00662] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  '{}: Caught exception while shutting down WorkerManager' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00665"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method org.apache.kafka.trogdor.agent.WorkerManager.Shutdown.call@POLYN268748 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00689"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#689"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00689] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.trogdor.agent.WorkerManager.DestroyAllWorkers.call@POLYN270209 the MagicNumber/String  '{}: Destroying all workers.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00688"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#688"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00688] In method org.apache.kafka.trogdor.agent.WorkerManager.DestroyAllWorkers.call@POLYN270209 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00690"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#690"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00690] In method org.apache.kafka.trogdor.agent.WorkerManager.DestroyAllWorkers.call@POLYN270209 the MagicNumber/String  'Failed to stop worker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00693"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#693"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00693] In method org.apache.kafka.trogdor.agent.WorkerManager.DestroyAllWorkers.call@POLYN270209 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00322] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00323] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String '{}: Ignoring request to create worker {}, because there is already ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String 'a worker with that id.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00329] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String '{}: Will not run worker {} as it has expired.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String 'worker expired' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00336] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00337] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00339] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String '{}: Worker {} is halting.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00341] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String '{}: Worker {} is halting with error {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#345"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00345] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00346] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00351] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String '{}: Worker {} start-- exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00353] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String 'worker.start-- exception: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00353] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00359"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00359] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String '{}: request conflict while creating worker {} for task {} with spec {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.html#362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00362] In the recursive method org.apache.kafka.trogdor.agent.WorkerManager.createWorker@POLYN253251 the MagicNumber/String '{}: Error creating worker {} for task {} with spec {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/WorkerManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
