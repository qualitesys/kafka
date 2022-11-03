console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.AlterConsumerGroupOffsetsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.AlterConsumerGroupOffsetsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#20"
 , "c1" : "AlterConsumerGroupOffsetsResult"
 , "c2" : "AlterConsumerGroupOffsetsResult(KafkaFuture<Map<TopicPartition,Errors>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#25"
 , "c1" : "KafkaFuture<Void>"
 , "c2" : "partitionResult(TopicPartition)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#48"
 , "c1" : "KafkaFuture<Void>"
 , "c2" : "all()"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class AlterConsumerGroupOffsetsResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method partitionResult arguments TopicPartition  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.clients.admin.AlterConsumerGroupOffsetsResult.partitionResult@POLYN151797 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.clients.admin.AlterConsumerGroupOffsetsResult.partitionResult@POLYN151797 the MagicNumber/String  'Alter offset for partition \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.clients.admin.AlterConsumerGroupOffsetsResult.partitionResult@POLYN151797 the MagicNumber/String  '\' was not attempted' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.clients.admin.AlterConsumerGroupOffsetsResult.partitionResult@POLYN151797 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.admin.AlterConsumerGroupOffsetsResult.all@POLYN152993 the MagicNumber/String  'Failed altering consumer group offsets for the following partitions: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.AlterConsumerGroupOffsetsResult.all@POLYN152993 the MagicNumber/String  null should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/AlterConsumerGroupOffsetsResult.java.svg" }

};
console.log('leListeStr 99 main end');
