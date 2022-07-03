console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java 51 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NetworkPartitionFaultWorker"
 , "c2" : "NetworkPartitionFaultWorker(String;List<Set<String>>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "runIptablesCommands(Platform;String)"
 , "c3" : "5"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class NetworkPartitionFaultWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  errorFuture"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343 the MagicNumber/String  'Activating NetworkPartitionFault {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343 the MagicNumber/String  'creating network partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343 the MagicNumber/String  '-A' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343 the MagicNumber/String  'created network partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035 the MagicNumber/String  'Deactivating NetworkPartitionFault {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035 the MagicNumber/String  'removing network partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035 the MagicNumber/String  '-D' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035 the MagicNumber/String  'removed network partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method runIptablesCommands arguments Platform  platform|String  iptablesAction"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00052] For method runIptablesCommands list of called methods Object monObjet|org.apache.kafka.trogdor.common.Node platform_curNodeN175708|org.apache.kafka.trogdor.common.Topology platform_topologyN175783|org.apache.kafka.trogdor.common.Node topology_nodeN176403"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument platform is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  'sudo' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  'iptables' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  'INPUT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  '-p' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  'tcp' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  '-s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  '-j' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  'DROP' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  '-m' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  'comment' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String  '--comment' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String '-p' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String '-s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String 'INPUT' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String 'iptables' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String 'sudo' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String 'tcp' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String '--comment' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String '-j' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String '-m' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String 'DROP' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.runIptablesCommands@POLYN175578 the MagicNumber/String 'comment' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00037] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343 the MagicNumber/String 'Activating NetworkPartitionFault {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00039] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343 the MagicNumber/String 'creating network partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343 the MagicNumber/String '-A' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00041] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.start@POLYN174343 the MagicNumber/String 'created network partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035 the MagicNumber/String 'Deactivating NetworkPartitionFault {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035 the MagicNumber/String 'removing network partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00048] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035 the MagicNumber/String '-D' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultWorker.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultWorker.stop@POLYN175035 the MagicNumber/String 'removed network partition ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
