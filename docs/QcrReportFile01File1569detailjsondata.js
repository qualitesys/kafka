console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java 7 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RemoteLogMetadataTransform<RemoteLogSegmentMetadataSnapshot>"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogSegmentMetadataSnapshotTransform"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogSegmentMetadataSnapshotTransform" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#16"
 , "c1" : "ApiMessageAndVersion"
 , "c2" : "toApiMessageAndVersion(RemoteLogSegmentMetadataSnapshot)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#31"
 , "c1" : "List<RemoteLogSegmentMetadataSnapshotRecord.SegmentLeaderEpochEntry>"
 , "c2" : "createSegmentLeaderEpochsEntry(Map<Integer,Long>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#40"
 , "c1" : "RemoteLogSegmentMetadataSnapshot"
 , "c2" : "fromApiMessageAndVersion(ApiMessageAndVersion)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c1" : "00014"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class RemoteLogSegmentMetadataSnapshotTransform contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method toApiMessageAndVersion arguments RemoteLogSegmentMetadataSnapshot  segmentMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument segmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method createSegmentLeaderEpochsEntry arguments Map&lt;Integer ,Long &gt;  leaderEpochs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument leaderEpochs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method fromApiMessageAndVersion arguments ApiMessageAndVersion  apiMessageAndVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument apiMessageAndVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataSnapshotTransform.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
