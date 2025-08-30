console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java 98 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.workload.ExternalCommandWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.ExternalCommandWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00130"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#130"
 , "c1" : "ExternalCommandWorker"
 , "c2" : "ExternalCommandWorker(String;ExternalCommandSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#136"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl&lt;String&gt;)"
 , "c3" : "2"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00166"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#166"
 , "c1" : "Process"
 , "c2" : "startProcess()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00175"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#175"
 , "c1" : "JsonNode"
 , "c2" : "readObject(String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00382"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#382"
 , "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "3"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.svg" }

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
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "64"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument doneFuture is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00153] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  'ConsumeBenchWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  '{}: Activating ExternalCommandWorker with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  'ExternalCommandWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  '{}: Unable to start process' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  'Unable to start process: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  'id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String  'workload' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.startProcess@POLYN217924 the MagicNumber/String  'No command specified' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method readObject arguments String  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00204] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00209] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00218] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00206] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  '{}: starting stdout monitor.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  'EOF' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  '{}: can't read any more from stdout: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  '{}: read line from stdin: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  'status' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  '{}: New status: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  'status' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  'status' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  'log' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  '{}: (stdout): {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  'log' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  'error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  'error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  '{}: error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN218944 the MagicNumber/String  '{}: error reading from stdout.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00248] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00250] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN221454 the MagicNumber/String  '{}: starting stderr monitor.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN221454 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN221454 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN221454 the MagicNumber/String  'EOF' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN221454 the MagicNumber/String  '{}: can't read any more from stderr: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN221454 the MagicNumber/String  '{}: (stderr):{}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StderrMonitor.run@POLYN221454 the MagicNumber/String  '{}: error reading from stderr.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00274] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00279] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN222823 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN222823 the MagicNumber/String  '{}: stdin writer ready.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN222823 the MagicNumber/String  '{}: StdinWriter terminating.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN222823 the MagicNumber/String  '{}: writing to stdin: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN222823 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN222823 the MagicNumber/String  '{}: can't write any more to stdin: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN222823 the MagicNumber/String  '{}: error writing to stdin.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdinWriter.run@POLYN222823 the MagicNumber/String  '{}: error closing stdinWriter: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN225175 the MagicNumber/String  '{}: process exited with return code {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN225175 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN225175 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN225175 the MagicNumber/String  'exited with return code ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN225175 the MagicNumber/String  '{}: ExitMonitor error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.ExitMonitor.run@POLYN225175 the MagicNumber/String  'ExitMonitor error: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN226620 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN226620 the MagicNumber/String  '{}: destroying process' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN226620 the MagicNumber/String  '{}: forcibly destroying process' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN226620 the MagicNumber/String  '{}: closing Terminator thread.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00375"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN226620 the MagicNumber/String  '{}: Terminator error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.Terminator.run@POLYN226620 the MagicNumber/String  'Terminator error: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#382"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00382] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String  'ExternalCommandWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String  '{}: Deactivating ExternalCommandWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String 'ConsumeBenchWorker is already running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String '{}: Activating ExternalCommandWorker with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String 'ExternalCommandWorkerThread%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00150] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String '{}: Unable to start process' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String 'Unable to start process: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String 'id' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.start@POLYN215475 the MagicNumber/String 'workload' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00383] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00383] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String 'ExternalCommandWorker is not running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00386] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String '{}: Deactivating ExternalCommandWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00392] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00394] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00395] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.html#396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00396] In the recursive method org.apache.kafka.trogdor.workload.ExternalCommandWorker.stop@POLYN227924 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ExternalCommandWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
