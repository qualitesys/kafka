console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java 13 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RemoteLogMetadataCache"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#41"
 , "c1" : "FileBasedRemoteLogMetadataCache"
 , "c2" : "FileBasedRemoteLogMetadataCache(TopicIdPartition;Path)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#57"
 , "c1" : "void"
 , "c2" : "loadRemoteLogSegmentMetadata(RemoteLogMetadataSnapshotFile.Snapshot)"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#77"
 , "c1" : "RemoteLogSegmentMetadata"
 , "c2" : "createRemoteLogSegmentMetadata(RemoteLogSegmentMetadataSnapshot)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#91"
 , "c1" : "void"
 , "c2" : "flushToFile(int;Long)"
 , "c3" : "4"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
 , "c1" : "00042"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument partitionDir is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00043] The same method call partitionDir.toFile() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache.FileBasedRemoteLogMetadataCache@POLYN158828 the MagicNumber/String  'Given partition directory:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache.FileBasedRemoteLogMetadataCache@POLYN158828 the MagicNumber/String  ' must be an existing directory.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method loadRemoteLogSegmentMetadata arguments RemoteLogMetadataSnapshotFile.Snapshot  snapshot"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache.loadRemoteLogSegmentMetadata@POLYN159650 the MagicNumber/String  'Loading snapshot for partition {} is: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache.loadRemoteLogSegmentMetadata@POLYN159650 the MagicNumber/String  'Given remoteLogSegmentMetadata has invalid state: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method createRemoteLogSegmentMetadata arguments RemoteLogSegmentMetadataSnapshot  snapshot"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method flushToFile arguments int  metadataPartition|Long  metadataPartitionOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00097] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
