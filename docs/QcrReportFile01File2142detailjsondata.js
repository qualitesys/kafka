console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java 10 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.fault.KiboshFaultWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.fault.KiboshFaultWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KiboshFaultWorker"
 , "c2" : "KiboshFaultWorker(String;KiboshFaultSpec;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "6"
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
   "c1" : "00014"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class KiboshFaultWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  errorFuture"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.start@POLYN164990 the MagicNumber/String  'Activating {} {}: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.start@POLYN164990 the MagicNumber/String  'Adding fault ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.start@POLYN164990 the MagicNumber/String  'Added fault ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.stop@POLYN165780 the MagicNumber/String  'Deactivating {} {}: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.stop@POLYN165780 the MagicNumber/String  'Removing fault ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/KiboshFaultWorker.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.trogdor.fault.KiboshFaultWorker.stop@POLYN165780 the MagicNumber/String  'Removed fault ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
