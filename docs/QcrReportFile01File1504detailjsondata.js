console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java 19 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "RemoteLogMetadata"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RemoteLogSegmentMetadataSnapshot"
 , "c2" : "RemoteLogSegmentMetadataSnapshot(Uuid;long;long;long;int;long;int;RemoteLogSegmentState;Map<Integer,Long>)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "RemoteLogSegmentMetadataSnapshot"
 , "c2" : "create(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Uuid"
 , "c2" : "segmentId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "startOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "endOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "segmentSizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "maxTimestampMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "NavigableMap<Integer,Long>"
 , "c2" : "segmentLeaderEpochs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RemoteLogSegmentState"
 , "c2" : "state()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicIdPartition"
 , "c2" : "topicIdPartition()"
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
 , "c4" : "1"
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
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "16"
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
   "c1" : "00051"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.RemoteLogSegmentMetadataSnapshot@POLYN189178 the MagicNumber/String  'remoteLogSegmentId can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.RemoteLogSegmentMetadataSnapshot@POLYN189178 the MagicNumber/String  'state can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.RemoteLogSegmentMetadataSnapshot@POLYN189178 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.RemoteLogSegmentMetadataSnapshot@POLYN189178 the MagicNumber/String  'segmentLeaderEpochs can not be null or empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method create arguments RemoteLogSegmentMetadata  metadata"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.topicIdPartition@POLYN192131 the MagicNumber/String  'This metadata does not have topic partition with it.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.equals@POLYN192271 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.equals@POLYN192271 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  'RemoteLogSegmentMetadataSnapshot{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  'segmentId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  ', startOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  ', endOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  ', maxTimestampMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  ', segmentLeaderEpochs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  ', segmentSizeInBytes=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  ', state=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogSegmentMetadataSnapshot.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogSegmentMetadataSnapshot.toString@POLYN193363 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
