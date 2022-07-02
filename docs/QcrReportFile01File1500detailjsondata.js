console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java 18 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Iterator<RemoteLogSegmentMetadata>"
 , "c2" : "listAllRemoteLogSegments(Map<RemoteLogSegmentId,RemoteLogSegmentMetadata>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "collectConvertedIdToMetadata(Collection<RemoteLogSegmentId>;Map<RemoteLogSegmentId,RemoteLogSegmentMetadata>;Collection<RemoteLogSegmentMetadata>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSegmentWithCopySegmentStartedState(RemoteLogSegmentId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSegmentWithCopySegmentFinishedState(Long;RemoteLogSegmentId;Long)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSegmentWithDeleteSegmentStartedState(Long;RemoteLogSegmentId)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSegmentWithDeleteSegmentFinishedState(RemoteLogSegmentId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "highestLogOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RemoteLogSegmentId"
 , "c2" : "floorEntry(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Collection<RemoteLogSegmentId>"
 , "c2" : "unreferencedSegmentIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<RemoteLogSegmentId>"
 , "c2" : "referencedSegmentIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class RemoteLogLeaderEpochState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method listAllRemoteLogSegments arguments Map&lt;RemoteLogSegmentId ,RemoteLogSegmentMetadata &gt;  idToSegmentMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState.listAllRemoteLogSegments@POLYN184406 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method collectConvertedIdToMetadata arguments Collection&lt;RemoteLogSegmentId &gt;  segmentIds|Map&lt;RemoteLogSegmentId ,RemoteLogSegmentMetadata &gt;  idToSegmentMetadata|Collection&lt;RemoteLogSegmentMetadata &gt;  result"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument idToSegmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument result is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00057] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState.collectConvertedIdToMetadata@POLYN185382 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState.collectConvertedIdToMetadata@POLYN185382 the MagicNumber/String  'No remote log segment metadata found for :' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method handleSegmentWithCopySegmentStartedState arguments RemoteLogSegmentId  remoteLogSegmentId"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method handleSegmentWithCopySegmentFinishedState arguments Long  startOffset|RemoteLogSegmentId  remoteLogSegmentId|Long  leaderEpochEndOffset"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState.handleSegmentWithCopySegmentFinishedState@POLYN186123 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState.handleSegmentWithCopySegmentFinishedState@POLYN186123 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method handleSegmentWithDeleteSegmentStartedState arguments Long  startOffset|RemoteLogSegmentId  remoteLogSegmentId"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method handleSegmentWithDeleteSegmentFinishedState arguments RemoteLogSegmentId  remoteLogSegmentId"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method floorEntry arguments long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState.floorEntry@POLYN187371 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogLeaderEpochState.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogLeaderEpochState.floorEntry@POLYN187371 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
