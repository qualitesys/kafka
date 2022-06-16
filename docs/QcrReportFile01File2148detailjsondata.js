console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java 26 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class ProcessStopFaultWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  errorFuture"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN165208 the MagicNumber/String  'Activating ProcessStopFault {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN165208 the MagicNumber/String  'stopping ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN165208 the MagicNumber/String  'SIGSTOP' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.start@POLYN165208 the MagicNumber/String  'stopped ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN165900 the MagicNumber/String  'Deactivating ProcessStopFault {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN165900 the MagicNumber/String  'resuming ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN165900 the MagicNumber/String  'SIGCONT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.stop@POLYN165900 the MagicNumber/String  'resumed ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method sendSignals arguments Platform  platform|String  signalName"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument platform is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00055] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  'jcmd' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  'Failed to parse process ID from line' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  '{}: no processes containing {} found to send {} to.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  '{}: sending {} to {} pid(s) {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  'kill' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/ProcessStopFaultWorker.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.trogdor.fault.ProcessStopFaultWorker.sendSignals@POLYN166443 the MagicNumber/String  '-' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
