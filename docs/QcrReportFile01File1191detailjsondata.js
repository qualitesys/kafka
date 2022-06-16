console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java 26 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.xml" 
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
 , "c4" : "8"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.connect.tools.VerifiableSinkTask.start@POLYN170332 the MagicNumber/String  'Invalid VerifiableSourceTask configuration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method put arguments Collection&lt;SinkRecord &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00049] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00057] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00060] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN170834 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN170834 the MagicNumber/String  'task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN170834 the MagicNumber/String  'sinkTask' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN170834 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN170834 the MagicNumber/String  'time_ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN170834 the MagicNumber/String  'seqno' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN170834 the MagicNumber/String  'offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN170834 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method flush arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.tools.VerifiableSinkTask.flush@POLYN172594 the MagicNumber/String  'time_ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.tools.VerifiableSinkTask.flush@POLYN172594 the MagicNumber/String  'flushed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.tools.VerifiableSinkTask.flush@POLYN172594 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.connect.tools.VerifiableSinkTask.flush@POLYN172594 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
