console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java 38 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#44"
 , "c1" : "NetworkPartitionFaultWorker"
 , "c2" : "NetworkPartitionFaultWorker(String;List&lt;Set&lt;String&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#50"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#60"
 , "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c1" : "void"
 , "c2" : "runIptablesCommands(Platform;String)"
 , "c3" : "5"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.svg" }

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
 , "c4" : "8"
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
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
 , "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  errorFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881 the MagicNumber/String  'Activating NetworkPartitionFault {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881 the MagicNumber/String  'creating network partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881 the MagicNumber/String  '-A' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881 the MagicNumber/String  'created network partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573 the MagicNumber/String  'Deactivating NetworkPartitionFault {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573 the MagicNumber/String  'removing network partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573 the MagicNumber/String  '-D' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573 the MagicNumber/String  'removed network partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method runIptablesCommands arguments Platform  platform|String  iptablesAction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00067] For method runIptablesCommands list of called methods Object monObjet|org.apache.kafka.trogdor.common.Node platform_curNodeN164248|org.apache.kafka.trogdor.common.Topology platform_topologyN164325|org.apache.kafka.trogdor.common.Node topology_nodeN164949"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument platform is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00073] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  'sudo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  'iptables' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  'INPUT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  '-p' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  'tcp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  '-s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  '-j' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  'DROP' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  '-m' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  'comment' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN164116 the MagicNumber/String  '--comment' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881 the MagicNumber/String 'Activating NetworkPartitionFault {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00054] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881 the MagicNumber/String 'creating network partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881 the MagicNumber/String '-A' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN162881 the MagicNumber/String 'created network partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573 the MagicNumber/String 'Deactivating NetworkPartitionFault {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573 the MagicNumber/String 'removing network partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573 the MagicNumber/String '-D' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN163573 the MagicNumber/String 'removed network partition ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
