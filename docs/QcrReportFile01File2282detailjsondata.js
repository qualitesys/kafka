console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java 16 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RecordProcessor"
 , "c2" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#33"
 , "c1" : "TimestampRecordProcessor"
 , "c2" : "TimestampRecordProcessor(int;int;int)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#45"
 , "c1" : "int"
 , "c2" : "histogramMaxMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#50"
 , "c1" : "int"
 , "c2" : "histogramMinMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#55"
 , "c1" : "int"
 , "c2" : "histogramStepMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#59"
 , "c1" : "void"
 , "c2" : "putHistogram(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#64"
 , "c1" : "void"
 , "c2" : "processRecords(ConsumerRecords<byte[],byte[]>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#80"
 , "c1" : "JsonNode"
 , "c2" : "processorStatus()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224.consumerRecords" }
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class TimestampRecordProcessor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method putHistogram arguments long  latency"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.putHistogram@POLYN162942 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#64"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00064] Lock statement on synchronized method processRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method processRecords arguments ConsumerRecords&lt;byte[] ,byte[] &gt;  consumerRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00064] For method processRecords list of called methods Object monObjet|long Time_SYSTEM_millisecondsN163366"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00073] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224 the MagicNumber/String  'Error in processRecords:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processorStatus@POLYN164084 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processorStatus@POLYN164084 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processorStatus@POLYN164084 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00090] The class StatusData contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224 the MagicNumber/String 'Error in processRecords:' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
