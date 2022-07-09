console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java 20 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ConnectRecord<SinkRecord>"
 , "c2" : "org.apache.kafka.connect.sink.SinkRecord"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.sink.SinkRecord" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SinkRecord"
 , "c2" : "SinkRecord(String;int;Schema;Object;Schema;Object;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SinkRecord"
 , "c2" : "SinkRecord(String;int;Schema;Object;Schema;Object;long;Long;TimestampType)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SinkRecord"
 , "c2" : "SinkRecord(String;int;Schema;Object;Schema;Object;long;Long;TimestampType;Iterable<Header>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "kafkaOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TimestampType"
 , "c2" : "timestampType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SinkRecord"
 , "c2" : "newRecord(String;Integer;Schema;Object;Schema;Object;Long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SinkRecord"
 , "c2" : "newRecord(String;Integer;Schema;Object;Schema;Object;Long;Iterable<Header>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.svg" }

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
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
   "c1" : "00015"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method org.apache.kafka.connect.sink.SinkRecord.SinkRecord@POLYN155881 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.connect.sink.SinkRecord.SinkRecord@POLYN156334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method newRecord arguments String  topic|Integer  kafkaPartition|Schema  keySchema|Object  key|Schema  valueSchema|Object  value|Long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method newRecord arguments String  topic|Integer  kafkaPartition|Schema  keySchema|Object  key|Schema  valueSchema|Object  value|Long  timestamp|Iterable&lt;Header &gt;  headers"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00053] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.sink.SinkRecord.equals@POLYN158752 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.sink.SinkRecord.equals@POLYN158752 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.sink.SinkRecord.equals@POLYN158752 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.sink.SinkRecord.equals@POLYN158752 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.sink.SinkRecord.equals@POLYN158752 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.sink.SinkRecord.hashCode@POLYN159450 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.sink.SinkRecord.hashCode@POLYN159450 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.sink.SinkRecord.toString@POLYN159882 the MagicNumber/String  'SinkRecord{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.sink.SinkRecord.toString@POLYN159882 the MagicNumber/String  'kafkaOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.sink.SinkRecord.toString@POLYN159882 the MagicNumber/String  ', timestampType=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.sink.SinkRecord.toString@POLYN159882 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.sink.SinkRecord.hashCode@POLYN159450"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.connect.sink.SinkRecord.hashCode@POLYN159450 the MagicNumber/String 31 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkRecord.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.connect.sink.SinkRecord.hashCode@POLYN159450 the MagicNumber/String 31 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
