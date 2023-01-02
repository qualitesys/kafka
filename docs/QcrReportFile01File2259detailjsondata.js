console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java 7 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.xml" 
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
 , "c5" : "00071"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#71"
 , "c1" : "GaussianFlushGenerator"
 , "c2" : "GaussianFlushGenerator(int;double)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#79"
 , "c1" : "int"
 , "c2" : "messagesPerFlushAverage()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#84"
 , "c1" : "double"
 , "c2" : "messagesPerFlushDeviation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#88"
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
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.svg" }

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
 , "c1" : "00088"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#88"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00088] Lock statement on synchronized method calculateFlushSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.trogdor.workload.GaussianFlushGenerator.calculateFlushSize@POLYN156151 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.trogdor.workload.GaussianFlushGenerator.calculateFlushSize@POLYN156151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#94"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00094] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument producer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00102] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.trogdor.workload.GaussianFlushGenerator the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianFlushGenerator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
