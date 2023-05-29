console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java 9 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataTopicPartitioner"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataTopicPartitioner" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#30"
 , "c1" : "RemoteLogMetadataTopicPartitioner"
 , "c2" : "RemoteLogMetadataTopicPartitioner(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#34"
 , "c1" : "int"
 , "c2" : "metadataPartition(TopicIdPartition)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#42"
 , "c1" : "byte[]"
 , "c2" : "toBytes(TopicIdPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#51"
 , "c1" : "byte[]"
 , "c2" : "toBytes(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method metadataPartition arguments TopicIdPartition  topicIdPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataTopicPartitioner.metadataPartition@POLYN156071 the MagicNumber/String  'TopicPartition can not be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataTopicPartitioner.metadataPartition@POLYN156071 the MagicNumber/String  'No of partitions [{}], partitionNum: [{}] for given topic: [{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method toBytes arguments TopicIdPartition  topicIdPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument topicIdPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method toBytes arguments int  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataTopicPartitioner.toBytes@POLYN156992 the MagicNumber/String  24 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataTopicPartitioner.toBytes@POLYN156992 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataTopicPartitioner.toBytes@POLYN156992 the MagicNumber/String  8 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataTopicPartitioner.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
