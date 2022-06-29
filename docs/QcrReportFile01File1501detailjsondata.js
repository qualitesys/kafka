console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java 51 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Optional<RemoteLogSegmentMetadata>"
 , "c2" : "remoteLogSegmentMetadata(int;long)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateRemoteLogSegmentMetadata(RemoteLogSegmentMetadataUpdate)"
 , "c3" : "6"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSegmentWithCopySegmentFinishedState(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSegmentWithDeleteSegmentStartedState(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSegmentWithDeleteSegmentFinishedState(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "doHandleSegmentStateTransitionForLeaderEpochs(RemoteLogSegmentMetadata;RemoteLogLeaderEpochState.Action)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "highestOffsetForEpoch(Integer;RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<RemoteLogSegmentMetadata>"
 , "c2" : "listAllRemoteLogSegments()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<RemoteLogSegmentMetadata>"
 , "c2" : "listRemoteLogSegments(int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Long>"
 , "c2" : "highestOffsetForEpoch(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addCopyInProgressSegment(RemoteLogSegmentMetadata)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "checkStateTransition(RemoteLogSegmentState;RemoteLogSegmentState)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class RemoteLogMetadataCache contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method remoteLogSegmentMetadata arguments int  leaderEpoch|long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.remoteLogSegmentMetadata@POLYN220241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.remoteLogSegmentMetadata@POLYN220241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.remoteLogSegmentMetadata@POLYN220241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.remoteLogSegmentMetadata@POLYN220241 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method updateRemoteLogSegmentMetadata arguments RemoteLogSegmentMetadataUpdate  metadataUpdate"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument metadataUpdate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  'Updating remote log segment metadata: [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  'metadataUpdate can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  'No remote log segment metadata found for :' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  'metadataUpdate: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  ' with state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  ' can not be updated' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  'Metadata with the state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.updateRemoteLogSegmentMetadata@POLYN221399 the MagicNumber/String  ' is not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method handleSegmentWithCopySegmentFinishedState arguments RemoteLogSegmentMetadata  remoteLogSegmentMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument remoteLogSegmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method handleSegmentWithDeleteSegmentStartedState arguments RemoteLogSegmentMetadata  remoteLogSegmentMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#113"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00113] The argument remoteLogSegmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.handleSegmentWithDeleteSegmentStartedState@POLYN223567 the MagicNumber/String  'Cleaning up the state for : [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method handleSegmentWithDeleteSegmentFinishedState arguments RemoteLogSegmentMetadata  remoteLogSegmentMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument remoteLogSegmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.handleSegmentWithDeleteSegmentFinishedState@POLYN224042 the MagicNumber/String  'Removing the entry as it reached the terminal state: [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method doHandleSegmentStateTransitionForLeaderEpochs arguments RemoteLogSegmentMetadata  remoteLogSegmentMetadata|RemoteLogLeaderEpochState.Action  action"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument remoteLogSegmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument action is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00144] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method highestOffsetForEpoch arguments Integer  leaderEpoch|RemoteLogSegmentMetadata  segmentMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#152"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00152] The argument segmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.highestOffsetForEpoch@POLYN225359 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.highestOffsetForEpoch@POLYN225359 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method listRemoteLogSegments arguments int  leaderEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.listRemoteLogSegments@POLYN226272 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method highestOffsetForEpoch arguments int  leaderEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.highestOffsetForEpoch@POLYN226845 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method addCopyInProgressSegment arguments RemoteLogSegmentMetadata  remoteLogSegmentMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#184"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00184] The argument remoteLogSegmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.addCopyInProgressSegment@POLYN227332 the MagicNumber/String  'Adding to in-progress state: [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.addCopyInProgressSegment@POLYN227332 the MagicNumber/String  'remoteLogSegmentMetadata can not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.addCopyInProgressSegment@POLYN227332 the MagicNumber/String  'Given remoteLogSegmentMetadata:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.addCopyInProgressSegment@POLYN227332 the MagicNumber/String  ' should have state as ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.addCopyInProgressSegment@POLYN227332 the MagicNumber/String  ' but it contains state as: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.addCopyInProgressSegment@POLYN227332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.addCopyInProgressSegment@POLYN227332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method checkStateTransition arguments RemoteLogSegmentState  existingState|RemoteLogSegmentState  targetState"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.checkStateTransition@POLYN228653 the MagicNumber/String  'Current state: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataCache.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataCache.checkStateTransition@POLYN228653 the MagicNumber/String  ' can not be transitioned to target state: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
