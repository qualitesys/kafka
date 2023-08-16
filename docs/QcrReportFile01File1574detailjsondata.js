console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "RemoteLogMetadataTransform<RemoteLogSegmentMetadataUpdate>"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogSegmentMetadataUpdateTransform"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogSegmentMetadataUpdateTransform" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#29"
 , "c1" : "ApiMessageAndVersion"
 , "c2" : "toApiMessageAndVersion(RemoteLogSegmentMetadataUpdate)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#39"
 , "c1" : "RemoteLogSegmentMetadataUpdate"
 , "c2" : "fromApiMessageAndVersion(ApiMessageAndVersion)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#49"
 , "c1" : "RemoteLogSegmentMetadataUpdateRecord.RemoteLogSegmentIdEntry"
 , "c2" : "createRemoteLogSegmentIdEntry(RemoteLogSegmentMetadataUpdate)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method toApiMessageAndVersion arguments RemoteLogSegmentMetadataUpdate  segmentMetadataUpdate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument segmentMetadataUpdate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method fromApiMessageAndVersion arguments ApiMessageAndVersion  apiMessageAndVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument apiMessageAndVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method createRemoteLogSegmentIdEntry arguments RemoteLogSegmentMetadataUpdate  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogSegmentMetadataUpdateTransform.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
