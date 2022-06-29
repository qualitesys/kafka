console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java 36 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "RemotePartitionMetadataEventHandlerCloseable"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RemotePartitionMetadataStore"
 , "c2" : "RemotePartitionMetadataStore(Path)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleRemoteLogSegmentMetadata(RemoteLogSegmentMetadata)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Path"
 , "c2" : "partitionLogDirectory(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleRemoteLogSegmentMetadataUpdate(RemoteLogSegmentMetadataUpdate)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleRemotePartitionDeleteMetadata(RemotePartitionDeleteMetadata)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "syncLogMetadataSnapshot(TopicIdPartition;int;Long)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearTopicPartition(TopicIdPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<RemoteLogSegmentMetadata>"
 , "c2" : "listRemoteLogSegments(TopicIdPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<RemoteLogSegmentMetadata>"
 , "c2" : "listRemoteLogSegments(TopicIdPartition;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "FileBasedRemoteLogMetadataCache"
 , "c2" : "getRemoteLogMetadataCache(TopicIdPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Optional<RemoteLogSegmentMetadata>"
 , "c2" : "remoteLogSegmentMetadata(TopicIdPartition;long;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Long>"
 , "c2" : "highestLogOffset(TopicIdPartition;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeLoadPartition(TopicIdPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method handleRemoteLogSegmentMetadata arguments RemoteLogSegmentMetadata  remoteLogSegmentMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument remoteLogSegmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.handleRemoteLogSegmentMetadata@POLYN183849 the MagicNumber/String  'Adding remote log segment : [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.handleRemoteLogSegmentMetadata@POLYN183849 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.handleRemoteLogSegmentMetadata@POLYN183849 the MagicNumber/String  'No partition metadata found for : ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method partitionLogDirectory arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.partitionLogDirectory@POLYN184525 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method handleRemoteLogSegmentMetadataUpdate arguments RemoteLogSegmentMetadataUpdate  rlsmUpdate"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument rlsmUpdate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.handleRemoteLogSegmentMetadataUpdate@POLYN184825 the MagicNumber/String  'Updating remote log segment: [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.handleRemoteLogSegmentMetadataUpdate@POLYN184825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.handleRemoteLogSegmentMetadataUpdate@POLYN184825 the MagicNumber/String  'Error occurred while updating the remote log segment.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.handleRemoteLogSegmentMetadataUpdate@POLYN184825 the MagicNumber/String  'No partition metadata found for : ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method handleRemotePartitionDeleteMetadata arguments RemotePartitionDeleteMetadata  remotePartitionDeleteMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument remotePartitionDeleteMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.handleRemotePartitionDeleteMetadata@POLYN185665 the MagicNumber/String  'Received partition delete state with: [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method syncLogMetadataSnapshot arguments TopicIdPartition  topicIdPartition|int  metadataPartition|Long  metadataPartitionOffset"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.syncLogMetadataSnapshot@POLYN186249 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.syncLogMetadataSnapshot@POLYN186249 the MagicNumber/String  'Skipping syncing of metadata snapshot as remote partition [{}] is with state: [{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.syncLogMetadataSnapshot@POLYN186249 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method clearTopicPartition arguments TopicIdPartition  topicIdPartition"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method listRemoteLogSegments arguments TopicIdPartition  topicIdPartition"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.listRemoteLogSegments@POLYN187120 the MagicNumber/String  'topicIdPartition can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method listRemoteLogSegments arguments TopicIdPartition  topicIdPartition|int  leaderEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.listRemoteLogSegments@POLYN187407 the MagicNumber/String  'topicIdPartition can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method getRemoteLogMetadataCache arguments TopicIdPartition  topicIdPartition"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.getRemoteLogMetadataCache@POLYN187717 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.getRemoteLogMetadataCache@POLYN187717 the MagicNumber/String  'No resource found for partition: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method remoteLogSegmentMetadata arguments TopicIdPartition  topicIdPartition|long  offset|int  epochForOffset"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.remoteLogSegmentMetadata@POLYN188123 the MagicNumber/String  'topicIdPartition can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method highestLogOffset arguments TopicIdPartition  topicIdPartition|int  leaderEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.highestLogOffset@POLYN188501 the MagicNumber/String  'topicIdPartition can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00157] For method close list of called methods Object monObjet|boolean Collections_emptyMapN189046"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.server.log.remote.metadata.storage.RemotePartitionMetadataStore.close@POLYN188817 the MagicNumber/String  'Clearing the entries from the store.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemotePartitionMetadataStore.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method maybeLoadPartition arguments TopicIdPartition  partition"
}} 
]
};
console.log('leListeStr 99 main end');
