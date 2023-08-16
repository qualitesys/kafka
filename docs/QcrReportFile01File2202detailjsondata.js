console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java 9 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.fault.KiboshFaultWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.fault.KiboshFaultWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#40"
 , "c1" : "KiboshFaultWorker"
 , "c2" : "KiboshFaultWorker(String;KiboshFaultSpec;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#47"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#57"
 , "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.svg" }

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
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  errorFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.start@POLYN158680 the MagicNumber/String  'Activating {} {}: {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.start@POLYN158680 the MagicNumber/String  'Adding fault ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.start@POLYN158680 the MagicNumber/String  'Added fault ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.stop@POLYN159470 the MagicNumber/String  'Deactivating {} {}: {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.stop@POLYN159470 the MagicNumber/String  'Removing fault ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.stop@POLYN159470 the MagicNumber/String  'Removed fault ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
