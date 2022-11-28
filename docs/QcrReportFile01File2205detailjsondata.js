console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java 48 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.fault.ProcessStopFaultWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.fault.ProcessStopFaultWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#26"
 , "c1" : "ProcessStopFaultWorker"
 , "c2" : "ProcessStopFaultWorker(String;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#32"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#42"
 , "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#49"
 , "c1" : "void"
 , "c2" : "sendSignals(Platform;String)"
 , "c3" : "6"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.svg" }

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
"data11" : [
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
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class ProcessStopFaultWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  errorFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000 the MagicNumber/String  'Activating ProcessStopFault {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000 the MagicNumber/String  'stopping ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000 the MagicNumber/String  'SIGSTOP' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000 the MagicNumber/String  'stopped ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692 the MagicNumber/String  'Deactivating ProcessStopFault {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692 the MagicNumber/String  'resuming ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692 the MagicNumber/String  'SIGCONT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692 the MagicNumber/String  'resumed ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method sendSignals arguments Platform  platform|String  signalName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00049] For method sendSignals list of called methods Object monObjet|java.lang.String platform_runCommandN154365"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument platform is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00055] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  'jcmd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  'Failed to parse process ID from line' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  '{}: no processes containing {} found to send {} to.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  '{}: sending {} to {} pid(s) {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  'kill' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00035] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000 the MagicNumber/String 'Activating ProcessStopFault {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00036] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000 the MagicNumber/String 'stopping ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00037] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000 the MagicNumber/String 'SIGSTOP' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00038] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN153000 the MagicNumber/String 'stopped ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String 'jcmd' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String '\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String ' ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String 'Failed to parse process ID from line' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String '{}: no processes containing {} found to send {} to.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String '{}: sending {} to {} pid-s- {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN154235 the MagicNumber/String 'kill' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692 the MagicNumber/String 'Deactivating ProcessStopFault {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00044] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692 the MagicNumber/String 'resuming ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692 the MagicNumber/String 'SIGCONT' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN153692 the MagicNumber/String 'resumed ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
