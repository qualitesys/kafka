console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java 27 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SinkTask"
 , "c2" : ""
 , "c2" : "org.apache.kafka.connect.tools.VerifiableSinkTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.tools.VerifiableSinkTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#51"
 , "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#56"
 , "c1" : "void"
 , "c2" : "start(Map&lt;String,String&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#66"
 , "c1" : "void"
 , "c2" : "put(Collection&lt;SinkRecord&gt;)"
 , "c3" : "2"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#92"
 , "c1" : "void"
 , "c2" : "flush(Map&lt;TopicPartition,OffsetAndMetadata&gt;)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00114"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#114"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
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
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.tools.VerifiableSinkTask.start@POLYN160518 the MagicNumber/String  'Invalid VerifiableSourceTask configuration' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method put arguments Collection&lt;SinkRecord &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN161020 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN161020 the MagicNumber/String  'task' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN161020 the MagicNumber/String  'sinkTask' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN161020 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN161020 the MagicNumber/String  'time_ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN161020 the MagicNumber/String  'seqno' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN161020 the MagicNumber/String  'offset' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.tools.VerifiableSinkTask.put@POLYN161020 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method flush arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00098] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.tools.VerifiableSinkTask.flush@POLYN162796 the MagicNumber/String  'time_ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.connect.tools.VerifiableSinkTask.flush@POLYN162796 the MagicNumber/String  'flushed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.connect.tools.VerifiableSinkTask.flush@POLYN162796 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.tools.VerifiableSinkTask.flush@POLYN162796 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00114] Valued method stop is empty or contains only a return."
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/VerifiableSinkTask.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
