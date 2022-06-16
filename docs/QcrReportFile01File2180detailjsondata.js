console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java 8 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.xml" 
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
 , "c4" : "4"
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
   "c1" : "00011"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class NoOpTaskWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  errorFuture"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.trogdor.task.NoOpTaskWorker.start@POLYN157057 the MagicNumber/String  '{}: Activating NoOpTask.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.trogdor.task.NoOpTaskWorker.start@POLYN157057 the MagicNumber/String  'active' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.trogdor.task.NoOpTaskWorker.stop@POLYN157497 the MagicNumber/String  '{}: Deactivating NoOpTask.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.trogdor.task.NoOpTaskWorker.stop@POLYN157497 the MagicNumber/String  'done' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
