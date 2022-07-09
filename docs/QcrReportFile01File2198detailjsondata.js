console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java 111 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.workload.ExternalCommandWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.ExternalCommandWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ExternalCommandWorker"
 , "c2" : "ExternalCommandWorker(String;ExternalCommandSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "2"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "Process"
 , "c2" : "startProcess()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "JsonNode"
 , "c2" : "readObject(String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "3"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.svg" }

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
 , "c2" : "QC-JAV999995"
 , "c3" : "Recursivity with depth over 1 between method xx and method yy"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "64"
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
   "c1" : "00034"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00034] The class ExternalCommandWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument doneFuture is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00092] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  'ConsumeBenchWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  '{}: Activating ExternalCommandWorker with {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  'ExternalCommandWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  '{}: Unable to start process' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  'Unable to start process: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  'id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String  'workload' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.startProcess@POLYN205824 the MagicNumber/String  'No command specified' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method readObject arguments String  line"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00124] The class StdoutMonitor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00145] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  '{}: starting stdout monitor.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  'EOF' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  '{}: can't read any more from stdout: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  '{}: read line from stdin: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  'status' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  '{}: New status: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  'status' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  'status' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  'log' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  '{}: (stdout): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  'log' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  'error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  'error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  '{}: error: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN206838 the MagicNumber/String  '{}: error reading from stdout.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00168] The class StderrMonitor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00187] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00189] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN209342 the MagicNumber/String  '{}: starting stderr monitor.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN209342 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN209342 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN209342 the MagicNumber/String  'EOF' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN209342 the MagicNumber/String  '{}: can't read any more from stderr: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN209342 the MagicNumber/String  '{}: (stderr):{}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN209342 the MagicNumber/String  '{}: error reading from stderr.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00199] The class StdinWriter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00213] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00218] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN210709 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN210709 the MagicNumber/String  '{}: stdin writer ready.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN210709 the MagicNumber/String  '{}: StdinWriter terminating.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN210709 the MagicNumber/String  '{}: writing to stdin: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN210709 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN210709 the MagicNumber/String  '{}: can't write any more to stdin: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN210709 the MagicNumber/String  '{}: error writing to stdin.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN210709 the MagicNumber/String  '{}: error closing stdinWriter: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00237] The class ExitMonitor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN213055 the MagicNumber/String  '{}: process exited with return code {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN213055 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN213055 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN213055 the MagicNumber/String  'exited with return code ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN213055 the MagicNumber/String  '{}: ExitMonitor error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN213055 the MagicNumber/String  'ExitMonitor error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00282] The class Terminator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN214498 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN214498 the MagicNumber/String  '{}: destroying process' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN214498 the MagicNumber/String  '{}: forcibly destroying process' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN214498 the MagicNumber/String  '{}: closing Terminator thread.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN214498 the MagicNumber/String  '{}: Terminator error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN214498 the MagicNumber/String  'Terminator error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#319"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00319] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String  'ExternalCommandWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String  '{}: Deactivating ExternalCommandWorker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.trogdor.workload.ExternalCommandWorker.startProcess@POLYN205824 ending with method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.trogdor.workload.ExternalCommandWorker.startProcess@POLYN205824"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 ending with method org.apache.kafka.trogdor.workload.ExternalCommandWorker.startProcess@POLYN205824"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.trogdor.workload.ExternalCommandWorker.startProcess@POLYN205824"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00077] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00077] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00078] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String 'ConsumeBenchWorker is already running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String '{}: Activating ExternalCommandWorker with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String 'ExternalCommandWorkerThread%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String '{}: Unable to start process' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String 'Unable to start process: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String 'id' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN203385 the MagicNumber/String 'workload' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.startProcess@POLYN205824 the MagicNumber/String 'No command specified' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00320] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00320] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String 'ExternalCommandWorker is not running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00323] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String '{}: Deactivating ExternalCommandWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00329] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00332] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00333] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN215800 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
