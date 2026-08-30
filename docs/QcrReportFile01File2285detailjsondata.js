console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "RecordProcessor"
 , "c2" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#62"
 , "c1" : "TimestampRecordProcessor"
 , "c2" : "TimestampRecordProcessor(int;int;int)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#74"
 , "c1" : "int"
 , "c2" : "histogramMaxMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#79"
 , "c1" : "int"
 , "c2" : "histogramMinMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#84"
 , "c1" : "int"
 , "c2" : "histogramStepMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#88"
 , "c1" : "void"
 , "c2" : "putHistogram(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#93"
 , "c1" : "void"
 , "c2" : "processRecords(ConsumerRecords&lt;byte[],byte[]&gt;)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#109"
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
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
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
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method putHistogram arguments long  latency"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.putHistogram@POLYN165352 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#93"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00093] Lock statement on synchronized method processRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method processRecords arguments ConsumerRecords&lt;byte[] ,byte[] &gt;  consumerRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN165634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN165634 the MagicNumber/String  'Error in processRecords:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processorStatus@POLYN166496 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processorStatus@POLYN166496 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processorStatus@POLYN166496 the MagicNumber/String  2 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampRecordProcessor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
