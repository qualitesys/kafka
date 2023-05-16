console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "FlushGenerator"
 , "c2" : "org.apache.kafka.trogdor.workload.GaussianFlushGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.GaussianFlushGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#63"
 , "c1" : "GaussianFlushGenerator"
 , "c2" : "GaussianFlushGenerator(int;double)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#71"
 , "c1" : "int"
 , "c2" : "messagesPerFlushAverage()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#76"
 , "c1" : "double"
 , "c2" : "messagesPerFlushDeviation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#80"
 , "c1" : "void"
 , "c2" : "calculateFlushSize()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#80"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00080] Lock statement on synchronized method calculateFlushSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.trogdor.workload.GaussianFlushGenerator.calculateFlushSize@POLYN159903 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.workload.GaussianFlushGenerator.calculateFlushSize@POLYN159903 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#86"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00086] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument producer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00094] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.trogdor.workload.GaussianFlushGenerator the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
