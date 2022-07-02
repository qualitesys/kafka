console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java 13 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RemoteLogMetadataSerde"
 , "c2" : "RemoteLogMetadataSerde()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ApiMessage"
 , "c2" : "newApiMessage(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Short,RemoteLogMetadataTransform>"
 , "c2" : "createRemoteLogMetadataTransforms()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Short>"
 , "c2" : "createRemoteLogStorageClassToApiKeyMap()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "serialize(RemoteLogMetadata)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "RemoteLogMetadata"
 , "c2" : "deserialize(byte[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "RemoteLogMetadataTransform"
 , "c2" : "remoteLogMetadataTransform(short)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.svg" }

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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class RemoteLogMetadataSerde contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method newApiMessage arguments short  apiKey"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method serialize arguments RemoteLogMetadata  remoteLogMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument remoteLogMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde.serialize@POLYN182144 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde.serialize@POLYN182144 the MagicNumber/String  'ApiKey for given RemoteStorageMetadata class: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde.serialize@POLYN182144 the MagicNumber/String  ' does not exist.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde.serialize@POLYN182144 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method deserialize arguments byte[]  data"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method remoteLogMetadataTransform arguments short  apiKey"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde.remoteLogMetadataTransform@POLYN183128 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde.remoteLogMetadataTransform@POLYN183128 the MagicNumber/String  'RemoteLogMetadataTransform for apikey: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/serialization/RemoteLogMetadataSerde.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.server.log.remote.metadata.storage.serialization.RemoteLogMetadataSerde.remoteLogMetadataTransform@POLYN183128 the MagicNumber/String  ' does not exist.' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
