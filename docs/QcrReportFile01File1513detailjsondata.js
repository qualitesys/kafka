console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java 11 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RemoteLogMetadataTransform<RemoteLogSegmentMetadata>"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogSegmentMetadataTransform"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogSegmentMetadataTransform" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#20"
 , "c1" : "ApiMessageAndVersion"
 , "c2" : "toApiMessageAndVersion(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#35"
 , "c1" : "List<RemoteLogSegmentMetadataRecord.SegmentLeaderEpochEntry>"
 , "c2" : "createSegmentLeaderEpochsEntry(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#43"
 , "c1" : "RemoteLogSegmentMetadataRecord.RemoteLogSegmentIdEntry"
 , "c2" : "createRemoteLogSegmentIdEntry(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#54"
 , "c1" : "RemoteLogSegmentMetadata"
 , "c2" : "fromApiMessageAndVersion(ApiMessageAndVersion)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#76"
 , "c1" : "RemoteLogSegmentId"
 , "c2" : "buildRemoteLogSegmentId(RemoteLogSegmentMetadataRecord.RemoteLogSegmentIdEntry)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.svg" }

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
 , "c4" : "5"
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
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class RemoteLogSegmentMetadataTransform contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method toApiMessageAndVersion arguments RemoteLogSegmentMetadata  segmentMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument segmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method createSegmentLeaderEpochsEntry arguments RemoteLogSegmentMetadata  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method createRemoteLogSegmentIdEntry arguments RemoteLogSegmentMetadata  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method fromApiMessageAndVersion arguments ApiMessageAndVersion  apiMessageAndVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument apiMessageAndVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method buildRemoteLogSegmentId arguments RemoteLogSegmentMetadataRecord.RemoteLogSegmentIdEntry  entry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument entry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
