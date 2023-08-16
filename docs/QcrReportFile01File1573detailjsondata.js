console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "RemoteLogMetadataTransform<RemoteLogSegmentMetadata>"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogSegmentMetadataTransform"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogSegmentMetadataTransform" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#35"
 , "c1" : "ApiMessageAndVersion"
 , "c2" : "toApiMessageAndVersion(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#50"
 , "c1" : "List&lt;RemoteLogSegmentMetadataRecord.SegmentLeaderEpochEntry&gt;"
 , "c2" : "createSegmentLeaderEpochsEntry(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#58"
 , "c1" : "RemoteLogSegmentMetadataRecord.RemoteLogSegmentIdEntry"
 , "c2" : "createRemoteLogSegmentIdEntry(RemoteLogSegmentMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#69"
 , "c1" : "RemoteLogSegmentMetadata"
 , "c2" : "fromApiMessageAndVersion(ApiMessageAndVersion)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#91"
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
   {

 "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.svg" }

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
 , "c4" : "5"
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
 , "c1" : "00035"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method toApiMessageAndVersion arguments RemoteLogSegmentMetadata  segmentMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument segmentMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method createSegmentLeaderEpochsEntry arguments RemoteLogSegmentMetadata  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method createRemoteLogSegmentIdEntry arguments RemoteLogSegmentMetadata  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method fromApiMessageAndVersion arguments ApiMessageAndVersion  apiMessageAndVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument apiMessageAndVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method buildRemoteLogSegmentId arguments RemoteLogSegmentMetadataRecord.RemoteLogSegmentIdEntry  entry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument entry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataTransform.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
