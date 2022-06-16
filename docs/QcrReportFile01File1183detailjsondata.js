console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java 10 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000015"
 , "c3" : "Javascript execution based risk"
 , "c4" : "2"
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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
   "c1" : "00028"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method start arguments Map&lt;String ,String &gt;  config"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000015[00040] Javascript setTimeout() risk"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.connect.tools.MockSinkTask.start@POLYN161460 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.tools.MockSinkTask.start@POLYN161460 the MagicNumber/String  'Started MockSinkTask at {} with failure scheduled in {} ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method put arguments Collection&lt;SinkRecord &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000015[00052] Javascript setTimeout() risk"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.tools.MockSinkTask.put@POLYN162354 the MagicNumber/String  'Triggering sink task failure' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method flush arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSinkTask.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.tools.MockSinkTask.setTimeout@POLYN163046 the MagicNumber/String  250 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
