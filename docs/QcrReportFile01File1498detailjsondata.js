console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java 13 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.xml" 
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
   "c1" : "00023"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument partitionDir is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00024] The same method call partitionDir.toFile() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache.FileBasedRemoteLogMetadataCache@POLYN168976 the MagicNumber/String  'Given partition directory:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache.FileBasedRemoteLogMetadataCache@POLYN168976 the MagicNumber/String  ' must be an existing directory.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method loadRemoteLogSegmentMetadata arguments RemoteLogMetadataSnapshotFile.Snapshot  snapshot"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache.loadRemoteLogSegmentMetadata@POLYN169788 the MagicNumber/String  'Loading snapshot for partition {} is: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.server.log.remote.metadata.storage.FileBasedRemoteLogMetadataCache.loadRemoteLogSegmentMetadata@POLYN169788 the MagicNumber/String  'Given remoteLogSegmentMetadata has invalid state: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method createRemoteLogSegmentMetadata arguments RemoteLogSegmentMetadataSnapshot  snapshot"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method flushToFile arguments int  metadataPartition|Long  metadataPartitionOffset"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/FileBasedRemoteLogMetadataCache.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
]
};
console.log('leListeStr 99 main end');
