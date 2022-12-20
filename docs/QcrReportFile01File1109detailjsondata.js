console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java 17 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00197"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#197"
 , "c1" : "ByteBuffer"
 , "c2" : "serializeMetadata(ExtendedWorkerState;boolean)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c1" : "JoinGroupRequestProtocolCollection"
 , "c2" : "metadataRequest(ExtendedWorkerState;boolean)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c1" : "ExtendedWorkerState"
 , "c2" : "deserializeMetadata(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c1" : "ByteBuffer"
 , "c2" : "serializeAssignment(ExtendedAssignment;boolean)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c1" : "ExtendedAssignment"
 , "c2" : "deserializeAssignment(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c1" : "void"
 , "c2" : "checkVersionCompatibility(short)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00197] For method serializeMetadata arguments ExtendedWorkerState  workerState|boolean  sessioned"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#197"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00197] The argument workerState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method metadataRequest arguments ExtendedWorkerState  workerState|boolean  sessioned"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.metadataRequest@POLYN194767 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.metadataRequest@POLYN194767 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method deserializeMetadata arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method deserializeMetadata list of called methods Object monObjet|org.apache.kafka.connect.runtime.distributed.ExtendedWorkerState header_getShortN196264|org.apache.kafka.common.protocol.types.Struct CONFIG_STATE_V1_readN196421|java.lang.Long configState_getLongN196515|java.lang.String configState_getStringN196609|org.apache.kafka.common.protocol.types.Struct ALLOCATION_V1_readN196703|org.apache.kafka.connect.runtime.distributed.ExtendedAssignment deserializeAssignmentN196797"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method serializeAssignment arguments ExtendedAssignment  assignment|boolean  sessioned"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method serializeAssignment list of called methods Object monObjet|org.apache.kafka.common.protocol.types.Struct assignment_toStructN197582"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.serializeAssignment@POLYN197268 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.serializeAssignment@POLYN197268 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method deserializeAssignment arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method deserializeAssignment list of called methods Object monObjet|org.apache.kafka.connect.runtime.distributed.ExtendedAssignment header_getShortN198647|org.apache.kafka.common.protocol.types.Struct ASSIGNMENT_V1_readN198804"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN198345 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN198345 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method checkVersionCompatibility arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.checkVersionCompatibility@POLYN198967 the MagicNumber/String  'Unsupported subscription version: ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
