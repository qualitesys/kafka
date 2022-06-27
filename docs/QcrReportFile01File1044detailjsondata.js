console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java 33 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.cli.ConnectDistributed"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.cli.ConnectDistributed" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "2"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Connect"
 , "c2" : "startConnect(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "30"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.svg" }

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
 , "c4" : "13"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
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
   "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00035] The class ConnectDistributed contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String  '--help' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String  'Usage: ConnectDistributed worker.properties' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String  'Stopping due to error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method startConnect arguments Map&lt;String ,String &gt;  workerProps"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00068] For method startConnect list of called methods Object monObjet|String ConnectUtils_lookupKafkaClusterIdN183772|java.net.URI rest_advertisedUrlN184106|String advertisedUrl_getHostN184181|org.apache.kafka.connect.runtime.WorkerConfigTransformer worker_configTransformerN185252|org.apache.kafka.connect.storage.Converter worker_getInternalValueConverterN185327"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String  'Scanning for plugin classes. This might take a moment ...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String  'Kafka cluster ID: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String  'Kafka Connect distributed worker initialization took {}ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String  'Failed to start Connect' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String '--help' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00044] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String 'Usage: ConnectDistributed worker.properties' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String 'Stopping due to error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN181987 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String 'Scanning for plugin classes. This might take a moment ...' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String 'Kafka cluster ID: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String ':' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00115] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String 'Kafka Connect distributed worker initialization took {}ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String 'Failed to start Connect' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/cli/ConnectDistributed.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN183327 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
