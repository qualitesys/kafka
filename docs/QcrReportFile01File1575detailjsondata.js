console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java 6 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RemoteLogMetadataTransform<RemotePartitionDeleteMetadata>"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemotePartitionDeleteMetadataTransform"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemotePartitionDeleteMetadataTransform" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#29"
 , "c1" : "ApiMessageAndVersion"
 , "c2" : "toApiMessageAndVersion(RemotePartitionDeleteMetadata)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#38"
 , "c1" : "RemotePartitionDeleteMetadataRecord.TopicIdPartitionEntry"
 , "c2" : "createTopicIdPartitionEntry(TopicIdPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#45"
 , "c1" : "RemotePartitionDeleteMetadata"
 , "c2" : "fromApiMessageAndVersion(ApiMessageAndVersion)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.svg" }

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
 , "c4" : "3"
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
 , "c1" : "00029"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method toApiMessageAndVersion arguments RemotePartitionDeleteMetadata  partitionDeleteMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument partitionDeleteMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method createTopicIdPartitionEntry arguments TopicIdPartition  topicIdPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument topicIdPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method fromApiMessageAndVersion arguments ApiMessageAndVersion  apiMessageAndVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument apiMessageAndVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemotePartitionDeleteMetadataTransform.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
