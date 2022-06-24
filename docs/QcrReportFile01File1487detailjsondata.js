console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html" 
 , "texte" : "File storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java 25 rule violations " 
 , "fic2"  : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "RemoteLogMetadata"
 , "c2" : "org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RemoteLogSegmentMetadata"
 , "c2" : "RemoteLogSegmentMetadata(RemoteLogSegmentId;long;long;long;int;long;int;RemoteLogSegmentState;Map<Integer,Long>)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "RemoteLogSegmentMetadata"
 , "c2" : "RemoteLogSegmentMetadata(RemoteLogSegmentId;long;long;long;int;long;int;Map<Integer,Long>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RemoteLogSegmentId"
 , "c2" : "remoteLogSegmentId()"
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
   "c1" : "RemoteLogSegmentMetadata"
 , "c2" : "createWithUpdates(RemoteLogSegmentMetadataUpdate)"
 , "c3" : "2"
 , "c4" : "2"
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
   {"ligne" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.png" 

 , "ligneplantuml" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.svg" }

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
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "3"
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
   "c1" : "00049"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.RemoteLogSegmentMetadata@POLYN191987 the MagicNumber/String  'remoteLogSegmentId can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.RemoteLogSegmentMetadata@POLYN191987 the MagicNumber/String  'state can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.RemoteLogSegmentMetadata@POLYN191987 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.RemoteLogSegmentMetadata@POLYN191987 the MagicNumber/String  'segmentLeaderEpochs can not be null or empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method createWithUpdates arguments RemoteLogSegmentMetadataUpdate  rlsmUpdate"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#120"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00120] The argument rlsmUpdate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.createWithUpdates@POLYN195669 the MagicNumber/String  'Given rlsmUpdate does not have this instance's remoteLogSegmentId.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00140] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00149] The same method call that.eventTimestampMs()brokerId()that.brokerId() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00150] The same method call that.brokerId() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.equals@POLYN196378 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.equals@POLYN196378 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.equals@POLYN196378 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  'RemoteLogSegmentMetadata{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  'remoteLogSegmentId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  ', startOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  ', endOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  ', brokerId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  ', maxTimestampMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  ', eventTimestampMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  ', segmentLeaderEpochs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  ', segmentSizeInBytes=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  ', state=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogSegmentMetadata.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.server.log.remote.storage.RemoteLogSegmentMetadata.toString@POLYN197779 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
