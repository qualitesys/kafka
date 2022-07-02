console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java 42 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.connector.ConnectRecord"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.connector.ConnectRecord" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConnectRecord"
 , "c2" : "ConnectRecord(String;Integer;Schema;Object;Schema;Object;Long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectRecord"
 , "c2" : "ConnectRecord(String;Integer;Schema;Object;Schema;Object;Long;Iterable<Header>)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "topic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Integer"
 , "c2" : "kafkaPartition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "key()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Schema"
 , "c2" : "keySchema()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "value()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Schema"
 , "c2" : "valueSchema()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "timestamp()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Headers"
 , "c2" : "headers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "newRecord(String;Integer;Schema;Object;Schema;Object;Long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "newRecord(String;Integer;Schema;Object;Schema;Object;Long;Iterable<Header>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
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
 , "c4" : "35"
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
   "c1" : "00012"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class ConnectRecord contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method newRecord arguments String  topic|Integer  kafkaPartition|Schema  keySchema|Object  key|Schema  valueSchema|Object  value|Long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method newRecord arguments String  topic|Integer  kafkaPartition|Schema  keySchema|Object  key|Schema  valueSchema|Object  value|Long  timestamp|Iterable&lt;Header &gt;  headers"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  'ConnectRecord{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  'topic='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  ', kafkaPartition=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  ', key=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  ', keySchema=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  ', value=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  ', valueSchema=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  ', timestamp=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  ', headers=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.connect.connector.ConnectRecord.toString@POLYN193599 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00104] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.connector.ConnectRecord.equals@POLYN194117 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.connector.ConnectRecord.equals@POLYN194117 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.connector.ConnectRecord.equals@POLYN194117 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.connect.connector.ConnectRecord.hashCode@POLYN195307 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method newRecord is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/ConnectRecord.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00084] Public method newRecord is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
