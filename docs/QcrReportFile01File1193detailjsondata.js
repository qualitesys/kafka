console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java 39 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SourceTask"
 , "c2" : "org.apache.kafka.connect.tools.VerifiableSourceTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.tools.VerifiableSourceTask" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Map<String,String>)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "List<SourceRecord>"
 , "c2" : "poll()"
 , "c3" : "2"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitRecord(SourceRecord;RecordMetadata)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.svg" }

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
 , "c4" : "14"
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
 , "c4" : "2"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.tools.VerifiableSourceTask.start@POLYN181133 the MagicNumber/String  'Invalid VerifiableSourceTask configuration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.tools.VerifiableSourceTask.start@POLYN181133 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.tools.VerifiableSourceTask.start@POLYN181133 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.tools.VerifiableSourceTask.start@POLYN181133 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.tools.VerifiableSourceTask.start@POLYN181133 the MagicNumber/String  'Started VerifiableSourceTask {}-{} producing to topic {} resuming from seqno {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String  'task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String  'time_ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String  'seqno' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method commitRecord arguments SourceRecord  record|RecordMetadata  metadata"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String  'task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String  'time_ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String  'seqno' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String  'committed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String 'name' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String 'task' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String 'topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String 'time_ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String 'seqno' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String 'committed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00114] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.commitRecord@POLYN184729 the MagicNumber/String 'Bad data can't be written as json: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String 'name' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String 'task' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String 'topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String 'time_ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String 'seqno' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSourceTask.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.connect.tools.VerifiableSourceTask.poll@POLYN182799 the MagicNumber/String 'Bad data can't be written as json: ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
